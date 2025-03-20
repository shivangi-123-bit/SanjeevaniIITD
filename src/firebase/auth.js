// src/firebase/auth.js
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
  } from "firebase/auth";
  import { auth } from "./firebaseConfig";
  
  // 📧 Sign in with Email and Password
  export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  // 🆕 Create User with Email and Password
  export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  // 🔥 Sign in with Google
  const provider = new GoogleAuthProvider();
  export const doSignInWithGoogle = async () => {
    return signInWithPopup(auth, provider);
  };
  
  // 🚪 Sign out
  export const doSignOut = async () => {
    return signOut(auth);
  };
  