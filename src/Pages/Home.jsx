import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Components/Sidebar';
import SEOHead from '../Components/SEOHead';
import skyVideo from '../assets/videos/sky.mp4';
import soilImage from '../assets/images/soil.png';
import seedsImage from '../assets/images/seeds.png';
import leavesImage from '../assets/images/dried-leaves.png';
import flowersImage from '../assets/images/dried-flowers.png';
import logoImage from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { getOrganizationSchema, getWebsiteSchema } from '../utils/schemas';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Combined schema for homepage
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getWebsiteSchema()
    ]
  };

  return (
    <>
      <SEOHead
        title="Salvia Naturals | Premium Dried Herbs & Botanicals Exporter from Egypt"
        description="Leading Egyptian exporter of premium dried herbs, flowers, leaves & seeds. Quality botanicals from the fertile Nile Valley. Request a quote today!"
        keywords="dried herbs exporter Egypt, botanical products supplier, dried flowers wholesale, dried leaves supplier, seeds exporter, herbal products Egypt, تصدير اعشاب مصر"
        canonicalUrl="/"
        schema={homeSchema}
      />
      <main className="relative w-screen h-screen overflow-hidden font-sans" role="main">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover -z-20"
          aria-hidden="true"
        >
          <source src={skyVideo} type="video/mp4" />
        </video>

        {/* Main Content Container */}
        <div className="relative w-full h-full flex flex-col justify-end pb-[15%] sm:pb-[10%] lg:pb-[12%]">
          
          {/* Products Container */}
          <section className="flex flex-row justify-center items-end w-full max-w-7xl mx-auto gap-4 sm:gap-10 lg:gap-20 xl:gap-32 px-2 sm:px-4" aria-label="Featured Products">
            
            {/* SEEDS */}
            <article className="relative flex flex-col items-center group w-1/3 max-w-[250px]">
              <img
                src={seedsImage}
                alt="Premium quality seeds for export - Salvia Naturals"
                loading="eager"
                width="250"
                height="300"
                className="w-full h-auto object-contain transition duration-300 group-hover:brightness-75 relative z-10"
              />
              <p className="absolute top-[30%] left-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-white font-handwriting text-sm sm:text-xl lg:text-2xl text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight select-none w-full z-30">
                Product of <br />SEEDS
              </p>
            </article>

            {/* DRIED LEAVES */}
            <article className="relative flex flex-col items-center group w-1/3 max-w-[250px] -translate-y-4 sm:-translate-y-8 lg:translate-y-10">
              <img
                src={leavesImage}
                alt="Dried herbal leaves for wholesale - Salvia Naturals"
                loading="eager"
                width="250"
                height="300"
                className="w-full h-auto object-contain transition duration-300 group-hover:brightness-75 relative z-10"
              />
              <p className="absolute top-[50%] left-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-white font-handwriting text-sm sm:text-xl lg:text-2xl text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight select-none w-full z-30">
                Product of <br />DRIED LEAVES
              </p>
            </article>

            {/* DRIED FLOWERS */}
            <article className="relative flex flex-col items-center group w-1/3 max-w-[250px]">
              <img
                src={flowersImage}
                alt="Dried flowers for botanical export - Salvia Naturals"
                loading="eager"
                width="250"
                height="300"
                className="w-full h-auto object-contain transition duration-300 group-hover:brightness-75 relative z-10"
              />
              <p className="absolute top-[65%] left-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-white font-handwriting text-sm sm:text-xl lg:text-2xl text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight select-none w-full z-30">
                Product of <br />DRIED FLOWERS
              </p>
            </article>
          </section>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[35%] sm:h-[45%] z-20 pointer-events-none" aria-hidden="true">
          <img
            src={soilImage}
            alt=""
            width="1440"
            height="342"
            className="absolute bottom-0 w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>

        {/* Logo and Menu Button */}
        <header className="absolute top-5 left-5 lg:top-auto lg:bottom-5 lg:left-5 z-30 flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            aria-label="Open navigation menu"
            aria-expanded={isSidebarOpen}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300/75 transition-colors flex items-center justify-center cursor-pointer touch-manipulation focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <FaBars className="text-gray-600 text-xl sm:text-2xl" aria-hidden="true" />
          </button>

          <Link to="/" aria-label="Salvia Naturals Home">
            <img
              src={logoImage}
              alt="Salvia Naturals Logo - Premium Herbs Exporter"
              width="120"
              height="60"
              className="w-24 sm:w-auto h-auto select-none"
            />
          </Link>
        </header>

        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </main>
    </>
  );
}

export default Home;
