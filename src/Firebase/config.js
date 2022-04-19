
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHtZtLEA7RE-vXFX_ummeMXD5AtZMjUmU",
  authDomain: "forum-75156.firebaseapp.com",
  projectId: "forum-75156",
  storageBucket: "forum-75156.appspot.com",
  messagingSenderId: "693892525051",
  appId: "1:693892525051:web:85ea9289d77d4042e7395e",
  measurementId: "G-H15ZCR8E4F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Storage
const storages = firebase.storage();
const firestores = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const auth = firebase.auth();

export {storages, firestores, timestamp};