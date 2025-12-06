import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import tree from "../../assets/images/tree.png";
import { FaArrowDown } from "react-icons/fa";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import SEOHead from "../../Components/SEOHead";
import { fetchAboutPage } from "../../api/about";
import Loader from "../../Components/Loader";
import { getBreadcrumbSchema } from "../../utils/schemas";

function About() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchAboutPage();
        setPageData(data);
        setError(false);
      } catch (error) {
        console.error("Error fetching page data:", error);
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
    navigate("/mission");
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" }
  ]);

  return (
    <>
      <SEOHead
        title="About Salvia Naturals | Trusted Dried Herbs Exporter from Egypt"
        description="Discover Salvia Naturals - Egypt's premier exporter of high-quality dried herbs and botanicals from fertile lands of Egypt and Sudan's Nile Valley."
        keywords="about Salvia Naturals, dried herbs company Egypt, botanicals exporter, Egypt Sudan herbs, Nile Valley herbs, herbal products supplier"
        canonicalUrl="/about"
        schema={breadcrumbSchema}
      />
      <main>
        <section className="relative flex flex-col h-screen overflow-hidden bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white text-center" aria-labelledby="about-heading">
          <div className="flex-1 flex flex-col items-center justify-center px-4 gap-6">
            <img
              src={tree}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute top-0 right-0 w-40 md:w-65 opacity-90"
            />
            {loading ? (
              <Loader />
            ) : (
              <>
                <h1 id="about-heading" className="text-5xl md:text-9xl font-extrabold text-green-400 mt-12">
                  {!error && pageData ? pageData.pageTitle : "About Us"}
                </h1>
                <p className="max-w-3xl text-base md:text-lg text-gray-100 leading-relaxed">
                  {!error && pageData ? pageData.intro : (
                    "At Salvia Naturals, we take pride in being a trusted supplier and exporter of high-quality dried herbs and Botanicals. With a strong base in Egypt, our operations extend across some of the most fertile and diverse agricultural regions - from the northern fields of Egypt to the rich and unique landscapes of central and southern Sudan. This wide sourcing network allows us to provide a diverse portfolio of herbs with distinctive qualities, reflecting the natural richness of the Nile Valley."
                  )}
                </p>
              </>
            )}

            <Motion.button
              className="text-green-300 text-4xl cursor-pointer bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-green-400 rounded-full p-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              onClick={handleArrowClick}
              aria-label="Continue to Our Mission section"
            >
              <FaArrowDown aria-hidden="true" />
            </Motion.button>
          </div>

          <Footer
            toggleSidebar={toggleSidebar}
            className="absolute bottom-0 left-0 w-full"
          />
          <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
        </section>
      </main>
    </>
  );
}

export default About;