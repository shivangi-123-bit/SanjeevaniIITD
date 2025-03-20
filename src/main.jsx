import React from "react";
import ReactDOM from "react-dom/client"; // Use the new client API
import App from "./App";
import { AuthProvider } from "./contexts/authContext/authContext";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);