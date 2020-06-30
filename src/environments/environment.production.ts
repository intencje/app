import { version } from '../../package.json';

export const environment = {
  production: true,
  version: version,
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
  },
  url: '',
};
