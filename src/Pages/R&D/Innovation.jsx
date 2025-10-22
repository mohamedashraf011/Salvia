// src/pages/Innovation/index.jsx
import React, { useState } from 'react';
import { motion as Motion } from "framer-motion";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import innovationImage from "../../assets/images/Innovation.png";

const Innovation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    console.log("Toggle clicked! State will be:", !isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const handleUpArrowClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const handleDownArrowClick = () => {
    navigate('/next-page');
  };

  return (
    <section className="relative flex flex-col min-h-screen bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white text-center">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      {/* Main Content - Two Columns Layout */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-4 gap-6 relative z-10">
        {/* Left Column: Up Arrow, Title, Text, Down Arrow */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 gap-6">
          {/* Up Arrow */}
          <Motion.div
            className="text-green-300 text-3xl cursor-pointer"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={handleUpArrowClick}
          >
            <FaArrowUp />
          </Motion.div>

          {/* Title */}
          <h1 className="text-5xl md:text-8xl font-extrabold text-green-300">
            <span className="block">Innovation</span>
            <span>in Agriculture</span>
          </h1>

          {/* Text */}
          <p className="max-w-lg text-base md:text-xl text-gray-100 leading-relaxed">
            We collaborate closely with farmers in Egypt and Sudan to implement sustainable agricultural practices,
            <br className="hidden md:block" />
            introduce improved cultivation methods, and optimize harvesting techniques. This allows us to enhance crop
            <br className="hidden md:block" />
            quality while ensuring environmental responsibility.
          </p>

          {/* Down Arrow */}
          <Motion.div
            className="text-green-300 text-3xl cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={handleDownArrowClick}
          >
            <FaArrowDown />
          </Motion.div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center relative -mt-16 lg:-mt-24 z-20">
          <img
            src={innovationImage}
            alt="Innovation in Agriculture"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer
        toggleSidebar={toggleSidebar}
        className="absolute bottom-0 left-0 w-full z-10"
      />
    </section>
  );
};

export default Innovation;