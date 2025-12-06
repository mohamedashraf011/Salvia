import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import SEOHead from "../../Components/SEOHead";
import tree from "../../assets/images/tree.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { DOMAIN } from "../../utils/Domain";
import { getBreadcrumbSchema } from "../../utils/schemas";

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
           setEvents(data.events);
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

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" }
  ]);

  // Event list schema for rich results
  const eventListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Salvia Naturals Events",
    "description": "Trade shows and events showcasing our premium dried herbs and botanicals",
    "numberOfItems": events.length,
    "itemListElement": events.slice(0, 10).map((event, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Event",
        "name": event.title,
        "image": event.image,
        "organizer": {
          "@type": "Organization",
          "name": "Salvia Naturals"
        }
      }
    }))
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, eventListSchema]
  };

  return (
    <>
      <SEOHead
        title="Trade Shows & Events | Salvia Naturals Exhibitions"
        description="Join us at international trade shows and events showcasing our premium dried herbs and botanicals. Connect with Salvia Naturals worldwide."
        keywords="herb trade shows, botanical events, Salvia Naturals exhibitions, dried herbs expo, herbal products fair"
        canonicalUrl="/events"
        schema={combinedSchema}
      />
      <main>
        <section className="relative flex flex-col h-screen bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white w-full overflow-hidden" aria-labelledby="events-heading">
          <img
            src={tree}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute top-0 right-0 w-40 md:w-55 opacity-90 z-10"
          />

          <header className="px-4 mt-8 shrink-0 z-10">
            <div className="max-w-6xl ml-45">
              <h1 id="events-heading" className="text-5xl font-bold mb-4 text-left">Events</h1>
            </div>
          </header>

          <div className="flex-1 px-4 overflow-y-auto scrollbar-hide relative z-10 pt-4 pb-4" role="main">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" role="list" aria-label="Events list">
              {events.length > 0 ? (
                events.map((event) => (
                  <article
                    key={event._id}
                    role="listitem"
                    className="bg-[#F4FFF0] rounded-md shadow-md flex flex-col overflow-hidden hover:shadow-lg hover:bg-[#ECFFE5] transition-shadow duration-300 cursor-pointer focus-within:ring-2 focus-within:ring-green-400"
                    onClick={() => handleCardClick(event._id)}
                    onKeyDown={(e) => e.key === 'Enter' && handleCardClick(event._id)}
                    tabIndex={0}
                  >
                    <div className="p-6 flex flex-col">
                      <img
                        src={event.image}
                        alt={`${event.title} - Event at Salvia Naturals`}
                        loading="lazy"
                        className="w-full h-48 object-cover rounded-xl mb-4"
                      />
                      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        {event.title}
                        <MdOutlineArrowOutward className="ml-2 text-2xl text-green-600" aria-hidden="true" />
                      </h2>
                      <span className="text-green-600 hover:text-green-700 cursor-pointer transition-colors underline">
                        Read more
                      </span>
                    </div>
                  </article>
                ))
              ) : (
                <p className="text-center col-span-full">No events found.</p>
              )}
            </div>
          </div>

          <Footer toggleSidebar={toggleSidebar} />

          <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
        </section>
      </main>
    </>
  );
}

export default Events;