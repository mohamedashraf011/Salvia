import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logoImage from "../assets/images/logo.png";

function Sidebar({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px]"
      onClick={onClose}
    >
      <div
        className="absolute top-0 left-0 h-full w-[260px] 
        bg-[#293B23F2]/95 backdrop-blur-md text-white z-50 
        rounded-tr-[150px] shadow-xl transform transition-transform duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col justify-between h-full px-8 py-10">
          <ul className="flex flex-col gap-4 mt-10 text-xl font-light">
            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="hover:text-gray-300 cursor-pointer">Products</li>
            <li className="hover:text-gray-300 cursor-pointer">
              Our Quality Commitment
            </li>
            <li className="hover:text-gray-300 cursor-pointer">R&D</li>
            <li className="hover:text-gray-300 cursor-pointer">Gallery</li>
            <li className="hover:text-gray-300 cursor-pointer">Events</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
            <li className="hover:text-gray-300 cursor-pointer">Site Map</li>
            <li className="hover:text-gray-300 cursor-pointer">Page 9</li>
            <li className="hover:text-gray-300 cursor-pointer mb-10">Page 10</li>
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
