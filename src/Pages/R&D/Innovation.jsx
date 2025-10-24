import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import innovationImage from "../../assets/images/Innovation.png";

const Innovation = () => {
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
  const handleUpArrowClick = () => navigate("/r-and-d");
  const handleDownArrowClick = () => navigate("/product-development");


  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white text-center">
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      <div className="flex flex-col lg:flex-row items-center justify-center px-4 gap-6 flex-grow relative z-10 h-screen">
        <div className="flex flex-col items-start justify-center w-full lg:w-1/2 gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-6 mx-3">
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

            <div className="px-5 -translate-y-10 md:-translate-y-18 transition-all duration-500">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
                <span className="block">Innovation</span>
                <span>in Agriculture</span>
              </h1>
              <p className="max-w-2xl text-sm md:text-lg text-gray-100 leading-relaxed mt-4">
                We collaborate closely with farmers in Egypt and Sudan to
                implement sustainable agricultural practices, introduce improved
                cultivation methods, and optimize harvesting techniques. This
                allows us to enhance crop quality while ensuring environmental
                responsibility.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center relative z-20">
          <img
            src={innovationImage}
            alt="Innovation in Agriculture"
            className="w-[55%] md:w-[60%] lg:w-[65%] rounded-2xl shadow-2xl object-contain"
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-[9999]">
        <Footer toggleSidebar={toggleSidebar} />
      </div>
    </section>
  );
};

export default Innovation;
