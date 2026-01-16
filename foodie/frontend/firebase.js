// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "foodie-food-deivery.firebaseapp.com",
  projectId: "foodie-food-deivery",
  storageBucket: "foodie-food-deivery.firebasestorage.app",
  messagingSenderId: "1068054289696",
  appId: "1:1068054289696:web:7614b020089b61b38b4b45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}