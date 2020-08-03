import * as firebase from "firebase";

const config = {
  apiKey: "",
  authDomain: "contact-app1-f47a6.firebaseapp.com",
  databaseURL: "https://contact-app1-f47a6.firebaseio.com",
  projectId: "contact-app1-f47a6",
  storageBucket: "contact-app1-f47a6.appspot.com",
  messagingSenderId: "881057084561",
  appId: "1:881057084561:web:3319b1f872df8186",
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

//test
// apiKey: "AIzaSyCrKM792JdoV3nyc5tV-dBVf3V3m0ONw3s",
//AIzaSyAEPFEuZsSY3gqgx1MNipHP5ccRGgOydhk
//   authDomain: "contact-app-e5e8f.firebaseapp.com",
//   databaseURL: "https://contact-app-e5e8f.firebaseio.com",
//   projectId: "contact-app-e5e8f",
//   storageBucket: "contact-app-e5e8f.appspot.com",
//   messagingSenderId: "150279404093",
//   appId: "1:150279404093:web:663d14ce52f53acc"
