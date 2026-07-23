import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Testimony: a
    .model({
      firstName: a.string().required(),
      lastName: a.string().required(),
      phone: a.string().required(),
      participantType: a.string(),
      otherParticipantType: a.string(),
      years: a.string(),
      involvement: a.string(),
      story: a.string().required(),
      firstEncounter: a.string(),
      positiveResults: a.string(),
      inspiration: a.string(),
      uploadedFiles: a.string().array(),
    })
   .authorization((allow) => [
  allow.guest().to(['create']),
  allow.authenticated().to(['create', 'read', 'update', 'delete']),
]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});