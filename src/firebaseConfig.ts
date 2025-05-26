// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7Z1K0sveSmBklxUDPCeImwzGBSiJZMIo",
  authDomain: "nilewellness1.firebaseapp.com",
  projectId: "nilewellness1",
  storageBucket: "nilewellness1.firebasestorage.app",
  messagingSenderId: "570005277635",
  appId: "1:570005277635:web:d79fcfb9841b202e9d8b76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }; 