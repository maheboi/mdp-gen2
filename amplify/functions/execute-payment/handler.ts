/// <reference types="node" />
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json'
};

export const handler = async (event: any) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders, body: '' };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { amount, donorInfo = {}, donationType = 'one-time', campaign, customReason } = body;

    if (!amount || Number(amount) < 0.50) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Minimum donation is $0.50' })
      };
    }

    if (!donorInfo.email) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Email is required' })
      };
    }

    const amountCents = Math.round(Number(amount) * 100);

    const metadata = {
      donor_email: donorInfo.email,
      donor_name: `${donorInfo.firstName || ''} ${donorInfo.lastName || ''}`.trim(),
      campaign: campaign || customReason || 'Donation',
      donation_type: donationType
    };

    let clientSecret: string;

    if (donationType === 'monthly') {
      const productId = process.env.STRIPE_MONTHLY_PRODUCT_ID;
      if (!productId) throw new Error('Missing monthly product ID');

      const customer = await stripe.customers.create({
        email: donorInfo.email,
        metadata
      });

      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{
          price_data: {
            currency: 'usd',
            product: productId,
            unit_amount: amountCents,
            recurring: { interval: 'month' }
          }
        }],
        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent'],
        metadata
      });

      clientSecret = (subscription.latest_invoice as any).payment_intent.client_secret;
    } else {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amountCents,
        currency: 'usd',
        automatic_payment_methods: { enabled: true },
        receipt_email: donorInfo.email,
        metadata
      });
      clientSecret = paymentIntent.client_secret as string;
    }

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ clientSecret })
    };
  } catch (err: any) {
    console.error('Error:', err);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: err.message || 'Payment setup failed' })
    };
  }
};