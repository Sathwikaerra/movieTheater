// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_KEY,
  authDomain: "booktickets-e964e.firebaseapp.com",
  projectId: "booktickets-e964e",
  storageBucket: "booktickets-e964e.appspot.com",
  messagingSenderId: "141281846298",
  appId: "1:141281846298:web:d1a60787641bad1a3f5da3",
  measurementId: "G-H3R5ZD00P7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

