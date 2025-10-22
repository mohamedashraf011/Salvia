import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Sidebar from "../../Components/Sidebar"; // حسب مكان الملف عندك
import bgImage from "../../assets/images/community.png"; // استبدلها باسم الصورة اللي عندك
import { useNavigate } from "react-router-dom";

function Community() {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-start text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* تظليل خفيف فوق الصورة عشان يوضح النص */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* المحتوى النصي */}
      <div className="relative z-10 max-w-xl px-8 md:px-16">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          Sustainability <br /> & Community
        </h1>
        <p className="text-sm md:text-base leading-relaxed font-light">
          We work closely with farmers and local communities, ensuring
          sustainable sourcing practices and supporting agricultural development
          in the region. By maintaining strong relationships throughout our
          supply chain, we are able to guarantee both traceability and
          reliability for our customers.
        </p>
      </div>

      {/* الأسهم للتنقل */}
      <div className="absolute left-6 bottom-1/2 flex flex-col items-center gap-4 z-10">
        <button
          onClick={() => navigate("/mission")}
          className="bg-green-600 hover:bg-green-700 transition p-2 rounded-full"
        >
          <FaArrowUp className="text-white text-lg" />
        </button>
        <button
          onClick={() => navigate("/nextpage")}
          className="bg-green-600 hover:bg-green-700 transition p-2 rounded-full"
        >
          <FaArrowDown className="text-white text-lg" />
        </button>
      </div>

      {/* اللوجو + السايدبار */}
      <div className="absolute bottom-6 left-6 flex items-center gap-3 z-10">
        <Sidebar />
        <img
          src="/src/assets/images/logo.png"
          alt="Logo"
          className="w-20 md:w-28 object-contain"
        />
      </div>
    </div>
  );
}

export default Community;
