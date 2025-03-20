// src/components/AuthForm.jsx
import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
 import { useAuth } from "../contexts/authContext/authContext.jsx";

const AuthForm = ({ type }) => {
  const { currentUser } = useAuth();
  const isLogin = type === "login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // 📧 Handle email/password login/signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await doSignInWithEmailAndPassword(email, password);
      } else {
        await doCreateUserWithEmailAndPassword(email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // 🔥 Handle Google Sign-in
  const handleGoogleSignIn = async () => {
    try {
      await doSignInWithGoogle();
    } catch (err) {
      setError(err.message);
    }
  };

  if (currentUser) {
    return <Navigate to="/dashboard" replace={true} />;
  }

  return (
    <div className="min-h-screen bg-[#FFF7F0] flex items-center justify-center">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        {/* ✅ Left Side - Illustration */}
        <div className="w-1/2 hidden lg:block">
          <img
            src="/assets/doctor-illustration.png"
            alt="Healthcare Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ✅ Right Side - Auth Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* 📧 Email Input */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          />

          {/* 🔒 Password Input */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          />

          {/* 🚀 Sign In / Sign Up Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-2 rounded-lg mb-4"
          >
            {isLogin ? "Sign in" : "Sign up"}
          </button>

          {/* ➖ OR Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-sm text-gray-500">
              Or continue with
            </span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* 🔥 Google Sign-In Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center mb-4"
          >
            <img
              src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          {/* 🔄 Switch to Signup / Login */}
          <p className="text-sm text-gray-600">
            {isLogin
              ? "Don't have an account? "
              : "Already have an account? "}
            <Link
              to={isLogin ? "/signup" : "/login"}
              className="text-blue-600 hover:underline"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;