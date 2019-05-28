import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAEPFEuZsSY3gqgx1MNipHP5ccRGgOydhk',
  authDomain: 'contact-app1-f47a6.firebaseapp.com',
  databaseURL: 'https://contact-app1-f47a6.firebaseio.com',
  projectId: 'contact-app1-f47a6',
  storageBucket: 'contact-app1-f47a6.appspot.com',
  messagingSenderId: '881057084561',
  appId: '1:881057084561:web:3319b1f872df8186'
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
