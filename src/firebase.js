import * as firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "******",
    authDomain: "******",
    databaseURL: "******",,
    projectId: "******",,
    storageBucket: "******",,
    messagingSenderId: "******",
    appId: "******",
  };


    firebase.initializeApp(firebaseConfig);


export const wordsDB = firebase.firestore();
