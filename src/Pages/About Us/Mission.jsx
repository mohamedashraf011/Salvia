import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import tree from "../../assets/images/tree.png";
import tractor from "../../assets/images/tractor.png";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";

function Mission() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <section className="relative flex flex-col min-h-screen bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white overflow-hidden">
      <img
        src={tree}
        alt="leaves"
        className="absolute top-0 right-0 w-40 md:w-64 opacity-90"
      />

      <div className="flex flex-1 flex-row items-center justify-start gap-16 px-10 md:px-20 py-10">
        <div className="flex flex-row items-center gap-6">
          <div className="flex flex-col items-center text-[#CDE3C1] text-3xl cursor-pointer space-y-3">
            <FaArrowUp className="hover:text-white transition-colors duration-200" />
            <FaArrowDown className="hover:text-white transition-colors duration-200" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">
            Our Mission
          </h1>
        </div>

        <div className="max-w-xl text-left text-2xl leading-relaxed">
          <p>
            Our mission is to deliver products that combine
            <br /> authenticity, purity, and consistency. Every step of
            <br /> our process – from carefully selecting raw materials
            <br /> at the farm level, to applying rigorous processing and
            <br /> quality control measures – is designed to meet
            <br /> international food safety and quality standards.
          </p>
        </div>
      </div>

      <div className="absolute -bottom-0.5 left-0 w-[45%] md:w-[50%]">
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
