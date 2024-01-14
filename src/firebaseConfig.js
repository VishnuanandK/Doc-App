// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyoyf2Id6Dk_uaD1vkO3gAEELDXA0ICxA",
  authDomain: "doc-app-fc053.firebaseapp.com",
  projectId: "doc-app-fc053",
  storageBucket: "doc-app-fc053.appspot.com",
  messagingSenderId: "530166124252",
  appId: "1:530166124252:web:f8cf09aeab37fd63356e19",
  measurementId: "G-PJR4HD9MRS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)