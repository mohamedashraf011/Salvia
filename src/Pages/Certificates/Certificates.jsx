import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import Certificate from "../../assets/images/Certificates.png";
import tree from "../../assets/images/tree.png";

function Certificates() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggle clicked! State will be:", !isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <section className="relative flex flex-col h-screen bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white w-full overflow-hidden">
      <img
        src={tree}
        alt="Top Right Image"
        className="absolute top-0 right-0 w-40 md:w-55 opacity-90"
      />

      <div className="flex flex-col flex-1 px-4 gap-6 mt-8 overflow-y-auto">
        <div className="max-w-6xl ml-65">
          <h1 className="text-5xl font-bold mb-4 text-left flex-shrink-0">
            Certificates
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl flex-1 overflow-y-auto pb-0 mx-auto scrollbar-hide relative z-10">
          <div className="bg-white rounded-lg shadow-lg aspect-square flex flex-col justify-center items-center p-4 overflow-visible">
            <img
              src={Certificate}
              alt="ISO Certificate"
              className="mx-auto mb-4 w-auto h-auto max-h-[60%] object-contain"
            />
            <div className="w-full pl-4">
              <p className="text-gray-700 mb-1">Certification body</p>
              <p className="text-gray-700">Certificate no</p>
              <p className="text-gray-700">Expiry date no</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg aspect-square flex flex-col justify-center items-center p-4 overflow-visible">
            <img
              src={Certificate}
              alt="ISO Certificate"
              className="mx-auto mb-4 w-auto h-auto max-h-[60%] object-contain"
            />
            <div className="w-full pl-4">
              <p className="text-gray-700 mb-1">Certification body</p>
              <p className="text-gray-700">Certificate no</p>
              <p className="text-gray-700">Expiry date no</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg aspect-square flex flex-col justify-center items-center p-4 overflow-visible">
            <img
              src={Certificate}
              alt="ISO Certificate"
              className="mx-auto mb-4 w-auto h-auto max-h-[60%] object-contain"
            />
            <div className="w-full pl-4">
              <p className="text-gray-700 mb-1">Certification body</p>
              <p className="text-gray-700">Certificate no</p>
              <p className="text-gray-700">Expiry date no</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg aspect-square flex flex-col justify-center items-center p-4 overflow-visible">
            <img
              src={Certificate}
              alt="ISO Certificate"
              className="mx-auto mb-4 w-auto h-auto max-h-[60%] object-contain"
            />
            <div className="w-full pl-4">
              <p className="text-gray-700 mb-1">Certification body</p>
              <p className="text-gray-700">Certificate no</p>
              <p className="text-gray-700">Expiry date no</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg aspect-square flex flex-col justify-center items-center p-4 overflow-visible">
            <img
              src={Certificate}
              alt="ISO Certificate"
              className="mx-auto mb-4 w-auto h-auto max-h-[60%] object-contain"
            />
            <div className="w-full pl-4">
              <p className="text-gray-700 mb-1">Certification body</p>
              <p className="text-gray-700">Certificate no</p>
              <p className="text-gray-700">Expiry date no</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg aspect-square flex flex-col justify-center items-center p-4 overflow-visible">
            <img
              src={Certificate}
              alt="ISO Certificate"
              className="mx-auto mb-4 w-auto h-auto max-h-[60%] object-contain"
            />
            <div className="w-full pl-4">
              <p className="text-gray-700 mb-1">Certification body</p>
              <p className="text-gray-700">Certificate no</p>
              <p className="text-gray-700">Expiry date no</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg aspect-square flex flex-col justify-center items-center p-4 overflow-visible">
            <img
              src={Certificate}
              alt="ISO Certificate"
              className="mx-auto mb-4 w-auto h-auto max-h-[60%] object-contain"
            />
            <div className="w-full pl-4">
              <p className="text-gray-700 mb-1">Certification body</p>
              <p className="text-gray-700">Certificate no</p>
              <p className="text-gray-700">Expiry date no</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg aspect-square flex flex-col justify-center items-center p-4 overflow-visible">
            <img
              src={Certificate}
              alt="ISO Certificate"
              className="mx-auto mb-4 w-auto h-auto max-h-[60%] object-contain"
            />
            <div className="w-full pl-4">
              <p className="text-gray-700 mb-1">Certification body</p>
              <p className="text-gray-700">Certificate no</p>
              <p className="text-gray-700">Expiry date no</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg aspect-square flex flex-col justify-center items-center p-4 overflow-visible">
            <img
              src={Certificate}
              alt="ISO Certificate"
              className="mx-auto mb-4 w-auto h-auto max-h-[60%] object-contain"
            />
            <div className="w-full pl-4">
              <p className="text-gray-700 mb-1">Certification body</p>
              <p className="text-gray-700">Certificate no</p>
              <p className="text-gray-700">Expiry date no</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg aspect-square flex flex-col justify-center items-center p-4 overflow-visible">
            <img
              src={Certificate}
              alt="ISO Certificate"
              className="mx-auto mb-4 w-auto h-auto max-h-[60%] object-contain"
            />
            <div className="w-full pl-4">
              <p className="text-gray-700 mb-1">Certification body</p>
              <p className="text-gray-700">Certificate no</p>
              <p className="text-gray-700">Expiry date no</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg aspect-square flex flex-col justify-center items-center p-4 overflow-visible">
            <img
              src={Certificate}
              alt="ISO Certificate"
              className="mx-auto mb-4 w-auto h-auto max-h-[60%] object-contain"
            />
            <div className="w-full pl-4">
              <p className="text-gray-700 mb-1">Certification body</p>
              <p className="text-gray-700">Certificate no</p>
              <p className="text-gray-700">Expiry date no</p>
            </div>
          </div>
        </div>
      </div>

      <Footer
        toggleSidebar={toggleSidebar}
        className="absolute bottom-0 left-0 w-full z-20"
      />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </section>
  );
}

export default Certificates;
