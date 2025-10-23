import React, { useState } from "react";
import tree from "../assets/images/tree.png";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { FaLeaf, FaFlask, FaBoxOpen, FaSyncAlt } from "react-icons/fa";
import { GiChemicalDrop } from "react-icons/gi";
import { BiDroplet } from "react-icons/bi";
import { MdOutlineBiotech } from "react-icons/md";

const OurQuality = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggle clicked! State will be:", !isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-r from-[#4E6347] to-[#9F9F9D]">
      {/* Tree Image */}
      <img
        src={tree}
        alt="Tree"
        className="absolute top-0 right-0 w-40 md:w-65 opacity-90 select-none pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:pl-32 py-20 md:pt-28 space-y-14">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
          Our Quality Commitment
        </h2>

        {/* Intro Paragraph */}
        <p className="text-lg leading-loose text-gray-100 max-w-4xl">
          At Salvia Naturals, quality is not just a standard – it is the
          foundation of everything we do. From sourcing our herbs across Egypt
          and Sudan to delivering them worldwide, we are committed to ensuring
          that every product meets the highest levels of safety, purity, and
          reliability.
        </p>

        {/* Quality Points */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 -mt-14">
          {/* Food Safety */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaLeaf className="text-green-300 text-2xl" />
              <h3 className="text-xl font-semibold">Food Safety & Compliance</h3>
            </div>
            <p className="text-gray-100 leading-relaxed">
              We follow strict food safety management practices to guarantee
              that our herbs comply with international regulations and customer
              requirements. Our processes are designed to control risks and
              safeguard consumer health at every stage of production.
            </p>
          </div>

          {/* Pesticides & Heavy Metals */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <GiChemicalDrop className="text-green-300 text-2xl" />
              <h3 className="text-xl font-semibold">
                Pesticides & Heavy Metals
              </h3>
            </div>
            <p className="text-gray-100 leading-relaxed">
              We ensure that all products are tested to meet international
              limits for pesticide residues and heavy metals. Careful selection
              of farming partners, combined with regular laboratory analysis,
              ensures compliance with EU, FDA, and other global standards.
            </p>
          </div>

          {/* Microbiology */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MdOutlineBiotech className="text-green-300 text-2xl" />
              <h3 className="text-xl font-semibold">
                Microbiology, Yeasts & Moulds
              </h3>
            </div>
            <p className="text-gray-100 leading-relaxed">
              Microbiological quality is a key priority. Each batch is analyzed
              to verify compliance with limits for pathogens, yeasts, and
              moulds, ensuring the safety and shelf-life of our products.
            </p>
          </div>

          {/* Moisture Content */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BiDroplet className="text-green-300 text-2xl" />
              <h3 className="text-xl font-semibold">Moisture Content</h3>
            </div>
            <p className="text-gray-100 leading-relaxed">
              Moisture control is critical to preserving the flavor, aroma, and
              safety of dried herbs. We apply advanced drying and storage
              methods to guarantee optimum moisture levels that maintain quality
              and prevent spoilage.
            </p>
          </div>

          {/* PAs & PAHs */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaFlask className="text-green-300 text-2xl" />
              <h3 className="text-xl font-semibold">
                Pyrrolizidine Alkaloids (PAs) & PAHs
              </h3>
            </div>
            <p className="text-gray-100 leading-relaxed">
              We conduct targeted testing for pyrrolizidine alkaloids and
              polycyclic aromatic hydrocarbons (PAHs), ensuring that all
              products fall within internationally accepted safety limits.
            </p>
          </div>

          {/* Packaging */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaBoxOpen className="text-green-300 text-2xl" />
              <h3 className="text-xl font-semibold">Packaging & Integrity</h3>
            </div>
            <p className="text-gray-100 leading-relaxed">
              We use food-grade, safe, and eco-friendly packaging materials
              designed to preserve product quality during storage and transport.
              All packaging is carefully inspected to prevent contamination and
              protect the integrity of our herbs.
            </p>
          </div>

          {/* Continuous Improvement */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <FaSyncAlt className="text-green-300 text-2xl" />
              <h3 className="text-xl font-semibold">Continuous Improvement</h3>
            </div>
            <p className="text-gray-100 leading-relaxed">
              We care for the land and our community by using eco-friendly
              farming techniques and supporting local farmers.
            </p>
          </div>
        </div>

      </div>

      {/* Footer Text */}
        <div>
          <p className="text-center text-xl font-semibold text-gray-100 leading-relaxed">
            At Salvia Naturals, we are not only delivering herbs — we are
            delivering trust, safety, and excellence with every shipment.
          </p>
        </div>

      {/* Footer */}
      <Footer toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
};

export default OurQuality;