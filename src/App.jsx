import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Career from "./pages/Career";
import Center from "./pages/Center";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";





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
    </Routes>
  );
}

export default App;