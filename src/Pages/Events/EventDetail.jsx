import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FaArrowDown, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import leavesRight from "../../assets/images/tree.png";
import EventImage from "../../assets/images/EventDetail.png";

const EventDetail = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const handleArrowClick = () => {
    navigate("/event-information");
  };

  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white text-center">
      <img
        src={leavesRight}
        alt="leaves decoration"
        className="absolute top-0 right-0 w-44 md:w-64 opacity-90 pointer-events-none select-none z-30"
      />

      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      <div className="flex flex-col items-center justify-start flex-grow relative z-10 px-0 py-16 mt-4">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mb-2 gap-6 lg:gap-12">

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-8 text-left">
              Salvia at Cairo International Plants & Herbs Expo 2025
            </h1>
            <div className="text-lg md:text-xl mb-6 text-[#EDFFED]">
              <p className="mb-2 flex items-center justify-center lg:justify-start">
                <FaCalendar className="mr-2" />
                March 15-17, 2025
              </p>
              <p className="flex items-center justify-center lg:justify-start">
                <FaMapMarkerAlt className="mr-2" />
                Cairo International Convention Center, Egypt
              </p>
            </div>

            <Motion.div
              className="mt-4 text-[#CEFFCE] text-4xl cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              onClick={handleArrowClick}
            >
              <FaArrowDown />
            </Motion.div>
          </div>


          <div className="w-full lg:w-auto flex-shrink-0 mt-8 lg:mt-0">
            <img
              src={EventImage}
              alt="Salvia at Cairo Plants & Herbs Expo 2025"
              className="max-w-md lg:max-w-2xl w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>


      <div className="fixed bottom-0 left-0 w-full z-[9999]">
        <Footer toggleSidebar={toggleSidebar} />
      </div>
    </section>
  );
};

export default EventDetail;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion as Motion } from "framer-motion";
// import { FaArrowDown, FaCalendar, FaMapMarkerAlt, FaBars } from "react-icons/fa";
// import Sidebar from "../../Components/Sidebar";
// import Footer from "../../Components/Footer";
// import leavesRight from "../../assets/images/tree.png";
// import EventImage from "../../assets/images/EventDetail.png"; // غير لصورة المزرعة إذا عندك path جديد

// const EventDetail = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   const handleArrowClick = () => {
//     console.log('Arrow clicked/tapped! Navigating...'); // اختبار – شيله بعد التأكيد
//     navigate("/events"); // غير الرابط زي ما عايز (مثال: /register)
//   };

//   return (
//     <section className="relative flex flex-col min-h-screen bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white overflow-visible">
//       {/* صورة الأوراق الزخرفية في الأعلى يمين */}
//       <img
//         src={leavesRight}
//         alt="leaves decoration"
//         className="absolute top-0 right-0 w-44 md:w-64 opacity-70 pointer-events-none select-none z-0"
//       />

//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

//       {/* المحتوى الرئيسي – مركزي ومتجاوب */}
//       <div className="flex flex-col lg:flex-row items-start justify-center flex-grow relative z-10 px-4 md:px-8 py-12 mt-4 max-w-6xl mx-auto w-full gap-6 lg:gap-12">
        
//         {/* العمود الأيسر: العنوان + التفاصيل + السهم */}
//         <div className="flex flex-col items-start text-left relative z-30 w-full lg:w-1/2">
//           <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
//             Salvia at Cairo<br />
//             International Plants &<br />
//             Herbs Expo 2025
//           </h1>
//           <div className="text-lg md:text-xl mb-8 text-[#EDFFED] space-y-4">
//             <p className="flex items-center">
//               <FaCalendar className="mr-3 text-xl flex-shrink-0" />
//               March 15-17, 2025
//             </p>
//             <p className="flex items-center">
//               <FaMapMarkerAlt className="mr-3 text-xl flex-shrink-0" />
//               Cairo International Convention Center, Egypt
//             </p>
//           </div>

//           {/* السهم المتحرك – الحل الكامل: onClick + onTouchStart + whileTap */}
//           <Motion.div
//             className="text-[#CEFFCE] text-4xl cursor-pointer relative z-50 p-2"
//             style={{ pointerEvents: 'auto' }}
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
//             whileTap={{ scale: 0.95 }} // تأثير الضغط على الموبايل/ديسكتوب
//             onClick={handleArrowClick}
//             onTouchStart={handleArrowClick} // الحل الرئيسي للموبايل (touch events)
//           >
//             <FaArrowDown />
//           </Motion.div>
//         </div>

//         {/* العمود الأيمن: الصورة */}
//         <div className="w-full lg:w-1/2 flex-shrink-0 relative z-20">
//           <img
//             src={EventImage}
//             alt="Salvia at Cairo Plants & Herbs Expo 2025"
//             className="w-full max-w-md lg:max-w-2xl h-auto rounded-2xl shadow-2xl object-cover"
//           />
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="fixed bottom-0 left-0 w-full z-[9999]">
//         <Footer toggleSidebar={toggleSidebar} />
//       </div>

//     </section>
//   );
// };

// export default EventDetail;