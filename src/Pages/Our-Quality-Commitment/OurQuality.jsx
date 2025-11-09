import React, { useState } from "react";
import tree from "../../assets/images/tree.png";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import { FaBoxOpen, FaSyncAlt } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { TbMicroscope } from "react-icons/tb";
import { BsMoisture } from "react-icons/bs";
import microbiologyIcon from "../../assets/images/microbiology.png";
import healthicons from "../../assets/images/healthicons.png";


const OurQuality = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggle clicked! State will be:", !isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-r from-[#4E6347] to-[#9F9F9D]">
      <img
        src={tree}
        alt="Tree"
        className="absolute top-0 right-0 w-40 md:w-65 opacity-90 select-none pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-10 md:pt-12 space-y-12">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
          Our Quality Commitment
        </h2>

        {/* Intro Paragraph */}
        <p className="text-lg leading-loose text-gray-100 max-w-4xl pb-6">
          At Salvia Naturals, quality is not just a standard – it is the
          foundation of everything we do. From sourcing our herbs across Egypt
          and Sudan to delivering them worldwide, we are committed to ensuring
          that every product meets the highest levels of safety, purity, and
          reliability.
        </p>

        {/* Quality Points */}
        <div className="grid md:grid-cols-2 gap-x-18 gap-y-12 -mt-12">
          {/* Food Safety */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FiShield className="text-2xl" />
              <h3 className="text-xl font-semibold">
                Food Safety & Compliance
              </h3>
            </div>
            <p className="text-[#D3D4C6] leading-relaxed">
              We follow strict food safety management practices to guarantee
              that our herbs comply with international regulations and customer
              requirements. Our processes are designed to control risks and
              safeguard consumer health at every stage of production.
            </p>
          </div>

          {/* Pesticides & Heavy Metals */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <TbMicroscope className="text-2xl" />
              <h3 className="text-xl font-semibold">
                Pesticides & Heavy Metals
              </h3>
            </div>
            <p className="text-[#D3D4C6] leading-relaxed">
              We ensure that all products are tested to meet international
              limits for pesticide residues and heavy metals. Careful selection
              of farming partners, combined with regular laboratory analysis,
              ensures compliance with EU, FDA, and other global standards.
            </p>
          </div>

          {/* Microbiology */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={microbiologyIcon}
                alt="Microbiology Icon"
                className="w-8 h-8 object-contain"
              />
              <h3 className="text-xl font-semibold">
                Microbiology, Yeasts & Moulds
              </h3>
            </div>
            <p className="text-[#D3D4C6] leading-relaxed">
              Microbiological quality is a key priority. Each batch is analyzed
              to verify compliance with limits for pathogens, yeasts, and
              moulds, ensuring the safety and shelf-life of our products.
            </p>
          </div>

          {/* Moisture Content */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BsMoisture className="text-2xl" />
              <h3 className="text-xl font-semibold">Moisture Content</h3>
            </div>
            <p className="text-[#D3D4C6] leading-relaxed">
              Moisture control is critical to preserving the flavor, aroma, and
              safety of dried herbs. We apply advanced drying and storage
              methods to guarantee optimum moisture levels that maintain quality
              and prevent spoilage.
            </p>
          </div>

          {/* PAs & PAHs */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={healthicons}
                alt="healthicons Icon"
                className="w-8 h-8 object-contain"
              />
              <h3 className="text-xl font-semibold">
                Pyrrolizidine Alkaloids (PAs) & PAHs
              </h3>
            </div>
            <p className="text-[#D3D4C6] leading-relaxed">
              We conduct targeted testing for pyrrolizidine alkaloids and
              polycyclic aromatic hydrocarbons (PAHs), ensuring that all
              products fall within internationally accepted safety limits.
            </p>
          </div>

          {/* Packaging */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaBoxOpen className="text-2xl" />
              <h3 className="text-xl font-semibold">Packaging & Integrity</h3>
            </div>
            <p className="text-[#D3D4C6] leading-relaxed">
              We use food-grade, safe, and eco-friendly packaging materials
              designed to preserve product quality during storage and transport.
              All packaging is carefully inspected to prevent contamination and
              protect the integrity of our herbs.
            </p>
          </div>

          {/* Continuous Improvement */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <FaSyncAlt className="text-2xl" />
              <h3 className="text-xl font-semibold">Continuous Improvement</h3>
            </div>
            <p className="text-[#D3D4C6] leading-relaxed">
              We care for the land and our community by using eco-friendly
              farming techniques and supporting local farmers.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div>
        <p className="text-center text-xl font-semibold text-gray-100 leading-relaxed mb-[50px]">
          At Salvia Naturals, we are not only delivering herbs - we are
          delivering trust, safety, and excellence with every shipment.
        </p>
      </div>

      <Footer toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
};

export default OurQuality;
