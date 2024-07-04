// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACta6fzMNKyD0FAr-rpAWUPvNsvXNF9VM",
  authDomain: "binge-flix-1986c.firebaseapp.com",
  projectId: "binge-flix-1986c",
  storageBucket: "binge-flix-1986c.appspot.com",
  messagingSenderId: "595826465571",
  appId: "1:595826465571:web:79adae551390588756ca96",
  measurementId: "G-2TXMCCXQR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);