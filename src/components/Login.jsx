import React from "react";
import AuthForm from "./AuthForm";
import Footer from "../pages/LandingPage";

const Login = () => {
  return (
    <>
      <AuthForm type="login" />
      <Footer />
    </>
  );
};

export default Login;
