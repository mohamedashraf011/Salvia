import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import EventImage1 from "../../assets/images/Event1.png";
import EventImage2 from "../../assets/images/Event2.png";
import EventImage3 from "../../assets/images/Event3.png";
import tree from "../../assets/images/tree.png";
import { MdOutlineArrowOutward } from "react-icons/md";

function Events() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    console.log("Toggle clicked! State will be:", !isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const events = [
    {
      id: 1,
      image: EventImage1,
      title: "Plants in the world",
    },
    {
      id: 2,
      image: EventImage2,
      title: "Plants in the world",
    },
    {
      id: 3,
      image: EventImage3,
      title: "Plants in the world",
    },
    {
      id: 4,
      image: EventImage1,
      title: "Plants in the world",
    },
    {
      id: 5,
      image: EventImage2,
      title: "Plants in the world",
    },
    {
      id: 6,
      image: EventImage3,
      title: "Plants in the world",
    },
    {
      id: 7,
      image: EventImage1,
      title: "Plants in the world",
    },
    {
      id: 8,
      image: EventImage2,
      title: "Plants in the world",
    },
  ];

  const handleCardClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <section className="relative flex flex-col h-screen bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white w-full overflow-hidden">
      <img
        src={tree}
        alt="Top Right Image"
        className="absolute top-0 right-0 w-40 md:w-55 opacity-90 z-10"
      />

      <header className="px-4 mt-8 shrink-0 z-10">
        <div className="max-w-6xl ml-45">
          <h1 className="text-5xl font-bold mb-4 text-left">Events</h1>
        </div>
      </header>

      <main className="flex-1 px-4 overflow-y-auto scrollbar-hide relative z-10 pt-4 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-[#F4FFF0] rounded-md shadow-md flex flex-col overflow-hidden hover:shadow-lg hover:bg-[#ECFFE5] transition-shadow duration-300 cursor-pointer"
              onClick={() => handleCardClick(event.id)}
            >
              <div className="p-6 flex flex-col">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  {event.title}
                  <MdOutlineArrowOutward className="ml-2 text-2xl text-green-600" />
                </h3>
                <p className="text-green-600 hover:text-green-700 cursor-pointer transition-colors underline">
                  Read more
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer toggleSidebar={toggleSidebar} />

      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </section>
  );
}

export default Events;