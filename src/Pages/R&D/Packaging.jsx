import React, { useState, useEffect } from "react";
import { fetchRnDSections } from "../../api/rnd";
import { motion as Motion } from "framer-motion";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import Loader from "../../Components/Loader";
import leftImage from "../../assets/images/packaging-left.png";
import middleImage from "../../assets/images/packaging-middle.png";
import rightImage from "../../assets/images/packaging-right.png";
import logoImage from "../../assets/images/logo.png";
import logopackag from "../../assets/images/logopackag.png";

const Packaging = () => {
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
        const section = data.sections.find(s => s.name.includes("Packaging"));
        setSectionData(section);
      } catch (error) {
        console.error("Failed to load Packaging section data", error);
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
  const handleUpArrowClick = () => navigate("/quality");
  const handleDownArrowClick = () => navigate("/commitment");

  // Component for an image with logo overlay
  const ImageWithLogo = ({
    src,
    sizeClass = "w-[40%]",
    logoClass = "bottom-20 left-1/2 -translate-x-1/2 w-32 h-32",
    logoSrc = logoImage,
  }) => (
    <div className="relative flex-shrink-0">
      <img
        src={src}
        alt="Packaging Image"
        className={`${sizeClass} rounded-2xl shadow-2xl object-contain`}
      />
      <img
        src={logoSrc}
        alt="Logo"
        className={`absolute ${logoClass} object-contain opacity-90`}
      />
    </div>
  );

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

            {/* Title and Text */}
            <div className="px-5 -translate-y-10 md:-translate-y-20 transition-all duration-500 min-h-[200px] flex flex-col justify-center">
              {loading ? (
                <Loader />
              ) : (
                <>
                  <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-8">
                    {sectionData ? (
                      <span className="block">{sectionData.name}</span>
                    ) : (
                      <>
                        <span className="block">Packaging &</span>
                        <span>Shelf-Life Studies</span>
                      </>
                    )}
                  </h1>
                  <p className="max-w-2xl text-sm md:text-lg text-gray-100 leading-relaxed mt-4">
                    {sectionData ? sectionData.details : (
                      "We conduct ongoing research into safe and eco-friendly packaging solutions that preserve the freshness, aroma, and integrity of our herbs throughout the supply chain."
                    )}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center relative z-20 invisible" />
      </div>

      <div className="absolute bottom-16 right-8 lg:right-16 flex justify-end items-end -mx-4 lg:-mx-8 z-20">
        {/* Left small image */}
        <div className="relative">
          <ImageWithLogo
            src={leftImage}
            sizeClass="w-[120px] lg:w-[200px]"
            logoClass="bottom-20 left-1/2 -translate-x-1/2 w-16 h-16 lg:w-28 lg:h-28"
          />
        </div>

        {/* Middle large image*/}
        <div className="relative z-10">
          <ImageWithLogo
            src={middleImage}
            sizeClass="w-[180px] lg:w-[350px]"
            logoClass="bottom-32 left-1/2 -translate-x-1/2 w-28 h-28 lg:w-52 lg:h-52"
            logoSrc={logopackag}
          />
        </div>

        {/* Right small image */}
        <div className="relative">
          <ImageWithLogo
            src={rightImage}
            sizeClass="w-[120px] lg:w-[200px]"
            logoClass="bottom-20 left-1/2 -translate-x-1/2 w-16 h-16 lg:w-28 lg:h-28"
            logoSrc={logopackag}
          />
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
