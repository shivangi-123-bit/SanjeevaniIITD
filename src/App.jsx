import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./components/login";
import Signup from "./components/Signup";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./components/Dashboard";
import Appointments from "./components/Appointments";
import HealthTrends from "./components/HealthTrends";
import MedicalHistory from "./components/MedicalHistory";
import HealthProfile from "./components/HealthProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/healthtrends" element={<HealthTrends />} />
        <Route path="/medicalhistory" element={<MedicalHistory />} />
        <Route path="/healthprofile" element={<HealthProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
