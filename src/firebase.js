import * as firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCrq2X2RujsydBw5_FuavOhLAbB79jAnek",
    authDomain: "studyapp-7ab19.firebaseapp.com",
    databaseURL: "https://studyapp-7ab19.firebaseio.com",
    projectId: "studyapp-7ab19",
    storageBucket: "studyapp-7ab19.appspot.com",
    messagingSenderId: "540234084696",
    appId: "1:540234084696:web:ff5396b2cbbd3d8124352d"
  };


    firebase.initializeApp(firebaseConfig);


export const wordsDB = firebase.firestore();