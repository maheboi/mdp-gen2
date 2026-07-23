import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'mdpStorage',
  access: (allow) => ({
    'testimonies/*': [
      allow.guest.to(['read', 'write']),
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
  }),
});