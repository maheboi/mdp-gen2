import { defineBackend } from '@aws-amplify/backend';
import { sheetFetcher } from './functions/sheet-fetcher/resource';
import { auth } from './auth/resource';
import { storage } from './storage/resource';
import { data } from './data/resource';
import { executePayment } from './functions/execute-payment/resource';
import { Stack } from 'aws-cdk-lib';
import {
  AuthorizationType,
  Cors,
  LambdaIntegration,
  RestApi,
} from 'aws-cdk-lib/aws-apigateway';

const backend = defineBackend({
  auth,
  sheetFetcher,
  executePayment,
  storage,
  data,
});

// ===== SheetAPI =====
const sheetApiStack = backend.createStack('SheetAPI');
const sheetApi = new RestApi(sheetApiStack, 'SheetAPI', {
  restApiName: 'SheetAPI',
  deploy: true,
  defaultCorsPreflightOptions: {
    allowOrigins: Cors.ALL_ORIGINS,
    allowMethods: Cors.ALL_METHODS,
    allowHeaders: Cors.DEFAULT_HEADERS,
  },
});

const sheetIntegration = new LambdaIntegration(backend.sheetFetcher.resources.lambda);
const sheetPath = sheetApi.root.addResource('sheet');
sheetPath.addMethod('GET', sheetIntegration, {
  authorizationType: AuthorizationType.NONE,
});
sheetPath.addMethod('POST', sheetIntegration, {
  authorizationType: AuthorizationType.NONE,
});

// ===== Donate API =====
const donateApiStack = backend.createStack('DonateAPI');
const donateApi = new RestApi(donateApiStack, 'Donate', {
  restApiName: 'Donate',
  deploy: true,
  defaultCorsPreflightOptions: {
    allowOrigins: Cors.ALL_ORIGINS,
    allowMethods: Cors.ALL_METHODS,
    allowHeaders: Cors.DEFAULT_HEADERS,
  },
});

const paymentIntegration = new LambdaIntegration(backend.executePayment.resources.lambda);
const paymentPath = donateApi.root.addResource('stripePayment');
paymentPath.addMethod('POST', paymentIntegration, {
  authorizationType: AuthorizationType.NONE,
});


// Make the APIs available to the frontend
backend.addOutput({
  custom: {
    API: {
      SheetAPI: {
        endpoint: sheetApi.url,
        region: Stack.of(sheetApi).region,
      },
      Donate: {
        endpoint: donateApi.url,
        region: Stack.of(donateApi).region,
      },
    },
  },
});