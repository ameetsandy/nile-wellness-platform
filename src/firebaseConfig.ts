// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8ivdjElwzi1Lpdkf0YO9Cn3iI6WhyELo",
  authDomain: "nilewellness1-70b3f.firebaseapp.com",
  projectId: "nilewellness1-70b3f",
  storageBucket: "nilewellness1-70b3f.firebasestorage.app",
  messagingSenderId: "696188282218",
  appId: "1:696188282218:web:8c5a74f1e3c482caa17113"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }; 