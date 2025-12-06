import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import tree from "../../assets/images/tree.png";
import { DOMAIN } from "../../utils/Domain";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${DOMAIN}/api/gallery`);
        const data = await response.json();
        if (data.images) {
          setImages(data.images);
        }
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const toggleSidebar = () => {
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
      
      <div className="flex flex-col flex-1 px-4 gap-6 overflow-hidden">
        <div className="max-w-6xl ml-45">
          <h1 className="text-5xl font-bold mb-4 mt-4 text-left flex-shrink-0">
            Gallery
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl flex-1 overflow-y-auto pb-4 mx-auto scrollbar-hide">
          {loading ? (
             <p className="text-center col-span-full">Loading images...</p>
          ) : images.length > 0 ? (
            images.map((img, index) => (
              <div key={img._id || index} className="relative h-fit bg-white rounded-lg shadow-lg">
                <img
                  src={img.image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No images found.</p>
          )}
        </div>
      </div>

      <Footer
        toggleSidebar={toggleSidebar}
        className="w-full flex-shrink-0"
      />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </section>
  );
}

export default Gallery;