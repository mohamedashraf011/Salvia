import React, { useState, useEffect } from "react";
import tree from "../../assets/images/tree.png";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import { FaBoxOpen, FaSyncAlt } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { TbMicroscope } from "react-icons/tb";
import { BsMoisture } from "react-icons/bs";
import microbiologyIcon from "../../assets/images/microbiology.png";
import healthicons from "../../assets/images/healthicons.png";
import axios from "axios";
import { DOMAIN } from "../../utils/Domain";


const OurQuality = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageData, setPageData] = useState({
    pageTitle: "Our Quality Commitment",
    intro: "At Salvia Naturals, quality is not just a standard – it is the foundation of everything we do. From sourcing our herbs across Egypt and Sudan to delivering them worldwide, we are committed to ensuring that every product meets the highest levels of safety, purity, and reliability.",
    finalTitle: "At Salvia Naturals, we are not only delivering herbs - we are delivering trust, safety, and excellence with every shipment."
  });
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleSidebar = () => {
    console.log("Toggle clicked! State will be:", !isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  // Fetch page data and sections from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch page title and intro
        const pageResponse = await axios.get(`${DOMAIN}/api/our-quality-commitment/page`);
        if (pageResponse.data) {
          setPageData(prev => ({
            ...prev,
            pageTitle: pageResponse.data.pageTitle || prev.pageTitle,
            intro: pageResponse.data.intro || prev.intro,
            finalTitle: pageResponse.data.finalTitle || prev.finalTitle
          }));
        }

        // Fetch sections
        const sectionsResponse = await axios.get('http://localhost:4005/api/our-quality-commitment/sections');
        if (sectionsResponse.data.sections && sectionsResponse.data.sections.length > 0) {
          setSections(sectionsResponse.data.sections);
        } else {
          // Fallback to default sections if API returns empty
          setSections([
            { name: 'Food Safety & Compliance', details: 'We follow strict food safety management practices to guarantee that our herbs comply with international regulations and customer requirements. Our processes are designed to control risks and safeguard consumer health at every stage of production.' },
            { name: 'Pesticides & Heavy Metals', details: 'We ensure that all products are tested to meet international limits for pesticide residues and heavy metals. Careful selection of farming partners, combined with regular laboratory analysis, ensures compliance with EU, FDA, and other global standards.' },
            { name: 'Microbiology, Yeasts & Moulds', details: 'Microbiological quality is a key priority. Each batch is analyzed to verify compliance with limits for pathogens, yeasts, and moulds, ensuring the safety and shelf-life of our products.' },
            { name: 'Moisture Content', details: 'Moisture control is critical to preserving the flavor, aroma, and safety of dried herbs. We apply advanced drying and storage methods to guarantee optimum moisture levels that maintain quality and prevent spoilage.' },
            { name: 'Pyrrolizidine Alkaloids (PAs) & PAHs', details: 'We conduct targeted testing for pyrrolizidine alkaloids and polycyclic aromatic hydrocarbons (PAHs), ensuring that all products fall within internationally accepted safety limits.' },
            { name: 'Packaging & Integrity', details: 'We use food-grade, safe, and eco-friendly packaging materials designed to preserve product quality during storage and transport. All packaging is carefully inspected to prevent contamination and protect the integrity of our herbs.' },
            { name: 'Continuous Improvement', details: 'We care for the land and our community by using eco-friendly farming techniques and supporting local farmers.' }
          ]);
        }

        setLoading(false);
      } catch (err) {
        console.error('Error fetching quality commitment data:', err);
        setError('Failed to load quality commitment data');
        // Set fallback data
        setSections([
          { name: 'Food Safety & Compliance', details: 'We follow strict food safety management practices to guarantee that our herbs comply with international regulations and customer requirements. Our processes are designed to control risks and safeguard consumer health at every stage of production.' },
          { name: 'Pesticides & Heavy Metals', details: 'We ensure that all products are tested to meet international limits for pesticide residues and heavy metals. Careful selection of farming partners, combined with regular laboratory analysis, ensures compliance with EU, FDA, and other global standards.' },
          { name: 'Microbiology, Yeasts & Moulds', details: 'Microbiological quality is a key priority. Each batch is analyzed to verify compliance with limits for pathogens, yeasts, and moulds, ensuring the safety and shelf-life of our products.' },
          { name: 'Moisture Content', details: 'Moisture control is critical to preserving the flavor, aroma, and safety of dried herbs. We apply advanced drying and storage methods to guarantee optimum moisture levels that maintain quality and prevent spoilage.' },
          { name: 'Pyrrolizidine Alkaloids (PAs) & PAHs', details: 'We conduct targeted testing for pyrrolizidine alkaloids and polycyclic aromatic hydrocarbons (PAHs), ensuring that all products fall within internationally accepted safety limits.' },
          { name: 'Packaging & Integrity', details: 'We use food-grade, safe, and eco-friendly packaging materials designed to preserve product quality during storage and transport. All packaging is carefully inspected to prevent contamination and protect the integrity of our herbs.' },
          { name: 'Continuous Improvement', details: 'We care for the land and our community by using eco-friendly farming techniques and supporting local farmers.' }
        ]);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to get icon based on section name
  const getIconForSection = (sectionName) => {
    const name = sectionName.toLowerCase();
    if (name.includes('safety') || name.includes('compliance')) {
      return <FiShield className="text-2xl" />;
    } else if (name.includes('pesticide') || name.includes('heavy') || name.includes('microscope')) {
      return <TbMicroscope className="text-2xl" />;
    } else if (name.includes('microbiology') || name.includes('yeast') || name.includes('mould')) {
      return <img src={microbiologyIcon} alt="Microbiology Icon" className="w-8 h-8 object-contain" />;
    } else if (name.includes('moisture') || name.includes('water')) {
      return <BsMoisture className="text-2xl" />;
    } else if (name.includes('pyrrolizidine') || name.includes('pahs') || name.includes('health')) {
      return <img src={healthicons} alt="Health Icon" className="w-8 h-8 object-contain" />;
    } else if (name.includes('packaging') || name.includes('box')) {
      return <FaBoxOpen className="text-2xl" />;
    } else if (name.includes('continuous') || name.includes('improvement') || name.includes('sync')) {
      return <FaSyncAlt className="text-2xl" />;
    } else {
      return <FiShield className="text-2xl" />; // Default icon
    }
  };

  if (loading) {
    return (
      <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-r from-[#4E6347] to-[#9F9F9D]">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-2xl">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-r from-[#4E6347] to-[#9F9F9D]">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-xl text-red-300">{error}</div>
        </div>
      </div>
    );
  }

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
          {pageData.pageTitle}
        </h2>

        {/* Intro Paragraph */}
        <p className="text-lg leading-loose text-gray-100 max-w-4xl pb-6">
          {pageData.intro}
        </p>

        {/* Quality Points */}
        <div className="grid md:grid-cols-2 gap-x-18 gap-y-12 -mt-12">
          {sections.map((section, index) => (
            <div key={index} className={`space-y-4 ${index === sections.length - 1 ? 'md:col-span-2' : ''}`}>
              <div className="flex items-center gap-3">
                {getIconForSection(section.name)}
                <h3 className="text-xl font-semibold">
                  {section.name}
                </h3>
              </div>
              <p className="text-[#D3D4C6] leading-relaxed">
                {section.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <div>
        <p className="text-center text-xl font-semibold text-gray-100 leading-relaxed mb-[50px]">
          {pageData.finalTitle}
        </p>
      </div>

      <Footer toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
};

export default OurQuality;
