import { defineFunction, secret } from '@aws-amplify/backend';

export const sheetFetcher = defineFunction({
  name: 'sheet-fetcher',
  entry: './handler.ts',
  environment: {
    GOOGLE_SHEETS_API_KEY: secret('GOOGLE_SHEETS_API_KEY')
  }
});