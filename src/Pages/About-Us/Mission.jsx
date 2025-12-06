import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import tree from "../../assets/images/tree.png";
import tractor from "../../assets/images/tractor.png";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import { fetchAboutSections } from "../../api/about";
import Loader from "../../Components/Loader";

function Mission() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        setLoading(true);
        const data = await fetchAboutSections();
        const missionSection = data.sections.find(section => section.name === "Our Mission");
        setSectionData(missionSection);
        setError(false);
      } catch (error) {
        console.error("Error fetching section data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchSectionData();
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const handleUpClick = () => {
    navigate("/about");
  };

  const handleDownClick = () => {
    navigate("/community");
  };

  return (
    <section className="relative flex flex-col min-h-screen bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white overflow-hidden">
      <img
        src={tree}
        alt="leaves"
        className="absolute top-0 right-0 w-40 md:w-64 opacity-90 pointer-events-none"
      />

      <div className="flex flex-1 flex-row items-start justify-start gap-16 pl-3 pr-10 md:pl-6 md:pr-20 pt-40 pb-10 relative z-10">
        <div className="flex flex-row items-start gap-6">
          <div className="flex flex-col items-center text-green-300 text-2xl gap-6 pt-16 z-50 relative">
            <Motion.div
              className="cursor-pointer"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              onClick={handleUpClick}
            >
              <FaArrowUp className="duration-200 text-3xl cursor-pointer" />
            </Motion.div>
            <Motion.div
              className="cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              onClick={handleDownClick}
            >
              <FaArrowDown className="duration-200 text-3xl cursor-pointer" />
            </Motion.div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white self-start">
            {loading ? <Loader /> : (!error && sectionData ? sectionData.name : "Our Mission")}
          </h1>
        </div>

        <div className="max-w-xl text-left text-2xl leading-relaxed self-start">
          {loading ? (
             <div className="mt-10"><Loader /></div>
          ) : (
            <p>
              {!error && sectionData ? sectionData.details : (
                "Our mission is to deliver products that combine authenticity, purity, and consistency. Every step of our process - from carefully selecting raw materials at the farm level, to applying rigorous processing and quality control measures - is designed to meet international food safety and quality standards."
              )}
            </p>
          )}
        </div>
      </div>

      <div className="absolute -bottom-0.5 left-0 w-[45%] md:w-[50%] pointer-events-none">
        <img
          src={tractor}
          alt="tractor"
          className="w-full object-contain drop-shadow-lg"
        />
      </div>

      <Footer toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </section>
  );
}

export default Mission;
