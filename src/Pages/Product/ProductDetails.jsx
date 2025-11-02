import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";

function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggle clicked! State will be:", !isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white text-xl">
        <p>Product not found</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-white text-[#4E6347] px-4 py-2 rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="relative flex min-h-screen bg-gradient-to-br from-[#4E6347] to-[#9F9F9D] overflow-hidden text-white">
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row justify-between items-center px-8 lg:px-36 pt-12">
          <div className="text-white w-full lg:w-1/2 space-y-5">
            <h1 className="text-4xl lg:text-5xl font-bold uppercase">
              {product.title}
            </h1>
            <ul className="space-y-2 text-lg leading-relaxed list-disc list-inside">
              {product.details?.map((item, index) => (
                <li key={index}>
                  <strong>{item.label}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-5 w-[380px]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[250px] object-contain rounded-xl"
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={() =>
                  (window.location.href = `mailto:?subject=${product.title}&body=Check this product: ${window.location.href}`)
                }
                className="flex items-center gap-2 bg-[#4E6347] text-white px-4 py-2 rounded-xl hover:bg-white hover:text-[#4E6347] transition cursor-pointer"
              >
                <FaEnvelope /> Send by Mail
              </button>

              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/?text=Check this product: ${window.location.href}`
                  )
                }
                className="flex items-center gap-2 bg-[#36B133] text-white px-4 py-2 rounded-xl hover:bg-white hover:text-[#36B133] transition cursor-pointer"
              >
                <FaWhatsapp /> Send by WhatsApp
              </button>
            </div>
          </div>
        </div>

        <Footer
          toggleSidebar={toggleSidebar}
          className="absolute bottom-0 left-0 w-full"
        />
      </div>
    </section>
  );
}

export default ProductDetails;
