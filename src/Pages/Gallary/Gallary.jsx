import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import Gallary1 from "../../assets/images/Gallary1.png";
import Gallary2 from "../../assets/images/Gallary2.png";
import Gallary3 from "../../assets/images/Gallary3.png";
import Gallary4 from "../../assets/images/Gallary4.png";
// import sampleVideo from "../../assets/videos/sample.mp4";
import tree from "../../assets/images/tree.png";

function Gallery() {
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
      
      <div className="flex flex-col flex-1 px-4 gap-6 overflow-hidden">
        <div className="max-w-6xl ml-45">
          <h1 className="text-5xl font-bold mb-4 mt-4 text-left flex-shrink-0">
            Gallery
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl flex-1 overflow-y-auto pb-4 mx-auto scrollbar-hide">
          <div className="relative bg-white rounded-lg shadow-lg">
            <img
              src={Gallary1}
              alt="Gallery 1"
              className="w-full h-auto"
            />
          </div>

          <div className="relative bg-white rounded-lg shadow-lg">
            <img
              src={Gallary2}
              alt="Gallery 2"
              className="w-full h-auto"
            />
          </div>

          <div className="relative bg-white rounded-lg shadow-lg">
            <img
              src={Gallary3}
              alt="Gallery 3"
              className="w-full h-auto"
            />
          </div>

          <div className="relative bg-white rounded-lg shadow-lg">
            <img
              src={Gallary4}
              alt="Gallery 4"
              className="w-full h-auto"
            />
          </div>

          {/* <div className="relative bg-white rounded-lg shadow-lg">
            <video
              src={sampleVideo}
              controls
              className="w-full h-auto"
              poster={Gallary1}
            >
              Your browser does not support the video tag.
            </video>
          </div> */}

          <div className="relative bg-white rounded-lg shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="YouTube Video"
              className="w-full h-64"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="relative bg-white rounded-lg shadow-lg">
            <img
              src={Gallary1}
              alt="Extra 1"
              className="w-full h-auto"
            />
          </div>
          <div className="relative bg-white rounded-lg shadow-lg">
            <img
              src={Gallary2}
              alt="Extra 2"
              className="w-full h-auto"
            />
          </div>
          <div className="relative bg-white rounded-lg shadow-lg">
            <img
              src={Gallary3}
              alt="Extra 3"
              className="w-full h-auto"
            />
          </div>
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