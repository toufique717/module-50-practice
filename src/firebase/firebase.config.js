// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1GJs5jz8u7wAfz2qt6foGILMgbMwor9I",
  authDomain: "module-50-practice-25c2d.firebaseapp.com",
  projectId: "module-50-practice-25c2d",
  storageBucket: "module-50-practice-25c2d.firebasestorage.app",
  messagingSenderId: "13295652551",
  appId: "1:13295652551:web:31c2b4f59119f6cd5338e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;