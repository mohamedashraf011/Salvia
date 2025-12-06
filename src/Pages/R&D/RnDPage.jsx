import React, { useState, useEffect } from 'react';
import { fetchRnDPage } from '../../api/rnd';
import { motion as Motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import SEOHead from "../../Components/SEOHead";
import Loader from "../../Components/Loader";
import backgroundImage from "../../assets/images/RD.png";
import { getBreadcrumbSchema } from "../../utils/schemas";

const RnDPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchRnDPage();
        setPageData(data);
        setError(false);
      } catch (error) {
        console.error("Failed to load R&D page data", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const handleArrowClick = () => {
    navigate('/innovation');
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Research & Development", path: "/r-and-d" }
  ]);

  return (
    <>
      <SEOHead
        title="Research & Development | Innovation in Herbal Products - Salvia Naturals"
        description="Our R&D ensures safe, high-quality herbal products through continuous innovation, quality improvement, and cutting-edge botanical research."
        keywords="herbal research development, botanical innovation, herbs quality control, dried herbs R&D, herbal product development Egypt"
        canonicalUrl="/r-and-d"
        schema={breadcrumbSchema}
      />
      <main className="relative min-h-screen bg-gray-50">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          role="img"
          aria-label="Research and Development laboratory background"
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

        <div className="relative z-10 flex flex-col min-h-screen">
          <section className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 text-center text-white relative" aria-labelledby="rnd-heading">
            {loading ? (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <Loader />
              </div>
            ) : (
              <div className="max-w-5xl mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <h1 id="rnd-heading" className="text-4xl md:text-6xl font-extrabold mb-6 md:mb-8 drop-shadow-lg">
                  {!error && pageData ? (
                    <span className="text-green-300">{pageData.pageTitle}</span>
                  ) : (
                    <>
                      <span className="text-green-300">Research</span> & <span className="text-green-300">Development</span>
                    </>
                  )}
                </h1>
                <p className="text-base md:text-lg leading-relaxed drop-shadow-md">
                  {!error && pageData ? pageData.intro : (
                    <>
                      At Salvia Natural, innovation and continuous improvement are at the heart of our business.
                      <br className="hidden md:block" />
                      Our Research & 
                      Development (R&D) activities are designed to ensure that we consistently deliver safe,
                      high-quality, and innovative herbal products to our global customers.
                    </>
                  )}
                </p>
              </div>
            )}

            <Motion.button
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 text-green-300 text-4xl cursor-pointer bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-green-400 rounded-full p-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              onClick={handleArrowClick}
              aria-label="Continue to Innovation section"
            >
              <FaArrowDown aria-hidden="true" />
            </Motion.button>
          </section>

          <Footer
            toggleSidebar={toggleSidebar}
            className="absolute bottom-0 left-0 w-full"
          />
        </div>
      </main>
    </>
  );
};

export default RnDPage;