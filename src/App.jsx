import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Career from "./pages/Career";
import Center from "./pages/Center";
import Checkout from "./pages/Chekout";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import ForgotPassword from "./pages/ForgotPassword";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import NewsDetails from "./pages/News/newsDetails";
import Onboarding from "./pages/Onboarding";
import Otp from "./pages/Otp";
import Register from "./pages/Register";
import SuperMarket from "./pages/Supermarket";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/career" element={<Career />} />
      <Route path="/centers" element={<Center />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
      <Route path="/otp" element={!user?.confirmed ? <Otp /> : <Navigate to="/register" />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/news" element={<News />} />
      <Route path="/supermarket" element={<SuperMarket />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/news/:id" element={<NewsDetails />} />
    </Routes>
  );
}

export default App;
