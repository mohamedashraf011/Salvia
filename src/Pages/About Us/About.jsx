import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import tree from "../../assets/images/tree.png";
import { FaArrowDown } from "react-icons/fa";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";

function About() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    console.log("Toggle clicked! State will be:", !isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const handleArrowClick = () => {
    navigate("/mission");
  };

  return (
    <section className="relative flex flex-col h-screen overflow-hidden bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white text-center">
      <div className="flex-1 flex flex-col items-center justify-center px-4 gap-6">
        <img
          src={tree}
          alt="leaves"
          className="absolute top-0 right-0 w-40 md:w-65 opacity-90"
        />
        <h1 className="text-5xl md:text-9xl font-extrabold text-green-400 mt-12">
          About Us
        </h1>
        <p className="max-w-3xl text-base md:text-lg text-gray-100 leading-relaxed">
          At Salvia Naturals, we take pride in being a trusted supplier and
          exporter of high-quality
          <br /> dried herbs and Botanicals. With a strong base in Egypt, our
          operations extend across
          <br /> some of the most fertile and diverse agricultural regions -
          from the northern fields of
          <br /> Egypt to the rich and unique landscapes of central and southern
          Sudan. This wide
          <br /> sourcing network allows us to provide a diverse portfolio of
          herbs with distinctive
          <br /> qualities, reflecting the natural richness of the Nile Valley.
        </p>

        <Motion.div
          className="text-green-300 text-4xl cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={handleArrowClick}
        >
          <FaArrowDown />
        </Motion.div>
      </div>

      <Footer
        toggleSidebar={toggleSidebar}
        className="absolute bottom-0 left-0 w-full"
      />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </section>
  );
}

export default About;