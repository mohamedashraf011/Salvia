import React, { useState, useEffect } from "react";
import { fetchRnDSections } from "../../api/rnd";
import { motion as Motion } from "framer-motion";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import Loader from "../../Components/Loader";
import QualityAndSafetyResearchImage from "../../assets/images/Quality.png";

const Quality = () => {
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
        const section = data.sections.find(s => s.name.includes("Quality"));
        setSectionData(section);
      } catch (error) {
        console.error("Failed to load Quality section data", error);
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
  const handleUpArrowClick = () => navigate("/product-development");
  const handleDownArrowClick = () => navigate("/packaging");

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

            <div className="px-5 -translate-y-8 md:-translate-y-22 transition-all duration-500 min-h-[200px] flex flex-col justify-center">
              {loading ? (
                <Loader />
              ) : (
                <>
                  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                    {sectionData ? sectionData.name : "Quality & Safety Research"}
                  </h1>

                  <div className="max-w-2xl text-sm md:text-lg text-gray-100 leading-relaxed">
                    {sectionData ? (
                      <div dangerouslySetInnerHTML={{ __html: sectionData.details }} />
                    ) : (
                      <>
                        <p>
                          We invest in scientific research and laboratory testing to
                          monitor:
                        </p>

                        <ul className="list-disc list-inside text-gray-100 text-sm md:text-lg leading-relaxed mt-2 pl-6 md:pl-8 space-y-2">
                          <li>Pesticide residues</li>
                          <li>Heavy metals</li>
                          <li>Microbiology (pathogens, yeasts, and moulds)</li>
                          <li>Pyrrolizidine alkaloids (PAs)</li>
                          <li>Polycyclic aromatic hydrocarbons (PAHs)</li>
                          <li>Moisture control and stability</li>
                        </ul>

                        <p className="mt-4">
                          This ensures that all our products meet international standards
                          and continue to evolve with changing regulations.
                        </p>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center relative z-20">
          <img
            src={QualityAndSafetyResearchImage}
            alt="Quality and Safety Research"
            className="w-[55%] md:w-[40%] lg:w-[45%] rounded-2xl shadow-2xl object-contain"
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-[9999]">
        <Footer toggleSidebar={toggleSidebar} />
      </div>
    </section>
  );
};

export default Quality;
