// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDvDI5h5O7tA5Vjvlm2rkjS1YuohsW4T0",
  authDomain: "netfix-gpt-5b21d.firebaseapp.com",
  projectId: "netfix-gpt-5b21d",
  storageBucket: "netfix-gpt-5b21d.appspot.com",
  messagingSenderId: "303093658425",
  appId: "1:303093658425:web:e03c4a80ce3ba6cc5ceee8",
  measurementId: "G-CDN3Q1TTXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);