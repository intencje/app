import { version } from '../../package.json';

export const environment = {
  production: true,
  serviceWorker: false,
  version: version,
  firebase: {
    apiKey: 'AIzaSyCxiDsyOSFOhUcD2Lq_mo5zPPz0oasu-AY',
    authDomain: 'intencje-app.firebaseapp.com',
    databaseURL: 'https://intencje-app.firebaseio.com',
    projectId: 'intencje-app',
    storageBucket: 'intencje-app.appspot.com',
    messagingSenderId: '1047051146932',
    appId: '1:1047051146932:web:1ce41d3e15889020a6a9e1',
    measurementId: 'G-H9ZQTFM5XV',
  },
  url: 'https://intencje.pl',
};
