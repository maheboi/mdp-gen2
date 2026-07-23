import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { post } from 'aws-amplify/api';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { DollarSign, Check, ChevronDown, ChevronUp } from 'lucide-react';
import CashAppQR from '../images/ca-code.png';

const stripePromise = loadStripe('pk_live_sT13bwTUAoPgOMm8h8D5ovgD00KiiYoH1x');

const campaignOptions = [
  { id: 'golf-tournament', name: 'Cooz Fam Charity Golf Tournament' },
  { id: 'legacy-mobec', name: 'Cooz Legacy Souvenir Booklet & M.O.B.E.C. Challenge' },
];

const presetAmounts = [25, 50, 100, 250, 15, 150, 300, 500, 1000];

const tiers = [
  { id: 'legacy-link', label: 'Legacy Link', amount: '15', description: '$15 guide' },
  { id: 'partner', label: 'Partner', amount: '150', description: '$150 guide' },
  { id: 'builder', label: 'BUILDER', amount: '300', description: '$300 guide' },
];

const CheckoutForm = ({
  donationAmount,
  setDonationAmount,
  customAmount,
  setCustomAmount,
  donorName,
  setDonorName,
  donorInfo,
  setDonorInfo,
  donationType,
  setDonationType,
  selectedCampaign,
  setSelectedCampaign,
  customReason,
  setCustomReason,
  onSuccess,
  setErrorMessage,
  isSubmitting,
  setIsSubmitting,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [selectedTier, setSelectedTier] = useState('');

  useEffect(() => {
    if (selectedCampaign !== 'legacy-mobec') {
      setSelectedTier('');
    }
  }, [selectedCampaign]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setErrorMessage('Stripe has not loaded yet. Please try again.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) throw new Error(submitError.message);

      const finalAmount = donationAmount === 'custom' ? customAmount : donationAmount;

      if (!finalAmount || isNaN(finalAmount) || Number(finalAmount) <= 0) {
        throw new Error('Please enter a valid donation amount');
      }

      if (!donorInfo.email) {
        throw new Error('Email is required');
      }

      const campaignName =
        campaignOptions.find((c) => c.id === selectedCampaign)?.name ||
        customReason ||
        'General Donation';

      const restOperation = post({
        apiName: 'Donate',
        path: '/stripePayment',
        options: {
          body: {
            amount: finalAmount,
            donorInfo: {
              name: donorName || 'Anonymous',
              email: donorInfo.email,
            },
            campaign: campaignName,
            customReason,
            donationType: 'one-time',
          },
        },
      });

      const { body } = await restOperation.response;
      const response = await body.json();

      const { clientSecret } = response;
      if (!clientSecret) throw new Error('No client secret received');

      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: { return_url: window.location.origin + '/donate?success=true' },
        redirect: 'if_required',
      });

      if (error) throw new Error(error.message);

      onSuccess();
    } catch (err) {
      setErrorMessage(err.message || 'Payment failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Donation Type */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Donation Type</label>
        <div className="flex space-x-4">
          <button
            type="button"
            className={`flex-1 py-3 px-4 rounded-lg border ${
              donationType === 'one-time' ? 'bg-red-900 text-white border-red-900' : 'border-gray-300 hover:border-red-900'
            }`}
            onClick={() => setDonationType('one-time')}
          >
            One-Time Donation
          </button>
          <button
            type="button"
            className={`flex-1 py-3 px-4 rounded-lg border ${
              donationType === 'monthly' ? 'bg-red-900 text-white border-red-900' : 'border-gray-300 hover:border-red-900'
            }`}
            onClick={() => setDonationType('monthly')}
          >
            Monthly Donation
          </button>
        </div>
      </div>

      {/* Select Campaign + Tier Guide */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Select Campaign</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {campaignOptions.map((campaign) => (
            <button
              key={campaign.id}
              type="button"
              className={`py-3 px-4 rounded-lg border text-sm md:text-base ${
                selectedCampaign === campaign.id ? 'bg-red-900 text-white border-red-900' : 'border-gray-300 hover:border-red-900'
              }`}
              onClick={() => setSelectedCampaign(campaign.id)}
            >
              {campaign.name}
            </button>
          ))}
        </div>

        {selectedCampaign === 'legacy-mobec' && (
          <div className="mt-4 p-5 bg-gray-50 border border-gray-200 rounded-xl">
            <label className="block text-gray-700 font-semibold mb-3">Tier Guide (Suggested Amount)</label>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {tiers.map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => {
                    setSelectedTier(tier.id);
                    setDonationAmount(tier.amount);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedTier === tier.id
                      ? 'bg-red-900 text-white border-red-900 shadow-md'
                      : 'bg-white border-gray-300 hover:border-red-400 hover:shadow-sm'
                  }`}
                >
                  <div className="font-semibold text-lg">{tier.label}</div>
                  <div className={`text-sm mt-1 ${selectedTier === tier.id ? 'text-red-100' : 'text-gray-600'}`}>
                    {tier.description}
                  </div>
                </button>
              ))}
            </div>

            <p className="text-sm text-gray-600 mt-3">
              These are suggested guide amounts. You can still adjust freely in the amount section below.
            </p>
          </div>
        )}
      </div>

      {/* Custom Reason */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Custom Reason (Optional)</label>
        <input
          type="text"
          value={customReason}
          onChange={(e) => setCustomReason(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="e.g., In memory of someone..."
        />
      </div>

      {/* Donation Amount */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Donation Amount</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          {presetAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              className={`py-3 px-4 rounded-lg border ${
                donationAmount === amount.toString() ? 'bg-red-900 text-white border-red-900' : 'border-gray-300 hover:border-red-900'
              }`}
              onClick={() => setDonationAmount(amount.toString())}
            >
              ${amount}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Custom Amount"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setDonationAmount('custom');
          }}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Name + Email */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name (optional)</label>
          <input
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email <span className="text-red-600">*</span></label>
          <input
            type="email"
            required
            value={donorInfo.email || ''}
            onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="you@example.com"
          />
        </div>
      </div>

      {/* Payment Info */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Payment Information</h3>
        <div className="p-4 border border-gray-300 rounded-lg bg-gray-50 min-h-[200px]">
          <PaymentElement />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !donationAmount || !donorInfo.email}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg disabled:opacity-50"
      >
        {isSubmitting ? 'Processing...' : 'Donate Now'}
      </button>
    </form>
  );
};

const DonatePage = () => {
  const location = useLocation();
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorInfo, setDonorInfo] = useState({ email: '' });
  const [donationType, setDonationType] = useState('one-time');
  const [selectedCampaign, setSelectedCampaign] = useState('');
  const [customReason, setCustomReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [elementsOptions, setElementsOptions] = useState({
    mode: 'payment',
    currency: 'usd',
    amount: 500,
    appearance: { theme: 'stripe' }
  });

  useEffect(() => {
    const currentAmount = donationAmount === 'custom' ? customAmount : donationAmount;
    const amountInCents = currentAmount && !isNaN(currentAmount) && Number(currentAmount) > 0
      ? Math.round(Number(currentAmount) * 100)
      : 500;

    setElementsOptions({
      mode: 'payment',
      currency: 'usd',
      amount: amountInCents,
      appearance: { theme: 'stripe' }
    });
  }, [donationAmount, customAmount]);

  const handleSuccess = () => setFormSubmitted(true);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-black-900 mb-4">Support Our Mission</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your generous gift helps us nurture the next generation through faith, sports, and leadership.
          </p>
        </div>

        {/* 3 Simple Steps */}
        {!formSubmitted && (
          <div className="max-w-4xl mx-auto mb-10">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Donate in 3 Simple Steps</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-xl">1</div>
                <h3 className="font-semibold text-lg mb-2">Choose Your Impact</h3>
                <p className="text-gray-600 text-sm">
                  Select one-time or monthly giving, then pick the campaign you want to support.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-xl">2</div>
                <h3 className="font-semibold text-lg mb-2">Set Your Amount</h3>
                <p className="text-gray-600 text-sm">
                  Use our suggested amounts, tier guides (when available), or enter any custom amount.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-xl">3</div>
                <h3 className="font-semibold text-lg mb-2">Complete Secure Payment</h3>
                <p className="text-gray-600 text-sm">
                  Enter your info and pay safely with your card through Stripe.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form or Success Message */}
        {formSubmitted ? (
          <div className="max-w-2xl mx-auto bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <Check className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-green-800">Thank You!</h2>
            <p className="text-gray-600 mt-2">Your gift is making a real difference.</p>
            <button 
              onClick={() => setFormSubmitted(false)} 
              className="mt-6 bg-red-900 text-white px-6 py-2 rounded-lg hover:bg-red-800"
            >
              Make Another Donation
            </button>
          </div>
        ) : (
          <Elements stripe={stripePromise} options={elementsOptions}>
            <CheckoutForm
              donationAmount={donationAmount}
              setDonationAmount={setDonationAmount}
              customAmount={customAmount}
              setCustomAmount={setCustomAmount}
              donorName={donorName}
              setDonorName={setDonorName}
              donorInfo={donorInfo}
              setDonorInfo={setDonorInfo}
              donationType={donationType}
              setDonationType={setDonationType}
              selectedCampaign={selectedCampaign}
              setSelectedCampaign={setSelectedCampaign}
              customReason={customReason}
              setCustomReason={setCustomReason}
              onSuccess={handleSuccess}
              setErrorMessage={setErrorMessage}
              isSubmitting={isSubmitting}
              setIsSubmitting={setIsSubmitting}
            />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default DonatePage;