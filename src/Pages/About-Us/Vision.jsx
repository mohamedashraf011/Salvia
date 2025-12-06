import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import VisionImg from "../../assets/images/vision.png";
import leavesRight from "../../assets/images/tree.png";
import { fetchAboutSections } from "../../api/about";
import Loader from "../../Components/Loader";

const Vision = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const fetchSectionData = async () => {
      try {
        setLoading(true);
        const data = await fetchAboutSections();
        // Try to find a matching section
        const section = data.sections.find(s => s.name.toLowerCase().includes("vision")) ||
                       data.sections.find(s => s.name === "Our Values");
        setSectionData(section);
        setError(false);
      } catch (error) {
        console.error("Error fetching section data:", error);
        setError(true);
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
  const handleUpArrowClick = () => navigate("/reputation");

  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white text-center">
      <img
        src={leavesRight}
        alt="leaves decoration"
        className="absolute top-0 right-0 w-44 md:w-64 opacity-90 pointer-events-none select-none z-30"
      />

      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      <Motion.div
        className="absolute left-1/2 bottom-1/4 -translate-x-1/2 -translate-y-1/2 text-green-300 text-4xl cursor-pointer z-[9999]"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={handleUpArrowClick}
      >
        <FaArrowUp />
      </Motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center px-4 gap-6 flex-grow relative z-10 h-screen">
        <div className="w-full lg:w-1/2 flex justify-start relative z-20">
          <img
            src={VisionImg}
            alt="Our Vision photo"
            className="w-[55%] md:w-[65%] lg:w-[90%] rounded-2xl object-contain"
          />
        </div>

        <div className="flex flex-col items-start justify-center w-full lg:w-1/2 gap-6 text-left">
          <div className="px-5 -translate-y-10 md:-translate-y-18 transition-all duration-500 min-h-[200px] flex flex-col justify-center">
            {loading ? (
              <Loader />
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                  <span className="block">{!error && sectionData ? sectionData.name : "Our Vision"}</span>
                </h1>
                <p className="max-w-2xl text-sm md:text-lg text-gray-100 leading-relaxed">
                  {!error && sectionData ? sectionData.details : (
                    "Our vision is to continue expanding internationally while upholding our core values of quality, sustainability, and partnership. At Salvia Naturals, we believe that nature offers the best solutions - and it is our responsibility to share them with the world."
                  )}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-[999]">
        <Footer toggleSidebar={toggleSidebar} />
      </div>
    </section>
  );
};

export default Vision;
