import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import leftImage from "../../assets/images/packaging-left.png"; // Replace with actual left image path
import middleImage from "../../assets/images/packaging-middle.png"; // Replace with actual middle image path
import rightImage from "../../assets/images/packaging-right.png"; // Replace with actual right image path
import logoImage from "../../assets/images/logo.png"; // Replace with actual logo image path

const Packaging = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);
  const handleUpArrowClick = () => navigate("/quality");
  const handleDownArrowClick = () => navigate("/commitment");

  // Component for an image with logo overlay
  const ImageWithLogo = ({ src, sizeClass = "w-[40%]", logoPosition = "bottom-2 right-2" }) => (
    <div className="relative flex-shrink-0">
      <img
        src={src}
        alt="Packaging Image"
        className={`${sizeClass} rounded-2xl shadow-2xl object-contain`}
      />
      <img
        src={logoImage}
        alt="Logo"
        className={`absolute ${logoPosition} w-12 h-12 object-contain opacity-80`} // Adjust size and position as needed
      />
    </div>
  );

  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white text-center">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 gap-6 flex-grow relative z-10 h-screen">
        {/* Left Column */}
        <div className="flex flex-col items-start justify-center w-full lg:w-1/2 gap-6 text-left">
          <div className="flex items-center gap-4">
            {/* Arrows on the left side */}
            <div className="flex flex-col items-center gap-6 mx-6">
              <Motion.div
                className="text-green-300 text-3xl cursor-pointer"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                onClick={handleUpArrowClick}
              >
                <FaArrowUp />
              </Motion.div>

              <Motion.div
                className="text-green-300 text-3xl cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                onClick={handleDownArrowClick}
              >
                <FaArrowDown />
              </Motion.div>
            </div>

            {/* Title and Text */}
            <div className="px-5 -translate-y-8 md:-translate-y-12 transition-all duration-500">
              <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-8">
                <span className="block">Packaging &</span>
                <span>Shelf-Life Studies</span>
              </h1>
              <p className="max-w-2xl text-sm md:text-lg text-gray-100 leading-relaxed mt-4">
                We conduct ongoing research into safe and eco-friendly packaging
                solutions that preserve the freshness, aroma, and integrity of
                our herbs throughout the supply chain.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Three Images with Logos) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative z-20">
          <div className="flex items-center justify-center gap-4 w-full">
            {/* Left small image */}
            <ImageWithLogo src={leftImage} sizeClass="w-[30%] lg:w-[25%]" logoPosition="bottom-2 right-2" />
            
            {/* Middle normal size image */}
            <ImageWithLogo src={middleImage} sizeClass="w-[50%] lg:w-[40%]" logoPosition="bottom-2 right-2" />
            
            {/* Right small image */}
            <ImageWithLogo src={rightImage} sizeClass="w-[30%] lg:w-[25%]" logoPosition="bottom-2 right-2" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full z-[9999]">
        <Footer toggleSidebar={toggleSidebar} />
      </div>
    </section>
  );
};

export default Packaging;