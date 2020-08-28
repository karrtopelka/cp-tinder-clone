import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYR0dxMtnBymiVOwImcp_LIxcltdjeUUg",
  authDomain: "cp-tinder-clone.firebaseapp.com",
  databaseURL: "https://cp-tinder-clone.firebaseio.com",
  projectId: "cp-tinder-clone",
  storageBucket: "cp-tinder-clone.appspot.com",
  messagingSenderId: "320547016798",
  appId: "1:320547016798:web:35caec0e424e1e8f4e24cf",
  measurementId: "G-T28RPLLWZE",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
