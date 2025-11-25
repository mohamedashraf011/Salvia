import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import ReputationImg from "../../assets/images/reputation.png";
import leavesRight from "../../assets/images/tree.png";
import { DOMAIN } from "../../utils/Domain";

const Reputation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sectionData, setSectionData] = useState({
    name: "Our Reputation",
    details: "With years of experience in the field, Salvia Naturals has built a reputation for professionalism, transparency, and excellence. We are proud to serve clients across the globe in the food, beverage, health, and wellness industries, offering them natural herbs that meet their specific requirements."
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const fetchSectionData = async () => {
      try {
        const response = await fetch(`${DOMAIN}/api/about-us/sections`);
        const data = await response.json();
        // Try to find a matching section, fallback to default
        const section = data.sections.find(s => s.name.toLowerCase().includes("reputation")) || 
                       data.sections.find(s => s.name === "Our Values");
        if (section) {
          setSectionData(section);
        }
      } catch (error) {
        console.error("Error fetching section data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSectionData();
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);
  const handleUpArrowClick = () => navigate("/community");
  const handleDownArrowClick = () => navigate("/vision");

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
                <span className="block">{loading ? "Our Reputation" : sectionData.name}</span>
              </h1>
              <p className="max-w-2xl text-sm md:text-lg text-gray-100 leading-relaxed mt-4">
                {loading ? "Loading..." : sectionData.details}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center relative z-20">
          <img
            src={ReputationImg}
            alt="Reputation photo"
            className="w-[55%] md:w-[65%] lg:w-[90%] rounded-2xl object-contain"
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-[9999]">
        <Footer toggleSidebar={toggleSidebar} />
      </div>
    </section>
  );
};

export default Reputation;
