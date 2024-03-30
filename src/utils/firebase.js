// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzu9BoUF0u0AcZQL_RR7AEVfENClR-nSE",
  authDomain: "videostreamingapp-f534c.firebaseapp.com",
  projectId: "videostreamingapp-f534c",
  storageBucket: "videostreamingapp-f534c.appspot.com",
  messagingSenderId: "513334508310",
  appId: "1:513334508310:web:8ed5cfb95da0fa379b2e37",
  measurementId: "G-M4FE1LZ1CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);