
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


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

export {storages, firestores, timestamp};