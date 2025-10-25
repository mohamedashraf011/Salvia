import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import leavesRight from "../../assets/images/tree.png";
import Event from "../../assets/images/EventInformation.png";

const EventInformation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white">
      <img
        src={leavesRight}
        alt="leaves decoration"
        className="absolute top-0 right-0 w-44 md:w-64 opacity-90 pointer-events-none select-none z-30"
      />

      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      <div className="flex flex-row items-start justify-between pt-16 pb-32 relative z-10 px-10 w-full min-h-[calc(100vh-8rem)]">
        <div className="flex-1 max-w-md md:max-w-3xl">
          <p className="text-sm md:text-xl text-gray-100 leading-relaxed">
            Salvia proudly participated in the Cairo International Plants & Herbs Expo 2025,
            bringing our finest selection of Egyptian herbs, spices, and seeds to an
            international audience. The event gathered industry leaders, distributors, and
            buyers from across the globe to explore the future of natural products.
            
            <br /><br />
            
            <strong>Highlights:</strong>
            <ul className="mt-4 space-y-2 list-none ml-4">
              <li>• Displayed our certified organic herbs and spices collection.</li>
              <li>• Met with international buyers and strengthened global partnerships.</li>
              <li>• Announced new product lines and expansion into Asian markets.</li>
            </ul>
            
            <br />
            
            Stay tuned for our next event - Salvia is always growing, connecting, and
            sharing Egypt's natural treasures with the world.
          </p>
        </div>

        <img
          src={Event}
          alt="Event flowers and logo"
          className="absolute bottom-0 right-20 w-48 md:w-80 opacity-95 pointer-events-none select-none z-20"
        />
      </div>

      <div className="fixed bottom-0 left-0 w-full z-[9999]">
        <Footer toggleSidebar={toggleSidebar} />
      </div>
    </section>
  );
};

export default EventInformation;