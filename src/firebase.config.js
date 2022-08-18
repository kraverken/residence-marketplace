// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrVq9tKhmI3nUci2nT5WmMOxqz9cKISOA",
  authDomain: "residence-marketplace-app.firebaseapp.com",
  projectId: "residence-marketplace-app",
  storageBucket: "residence-marketplace-app.appspot.com",
  messagingSenderId: "792627163011",
  appId: "1:792627163011:web:c85c160937e49baa3e50b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
