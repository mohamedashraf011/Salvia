import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaSeedling, FaLeaf } from "react-icons/fa";
import { GiHerbsBundle } from "react-icons/gi";
import { PiFlowerTulipBold } from "react-icons/pi";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import ProductCard from "../../Components/ProductCard";
import anise from "../../assets/images/anise.png";
import artichoke from "../../assets/images/artichoke.png";
import basil from "../../assets/images/basil.png";
import caraway from "../../assets/images/caraway.png";
import leavesRight from "../../assets/images/tree.png";

const products = [
  {
    image: anise,
    title: "ANISE SEEDS",
    subtitle: "Pimpinella Anisum",
    category: "Seeds",
    description:
      "Anise seeds are widely used for their aromatic flavor and health benefits.",
    details: [
      { label: "Product description", value: "Egyptian anise seeds" },
      { label: "Latin name of anise seeds", value: "Pimpinella anisum" },
      { label: "Scientific name of anise seeds", value: "Pimpinella anisum" },
      { label: "Part use", value: "Seeds" },
      { label: "HS code of anise seeds", value: "0909" },
      { label: "Smell and taste of anise", value: "Aromatic, typical" },
      { label: "Origin of anise seeds", value: "Egypt" },
      { label: "Color of anise seeds", value: "Greenish to middle brown" },
      { label: "Harvest", value: "Conventional anise seeds and organic" },
    ],
  },
  {
    image: artichoke,
    title: "ARTICHOKE",
    subtitle: "Cynara Scolymus",
    category: "Dried Leaves",
    description:
      "Artichoke leaves are used for herbal tea and medicinal extracts.",
    details: [
      { label: "Product description", value: "Egyptian artichoke leaves" },
      { label: "Latin name of artichoke", value: "Cynara scolymus" },
      { label: "Scientific name of artichoke", value: "Cynara scolymus" },
      { label: "Part use", value: "Leaves" },
      { label: "HS code of artichoke", value: "0712" },
      { label: "Smell and taste", value: "Mild, herbal" },
      { label: "Origin", value: "Egypt" },
      { label: "Color", value: "Green to light brown" },
      { label: "Harvest", value: "Conventional and organic" },
    ],
  },
  {
    image: basil,
    title: "BASIL",
    subtitle: "Ocimum Basilicum",
    category: "Dried Leaves",
    description:
      "Basil leaves are aromatic and used in many cuisines and herbal preparations.",
    details: [
      { label: "Product description", value: "Egyptian basil leaves" },
      { label: "Latin name", value: "Ocimum basilicum" },
      { label: "Scientific name", value: "Ocimum basilicum" },
      { label: "Part use", value: "Leaves" },
      { label: "HS code", value: "0910" },
      { label: "Smell and taste", value: "Strong aromatic" },
      { label: "Origin", value: "Egypt" },
      { label: "Color", value: "Dark green" },
      { label: "Harvest", value: "Conventional and organic" },
    ],
  },
  {
    image: caraway,
    title: "CARAWAY SEEDS",
    subtitle: "Matricaria Chamomilla",
    category: "Seeds",
    description:
      "Caraway seeds are used for seasoning and in herbal remedies.",
    details: [
      { label: "Product description", value: "Egyptian caraway seeds" },
      { label: "Latin name", value: "Carum carvi" },
      { label: "Scientific name", value: "Carum carvi" },
      { label: "Part use", value: "Seeds" },
      { label: "HS code", value: "0909" },
      { label: "Smell and taste", value: "Warm, spicy, sweet" },
      { label: "Origin", value: "Egypt" },
      { label: "Color", value: "Brownish green" },
      { label: "Harvest", value: "Conventional and organic" },
    ],
  },

  {
    image: anise,
    title: "ANISE SEEDS",
    subtitle: "Pimpinella Anisum",
    category: "Seeds",
    description:
      "Anise seeds are widely used for their aromatic flavor and health benefits.",
    details: [
      { label: "Product description", value: "Egyptian anise seeds" },
      { label: "Latin name of anise seeds", value: "Pimpinella anisum" },
      { label: "Scientific name of anise seeds", value: "Pimpinella anisum" },
      { label: "Part use", value: "Seeds" },
      { label: "HS code of anise seeds", value: "0909" },
      { label: "Smell and taste of anise", value: "Aromatic, typical" },
      { label: "Origin of anise seeds", value: "Egypt" },
      { label: "Color of anise seeds", value: "Greenish to middle brown" },
      { label: "Harvest", value: "Conventional anise seeds and organic" },
    ],
  },
  {
    image: artichoke,
    title: "ARTICHOKE",
    subtitle: "Cynara Scolymus",
    category: "Dried Leaves",
    description:
      "Artichoke leaves are used for herbal tea and medicinal extracts.",
    details: [
      { label: "Product description", value: "Egyptian artichoke leaves" },
      { label: "Latin name of artichoke", value: "Cynara scolymus" },
      { label: "Scientific name of artichoke", value: "Cynara scolymus" },
      { label: "Part use", value: "Leaves" },
      { label: "HS code of artichoke", value: "0712" },
      { label: "Smell and taste", value: "Mild, herbal" },
      { label: "Origin", value: "Egypt" },
      { label: "Color", value: "Green to light brown" },
      { label: "Harvest", value: "Conventional and organic" },
    ],
  },
  {
    image: basil,
    title: "BASIL",
    subtitle: "Ocimum Basilicum",
    category: "Dried Leaves",
    description:
      "Basil leaves are aromatic and used in many cuisines and herbal preparations.",
    details: [
      { label: "Product description", value: "Egyptian basil leaves" },
      { label: "Latin name", value: "Ocimum basilicum" },
      { label: "Scientific name", value: "Ocimum basilicum" },
      { label: "Part use", value: "Leaves" },
      { label: "HS code", value: "0910" },
      { label: "Smell and taste", value: "Strong aromatic" },
      { label: "Origin", value: "Egypt" },
      { label: "Color", value: "Dark green" },
      { label: "Harvest", value: "Conventional and organic" },
    ],
  },
  {
    image: caraway,
    title: "CARAWAY SEEDS",
    subtitle: "Matricaria Chamomilla",
    category: "Seeds",
    description:
      "Caraway seeds are used for seasoning and in herbal remedies.",
    details: [
      { label: "Product description", value: "Egyptian caraway seeds" },
      { label: "Latin name", value: "Carum carvi" },
      { label: "Scientific name", value: "Carum carvi" },
      { label: "Part use", value: "Seeds" },
      { label: "HS code", value: "0909" },
      { label: "Smell and taste", value: "Warm, spicy, sweet" },
      { label: "Origin", value: "Egypt" },
      { label: "Color", value: "Brownish green" },
      { label: "Harvest", value: "Conventional and organic" },
    ],
  },
];

function Products() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || p.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCardClick = (product) => {
    navigate(`/product-details/${product.title}`, { state: product });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] flex flex-col overflow-hidden">
      <img
        src={leavesRight}
        alt="leaves decoration"
        className="absolute top-0 right-0 w-44 md:w-64 opacity-90 pointer-events-none select-none"
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-8 relative z-10 flex flex-col flex-1">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md mb-8">
          Our Products
        </h1>

        <div className="flex flex-wrap justify-between items-center gap-6 mb-10">
          <div className="flex items-center bg-white/10 border border-white/60 rounded-full px-5 py-2 w-100 shadow-md backdrop-blur-sm">
            <FaSearch className="text-white/70" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="ml-3 flex-1 bg-transparent outline-none text-white placeholder-white/70"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setFilterCategory("All")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filterCategory === "All"
                  ? "bg-white text-[#4E6347]"
                  : "bg-[#4E6347] text-white hover:bg-white hover:text-[#4E6347]"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setFilterCategory("Seeds")}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filterCategory === "Seeds"
                  ? "bg-white text-[#4E6347]"
                  : "bg-[#4E6347] text-white hover:bg-white hover:text-[#4E6347]"
              }`}
            >
              <FaSeedling className="text-xs" />
              Seeds
            </button>

            <button
              onClick={() => setFilterCategory("Dried Flowers")}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filterCategory === "Dried Flowers"
                  ? "bg-white text-[#4E6347]"
                  : "bg-[#4E6347] text-white hover:bg-white hover:text-[#4E6347]"
              }`}
            >
              <PiFlowerTulipBold />
              Dried Flowers
            </button>

            <button
              onClick={() => setFilterCategory("Dried Leaves")}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filterCategory === "Dried Leaves"
                  ? "bg-white text-[#4E6347]"
                  : "bg-[#4E6347] text-white hover:bg-white hover:text-[#4E6347]"
              }`}
            >
              <GiHerbsBundle />
              Dried Leaves
            </button>
          </div>
        </div>

        <div className="flex-1">
          <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p, index) => (
                  <div
                    key={index}
                    className="cursor-pointer"
                    onClick={() => handleCardClick(p)}
                  >
                    <ProductCard
                      image={p.image}
                      title={p.title}
                      subtitle={p.subtitle}
                    />
                  </div>
                ))
              ) : (
                <p className="text-white text-center col-span-full opacity-70">
                  No products found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
}

export default Products;
