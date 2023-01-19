import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
    apiKey: "AIzaSyCVu8HHcba5YQCYzM2Iw7-BweMzpjf7AbM",
    authDomain: "chat-app-772e3.firebaseapp.com",
    databaseURL: "https://chat-app-772e3-default-rtdb.firebaseio.com",
    projectId: "chat-app-772e3",
    storageBucket: "chat-app-772e3.appspot.com",
    messagingSenderId: "224934355798",
    appId: "1:224934355798:web:840be9ecca0fea8d6b6cf7",
    measurementId: "G-LVHZDJ85KF"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(config);
  export const auth = app.auth();
export const database = app.database();
