import soilImage from "../assets/images/soil.png";
import logoImage from "../assets/images/logo.png";

const Footer = ({ toggleSidebar }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-1/2 -z-5">
      <div className="absolute inset-0">
        <img
          src={soilImage}
          alt="Soil"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-5 left-5 z-20 cursor-pointer">
        <img
          src={logoImage}
          alt="Salvia Naturals Logo"
          className="w-16 h-16 rounded-full transition-transform hover:scale-110"
          onClick={toggleSidebar}
        />
      </div>
    </div>
  );
};

export default Footer;
