import React, { useState, useEffect } from "react";
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { data, Link } from "react-router-dom";
import logoImage from "../assets/images/logo.png";
import { DOMAIN } from "../utils/Domain";

function Sidebar({ isOpen, onClose }) {
  const [showPage9, setShowPage9] = useState(false);
  const [showPage9Data, setShowPage9Data] = useState({});
  const [showPage10, setShowPage10] = useState(false);
  const [showPage10Data, setShowPage10Data] = useState({});

  useEffect(() => {
    const fetchPageStatus = async () => {
      try {
        const [res9, res10] = await Promise.all([
          fetch(`${DOMAIN}/api/site-showcase/showcase`),
          fetch(`${DOMAIN}/api/site-showcase-two/showcase-two`)
        ]);

        const data9 = await res9.json();
        const data10 = await res10.json();
        setShowPage9Data(data9);
        setShowPage10Data(data10);

        if (data9 && data9.active) setShowPage9(true);
        if (data10 && data10.active) setShowPage10(true);
      } catch (error) {
        console.error("Error checking page status:", error);
      }
    };
    fetchPageStatus();
  }, []);
  
  return (
    <div
      className={`fixed inset-0 z-[10000] bg-black/30 backdrop-blur-[2px] transition-opacity duration-500 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute top-0 left-0 h-full w-full sm:w-[320px] bg-[#293B23F2]/95 backdrop-blur-md text-white z-[10001] sm:rounded-tr-[150px] shadow-xl transform transition-transform duration-500 overflow-y-auto [&::-webkit-scrollbar]:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full px-6 py-6 sm:px-8 sm:py-8 text-left">
          <ul className="flex flex-col gap-4 sm:gap-5 mt-4 sm:mt-10 text-lg sm:text-xl font-light flex-grow">
            <li>
              <Link
                to="/about"
                className="hover:text-gray-300 cursor-pointer block font-bold p-2"
                onClick={onClose}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="hover:text-gray-300 cursor-pointer block font-bold p-2"
                onClick={onClose}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/our-quality"
                className="hover:text-gray-300 cursor-pointer block font-bold p-2"
                onClick={onClose}
              >
                Our Quality Commitment
              </Link>
            </li>
            <li>
              <Link
                to="/r-and-d"
                className="hover:text-gray-300 cursor-pointer block font-bold p-2"
                onClick={onClose}
              >
                R&D
              </Link>
            </li>
            <li>
              <Link
                to="/gallary"
                className="hover:text-gray-300 cursor-pointer block font-bold p-2"
                onClick={onClose}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="hover:text-gray-300 cursor-pointer block font-bold p-2"
                onClick={onClose}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-300 cursor-pointer block font-bold p-2"
                onClick={onClose}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/certificates"
                className="hover:text-gray-300 cursor-pointer block font-bold p-2"
                onClick={onClose}
              >
                Certificates
              </Link>
            </li>
            {showPage9 && (
              <li>
                <Link
                  to="/page9"
                  className="hover:text-gray-300 cursor-pointer block font-bold p-2"
                  onClick={onClose}
                >
                  {showPage9Data.pageTitle}
                </Link>
              </li>
            )}
            {showPage10 && (
              <li className="mb-6 sm:mb-10">
                <Link
                  to="/page10"
                  className="hover:text-gray-300 cursor-pointer block font-bold p-2"
                  onClick={onClose}
                  >
                  {showPage10Data.pageTitle}
                </Link>
              </li>
            )}
          </ul>

          <div className="flex flex-col mt-auto pt-8">
            <div className="flex gap-6 text-xl justify-center mb-6">
              <FaYoutube className="hover:text-gray-300 cursor-pointer transition-colors" />
              <FaFacebookF className="hover:text-gray-300 cursor-pointer transition-colors" />
              <FaTwitter className="hover:text-gray-300 cursor-pointer transition-colors" />
              <FaInstagram className="hover:text-gray-300 cursor-pointer transition-colors" />
              <FaLinkedinIn className="hover:text-gray-300 cursor-pointer transition-colors" />
            </div>

            <div className="flex justify-center">
              <Link to="/" onClick={onClose}>
                <img
                  src={logoImage}
                  alt="Salvia Naturals Logo"
                  className="w-28 sm:w-36 h-auto object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
