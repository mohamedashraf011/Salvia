import "./App.css";
// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";
import About from "./Pages/About Us/About";
import Mission from "./Pages/About Us/Mission";
import Footer from "./Components/Footer";
import Community from "./Pages/About Us/Community";
import Product from "./Pages/Product/Products";
import OurQuality from "./Pages/OurQuality";
import RnDPage from "./Pages/R&D/RnDPage";
import Innovation from "./Pages/R&D/Innovation";



function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/community" element={<Community />} />
          <Route path="/product" element={<Product />} />
          <Route path="/our-quality" element={<OurQuality />} />
          <Route path="/r-and-d" element={<RnDPage />} />
          <Route path="/innovation" element={<Innovation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
