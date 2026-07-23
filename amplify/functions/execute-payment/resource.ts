import { defineFunction, secret } from '@aws-amplify/backend';

export const executePayment = defineFunction({
  name: 'execute-payment',
  entry: './handler.ts',
  environment: {
    STRIPE_SECRET_KEY: secret('STRIPE_SECRET_KEY'),
    STRIPE_MONTHLY_PRODUCT_ID: secret('STRIPE_MONTHLY_PRODUCT_ID')
  }
});