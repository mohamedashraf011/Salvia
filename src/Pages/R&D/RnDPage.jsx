// src/pages/R&D/index.jsx
import React, { useState } from 'react';
import { motion as Motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import backgroundImage from "../../assets/images/RD.png";

const RnDPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    console.log("Toggle clicked! State will be:", !isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const handleArrowClick = () => {
    navigate('/innovation');
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section with Text Overlay */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 text-center text-white relative">
          <div className="max-w-5xl mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 md:mb-20 drop-shadow-lg">
              <span className="text-green-300">Research</span> & <span className="text-green-300">Development</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed drop-shadow-md">
              At Salvia Natural, innovation and continuous improvement are at the heart of our business.
              <br className="hidden md:block" />
              Our Research & 
              Development (R&D) activities are designed to ensure that we consistently deliver safe,
              high-quality, and innovative herbal products to our global customers.
            </p>
          </div>

          <Motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={handleArrowClick}
          >
            <div className="text-green-300 text-3xl cursor-pointer">
              <FaArrowDown />
            </div>
          </Motion.div>
        </div>

        <Footer
          toggleSidebar={toggleSidebar}
          className="absolute bottom-0 left-0 w-full"
        />
      </div>
    </div>
  );
};

export default RnDPage;