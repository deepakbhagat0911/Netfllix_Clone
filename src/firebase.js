// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTml0RRE9cMV-AczuTyCfao5_ru98c4sc",
  authDomain: "netflix-clone-c8c62.firebaseapp.com",
  projectId: "netflix-clone-c8c62",
  storageBucket: "netflix-clone-c8c62.appspot.com",
  messagingSenderId: "289512135492",
  appId: "1:289512135492:web:f72ab014923dc348991511",
  measurementId: "G-GD7GM9V7SN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
