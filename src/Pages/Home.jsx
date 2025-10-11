import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Components/Sidebar';
import skyVideo from '../assets/videos/sky.mp4';
import soilImage from '../assets/images/soil.png';
import seedsImage from '../assets/images/seeds.png';
import leavesImage from '../assets/images/dried-leaves.png';
import flowersImage from '../assets/images/dried-flowers.png';
import logoImage from '../assets/images/logo.png';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative w-screen h-screen overflow-hidden font-sans">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src={skyVideo} type="video/mp4" />
      </video>

      <div className="absolute bottom-[24%] left-1/2 transform -translate-x-1/2 flex justify-between items-end w-[85%] z-10 gap-x-52">
        {/* SEEDS */}
        <div className="relative flex flex-col items-center group">
          <img
            src={seedsImage}
            alt="Product of Seeds"
            className="object-contain transition duration-300 group-hover:brightness-75"
          />
          <p className="absolute top-[60%] left-[20%] flex flex-col justify-center items-center text-white font-handwriting text-2xl text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight select-none">
            Product of <br />SEEDS
          </p>
        </div>

        {/* DRIED LEAVES */}
        <div className="relative flex flex-col items-center group translate-y-10">
          <img
            src={leavesImage}
            alt="Product of Dried Leaves"
            className="object-contain transition duration-300 group-hover:brightness-75"
          />
          <p className="absolute top-[50%] left-[-8%] flex flex-col justify-center items-center text-white font-handwriting text-2xl text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight select-none">
            Product of <br />DRIED LEAVES
          </p>
        </div>

        {/* DRIED FLOWERS */}
        <div className="relative flex flex-col items-center group">
          <img
            src={flowersImage}
            alt="Product of Dried Flowers"
            className="object-contain transition duration-300 group-hover:brightness-75"
          />
          <p className="absolute top-[65%] left-[-1%] flex flex-col justify-center items-center text-white font-handwriting text-2xl text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight select-none">
            Product of <br />DRIED FLOWERS
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[45%] z-20 pointer-events-none">
        <img
          src={soilImage}
          alt="Soil"
          className="absolute bottom-0 w-full h-full object-cover"
        />
      </div>

      {/* Logo and Menu Button */}
      <div className="absolute bottom-5 left-5 z-30 flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer touch-manipulation"
        >
          <FaBars className="text-gray-500 text-2xl" />
        </button>


        <img
          src={logoImage}
          alt="Salvia Naturals Logo"
          className="w-auto h-auto select-none"
        />
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}

export default Home;
