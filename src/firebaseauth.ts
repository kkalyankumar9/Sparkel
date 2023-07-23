
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCI8xYPOnphqor_66aAh3ZxzhElBjJ09qw",
  authDomain: "sparkel-authencation.firebaseapp.com",
  projectId: "sparkel-authencation",
  storageBucket: "sparkel-authencation.appspot.com",
  messagingSenderId: "119579591742",
  appId: "1:119579591742:web:f6c87a595b563b23697d6f",
  measurementId: "G-RRDSN7ZYKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export {app, auth}
