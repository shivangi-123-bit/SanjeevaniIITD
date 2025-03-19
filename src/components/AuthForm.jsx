import React from "react";
  
const AuthForm = ({ type }) => {
  const isLogin = type === "login";

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
          <p className="text-gray-600 mb-6">
            {isLogin
              ? "Please sign in to your account"
              : "Please sign up to get started"}
          </p>

          {/* 📧 Email Input */}
          <input
            type="text"
            placeholder="Email / Phone Number / Jeevani ID"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          />

          {/* 🔒 Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          />

          {/* 🔄 Remember Me + Forgot Password */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            {isLogin && (
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            )}
          </div>

          {/* 🚀 Sign In / Sign Up Button */}
          <button className="w-full bg-black text-white py-2 rounded-lg mb-4">
            {isLogin ? "Sign in" : "Sign up"}
          </button>

          {/* ➖ OR Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-sm text-gray-500">Or continue with</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* 🔥 Google Sign-In Button */}
          <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center mb-4">
            <img
              src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          {/* 🔄 Switch to Signup / Login */}
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <a
              href={isLogin ? "/signup" : "/login"}
              className="text-blue-600 hover:underline"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
