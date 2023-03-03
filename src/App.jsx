import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Career from "./pages/Career";
import Center from "./pages/Center";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import ForgotPassword from "./pages/ForgotPassword";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import Otp from "./pages/Otp";
import Register from "./pages/Register";





function App() {

 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/career" element={<Career />} />
      <Route path="/centers" element={<Center />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  );
}

export default App;