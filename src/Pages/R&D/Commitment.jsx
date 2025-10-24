import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import commitmentImage from "../../assets/images/Commitment.png";
import leavesRight from "../../assets/images/tree.png";

const Commitment = () => {
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
  const handleUpArrowClick = () => navigate("/packaging");

  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white text-center">
      <img
        src={leavesRight}
        alt="leaves decoration"
        className="absolute top-0 right-0 w-44 md:w-64 opacity-90 pointer-events-none select-none z-30"
      />
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
            </div>

            <div className="px-5 -translate-y-10 md:-translate-y-20 transition-all duration-500">
              <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
                Commitment 
                <br />to Progress
              </h1>
              <p className="max-w-2xl text-sm md:text-lg text-gray-100 leading-relaxed mb-4">
                By investing in R&D, we strengthen our ability to anticipate
                customer needs, respond to industry challenges, and deliver
                products that combine natural purity with scientific reliability.
              </p>
              <p>
                At Salvia Naturals, R&D is not only about product development -
                it is about building a future where natural herbs contribute to
                global health, wellness, and sustainability.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center relative z-20">
          <img
            src={commitmentImage}
            alt="Commitment to Sustainability"
            className="w-[55%] md:w-[40%] lg:w-[55%] rounded-2xl shadow-2xl object-contain z-20"
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-[9999]">
        <Footer toggleSidebar={toggleSidebar} />
      </div>
    </section>
  );
};

export default Commitment;