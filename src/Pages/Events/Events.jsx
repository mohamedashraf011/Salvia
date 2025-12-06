import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import tree from "../../assets/images/tree.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { DOMAIN } from "../../utils/Domain";

function Events() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${DOMAIN}/api/events`);
        const data = await response.json();
        if (Array.isArray(data)) {
           setEvents(data);
        } else if (data.events) {
           setEvents(data.events); // Handle potential { events: [] } structure if different from user prompt example
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => setIsSidebarOpen(false);

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
          {events.length > 0 ? (
            events.map((event) => (
              <div
                key={event._id}
                className="bg-[#F4FFF0] rounded-md shadow-md flex flex-col overflow-hidden hover:shadow-lg hover:bg-[#ECFFE5] transition-shadow duration-300 cursor-pointer"
                onClick={() => handleCardClick(event._id)}
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
            ))
          ) : (
             <p className="text-center col-span-full">No events found.</p>
          )}
        </div>
      </main>

      <Footer toggleSidebar={toggleSidebar} />

      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </section>
  );
}

export default Events;