// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSFwMJdpLvP1I1XIFP8YJjtIUitufZikw",
  authDomain: "login-9bd55.firebaseapp.com",
  projectId: "login-9bd55",
  storageBucket: "login-9bd55.firebasestorage.app",
  messagingSenderId: "607917375325",
  appId: "1:607917375325:web:12b94e1fe585734105f2b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // <-- ✅ Correct export

export { auth }; // ✅ Correct export for auth
export default app;