// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_iUjKtYHPN0KPWBnOG2XuM5P2kMy_7es",
  authDomain: "login-35e6f.firebaseapp.com",
  projectId: "login-35e6f",
  storageBucket: "login-35e6f.firebasestorage.app",
  messagingSenderId: "1083378671921",
  appId: "1:1083378671921:web:a677985c993379c0395010",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
