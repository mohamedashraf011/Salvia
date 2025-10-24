import soilImage from "../assets/images/soil.png";
import logoImage from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa";

const Footer = ({ toggleSidebar, className = "" }) => {
  return (
    <footer
      className={`relative w-full overflow-hidden min-h-[200px] ${className}`}
    >
      <img
        src={soilImage}
        alt="Soil Background"
        className="w-full h-[250px] object-cover object-top"
      />

      <div className="absolute bottom-0.5 left-6 flex items-center gap-3 z-10">
        <button
          onClick={toggleSidebar}
          className="w-10 h-10 rounded-full bg-gray-300/75 flex items-center justify-center cursor-pointer transition-colors"
        >
          <FaBars className="text-gray-600 text-2xl" />
        </button>

        <img
          src={logoImage}
          alt="Salvia Naturals Logo"
          className="w-auto h-16 cursor-pointer hover:scale-105 transition-transform"
          onClick={toggleSidebar}
        />
      </div>
    </footer>
  );
};

export default Footer;
