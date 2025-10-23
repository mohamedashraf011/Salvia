import React, { useState } from "react";
import { FaSearch, FaSeedling, FaLeaf } from "react-icons/fa";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import ProductCard from "../../Components/ProductCard";

import anise from "../../assets/images/anise.png";
import artichoke from "../../assets/images/artichoke.png";
import basil from "../../assets/images/basil.png";
import caraway from "../../assets/images/caraway.png";
import leavesRight from "../../assets/images/tree.png";

const products = [
  { image: anise, title: "ANISE SEEDS", subtitle: "Pimpinella Anisum" },
  { image: artichoke, title: "ARTICHOKE", subtitle: "Cynara Scolymus" },
  { image: basil, title: "BASIL", subtitle: "Ocimum Basilicum" },
  { image: caraway, title: "CARAWAY SEEDS", subtitle: "Matricaria Chamomilla" },
  { image: anise, title: "ANISE SEEDS", subtitle: "Pimpinella Anisum" },
  { image: artichoke, title: "ARTICHOKE", subtitle: "Cynara Scolymus" },
  { image: basil, title: "BASIL", subtitle: "Ocimum Basilicum" },
  { image: caraway, title: "CARAWAY SEEDS", subtitle: "Matricaria Chamomilla" },
];

function Products() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggle clicked! State will be:", !isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-l from-[#9F9F9D] to-[#4E6347] flex flex-col overflow-x-hidden">
      {/* صورة الأوراق */}
      <img
        src={leavesRight}
        alt="leaves decoration"
        className="absolute top-0 right-0 w-44 md:w-64 opacity-90 pointer-events-none select-none"
      />

      {/* المحتوى */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-20 pb-32 relative z-10 flex-1">
        {/* العنوان */}
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md mb-20">
          Our Products
        </h1>

        {/* البحث والفلاتر في صف واحد */}
        <div className="flex flex-wrap justify-between items-center gap-6 mb-24">
          {/* البحث */}
          <div className="flex items-center bg-white/10 border border-white/60 rounded-full px-5 py-2 w-80 shadow-md backdrop-blur-sm">
            <FaSearch className="text-white/70" />
            <input
              type="text"
              placeholder="Search"
              className="ml-3 w-full bg-transparent outline-none text-white placeholder-white/70"
            />
          </div>

          {/* الفلاتر */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#4E6347] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-900 transition-all">
              All
            </button>
            <button className="flex items-center gap-2 bg-[#4E6347] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-900 transition-all">
              <FaSeedling className="text-xs" />
              Seeds
            </button>
            <button className="flex items-center gap-2 bg-[#4E6347] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-900 transition-all">
              <FaLeaf className="text-xs" />
              Dried Flowers
            </button>
            <button className="flex items-center gap-2 bg-[#4E6347] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-900 transition-all">
              <FaLeaf className="text-xs" />
              Dried Leaves
            </button>
          </div>
        </div>

        {/* شبكة الكروت */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-14">
          {products.map((p, index) => (
            <ProductCard
              key={index}
              image={p.image}
              title={p.title}
              subtitle={p.subtitle}
            />
          ))}
        </div>
      </div>

      {/* الفوتر */}
      <Footer toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
}

export default Products;