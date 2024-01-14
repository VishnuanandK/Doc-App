// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCAvvxZy8WpPOek93MHh_assrVM2mfMFek",
  authDomain: "docs-app-81ee5.firebaseapp.com",
  projectId: "docs-app-81ee5",
  storageBucket: "docs-app-81ee5.appspot.com",
  messagingSenderId: "255923397036",
  appId: "1:255923397036:web:6762dcb90d71507d711a09",
  measurementId: "G-N6J4RK19N1"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)