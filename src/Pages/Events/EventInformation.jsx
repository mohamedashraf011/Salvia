import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import leavesRight from "../../assets/images/tree.png";
import { DOMAIN } from "../../utils/Domain";

const EventInformation = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`${DOMAIN}/api/events/${id}`);
        const data = await response.json();
         if (data._id) {
             setEvent(data);
        } else if (data.event) {
             setEvent(data.event); 
        } else {
             setEvent(data); 
        }
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchEvent();
    }
  }, [id]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  if (loading) {
     return <div className="text-white text-center mt-20">Loading...</div>;
  }
  
  if (!event) {
     return <div className="text-white text-center mt-20">Event not found</div>;
  }

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
          <div className="text-sm md:text-xl text-gray-100 leading-relaxed">
             <p>{event.description}</p>
            
            <br /><br />
            
            <strong>Highlights:</strong>
            <p className="mt-4">{event.highlights}</p>
            
            <br />
            
            <p>{event.cta}</p>
          </div>
        </div>

        <img
          src={event.image}
          alt={event.title}
          className="absolute bottom-0 right-20 w-48 md:w-80 opacity-95 pointer-events-none select-none z-20 rounded-lg shadow-lg"
        />
      </div>

      <div className="fixed bottom-0 left-0 w-full z-[9999]">
        <Footer toggleSidebar={toggleSidebar} />
      </div>
    </section>
  );
};

export default EventInformation;