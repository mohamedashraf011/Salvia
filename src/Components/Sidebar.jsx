import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/logo.png";

function Sidebar({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] bg-black/30 backdrop-blur-[1px]"
      onClick={onClose}
    >
      <div
        className="absolute top-0 left-0 h-full w-[260px] 
        bg-[#293B23F2]/95 backdrop-blur-md text-white z-[10001] 
        rounded-tr-[150px] shadow-xl transform transition-transform duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col justify-between h-full px-8 py-2 text-left">
          <ul className="flex flex-col gap-6 mt-10 text-xl font-light">
            <li>
              <Link 
                to="/about" 
                className="hover:text-gray-300 cursor-pointer block font-bold" 
                onClick={onClose}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/product" 
                className="hover:text-gray-300 cursor-pointer block font-bold" 
                onClick={onClose}
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/our-quality" 
                className="hover:text-gray-300 cursor-pointer block font-bold" 
                onClick={onClose}
              >
                Our Quality Commitment
              </Link>
            </li>
            <li>
              <Link 
                to="/r-and-d" 
                className="hover:text-gray-300 cursor-pointer block font-bold" 
                onClick={onClose}
              >
                R&D
              </Link>
            </li>
            <li>
              <Link 
                to="/gallary" 
                className="hover:text-gray-300 cursor-pointer block font-bold" 
                onClick={onClose}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                to="/events" 
                className="hover:text-gray-300 cursor-pointer block font-bold" 
                onClick={onClose}
              >
                Events
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="hover:text-gray-300 cursor-pointer block font-bold" 
                onClick={onClose}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link 
                to="/page9" 
                className="hover:text-gray-300 cursor-pointer block font-bold" 
                onClick={onClose}
              >
                Page 9
              </Link>
            </li>
            <li className="mb-10">
              <Link 
                to="/page10" 
                className="hover:text-gray-300 cursor-pointer block font-bold" 
                onClick={onClose}
              >
                Page 10
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-5">
            <div className="flex gap-5 text-lg justify-center">
              <FaYoutube className="hover:text-gray-300 cursor-pointer" />
              <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
              <FaTwitter className="hover:text-gray-300 cursor-pointer" />
              <FaInstagram className="hover:text-gray-300 cursor-pointer" />
              <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
            </div>

            <div className="flex justify-center">
              <img
                src={logoImage}
                alt="Salvia Naturals Logo"
                className="w-auto h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;