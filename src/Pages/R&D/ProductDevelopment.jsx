import React, { useState, useEffect } from "react";
import { fetchRnDSections } from "../../api/rnd";
import { motion as Motion } from "framer-motion";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import Loader from "../../Components/Loader";
import productDevelopmentImage from "../../assets/images/ProductDevelopment.png";

const ProductDevelopment = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchRnDSections();
        const section = data.sections.find(s => s.name.includes("Product Development"));
        setSectionData(section);
      } catch (error) {
        console.error("Failed to load Product Development section data", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);
  const handleUpArrowClick = () => navigate("/innovation");
  const handleDownArrowClick = () => navigate("/quality");

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

            <div className="px-5 -translate-y-10 md:-translate-y-18 transition-all duration-500 min-h-[200px] flex flex-col justify-center">
              {loading ? (
                <Loader />
              ) : (
                <>
                  <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-8">
                    {sectionData ? sectionData.name : "Product Development"}
                  </h1>
                  <p className="max-w-2xl text-sm md:text-lg text-gray-100 leading-relaxed mt-4">
                    {sectionData ? sectionData.details : (
                      "Our R&D team works on developing new herbal products tailored to the needs of the food, beverage, and wellness industries. By studying global market trends and customer requirements, we create solutions that balance tradition with modern applications."
                    )}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center relative z-20">
          <img
            src={productDevelopmentImage}
            alt="Product Development"
            className="w-[55%] md:w-[40%] lg:w-[50%] rounded-2xl shadow-2xl object-contain"
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-[9999]">
        <Footer toggleSidebar={toggleSidebar} />
      </div>
    </section>
  );
};

export default ProductDevelopment;
