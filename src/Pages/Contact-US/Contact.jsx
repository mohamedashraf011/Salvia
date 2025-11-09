import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import root from "../../assets/images/Contact1.png";
import trunk from "../../assets/images/Contact2.png";
import Signboard from "../../assets/images/Contact3.png";
import flower from "../../assets/images/Contact4.png";
import logo from "../../assets/images/logo.png";

const Contact = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white">
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      <div className="flex-grow relative z-10 px-4 md:px-20 pb-32 md:pb-28 flex">
        <div className="w-full md:w-1/2 max-w-lg py-12 flex flex-col items-start z-20">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Let's Work Together
          </h1>
          <form className="w-full space-y-6">
            <div className="w-full">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-transparent border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-400 text-sm"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-transparent border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-400 text-sm"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 bg-transparent border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-400 text-sm"
              />
            </div>
            <div className="w-full">
              <textarea
                rows={3}
                placeholder="Message"
                className="w-full p-3 bg-transparent border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-400 resize-none text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#4E6347] text-white py-3 rounded-lg font-semibold hover:bg-[#3a4d35] transition-colors text-sm cursor-pointer relative z-50 hover:z-[10000]"
            >
              Send Message
            </button>
          </form>
        </div>

        <img
          src={root}
          alt=""
          className="absolute top-[-50px] md:top-[0px] right-[-50px] md:right-[-130px] w-[300px] md:w-[400px] h-auto transform -translate-x-1/4 z-60"
        />

        <img
          src={trunk}
          alt=""
          className="absolute top-[100px] md:top-[0px] right-[20px] md:right-[40px] w-32 md:w-3xl h-auto z-50"
        />

        <div className="top-[200px] md:top-[100px] right-[40px] md:right-[-250px] z-20 relative w-48 md:w-90">
          <img src={Signboard} alt="" className="w-full h-auto" />
          <img
            src={logo}
            alt="Salvia Naturals Logo"
            className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 md:w-28 h-auto z-30"
          />

          <div className="absolute top-40  w-64 md:w-80 text-left text-sm md:text-base ml-4 md:ml-8 pt-2">
            <p className="text-[#D3D4C6] mb-4 leading-relaxed">
              At Salvia, we're always ready to connect with distributors,
              importers, and manufacturers. Worldwide: Reach out today and let's
              grow together.
            </p>
            <div className="space-y-2 text-xs md:text-base">
              <div className="flex items-center">
                <FiMapPin className="w-4 h-4 text-white mr-2" />
                <span>Address: Fayoum, Egypt</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="w-4 h-4 text-white mr-2" />
                <span>Phone: +20 1055673304</span>
              </div>
              <div className="flex items-center">
                <FiMail className="w-4 h-4 text-white mr-2" />
                <span>Email: info@salvianaturals.com</span>
              </div>
            </div>
          </div>
        </div>

        <img
          src={flower}
          alt=""
          className="absolute bottom-[-20px] md:bottom-[0px] right-[-20px] md:right-20 w-[200px] md:w-80 h-auto z-100 transform translate-x-1/4"
        />

        <div className="absolute bottom-0 left-0 right-0 h-20 md:h-24 bg-gradient-to-r from-[#8B4513] to-[#654321] flex items-center pl-8 z-5">
          <img
            src={logo}
            alt="Salvia Naturals"
            className="w-10 md:w-12 h-auto mr-2"
          />
          <span className="text-white font-semibold text-sm md:text-base">
            Salvia Naturals
          </span>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-[9999]">
        <Footer toggleSidebar={toggleSidebar} />
      </div>
    </section>
  );
};

export default Contact;