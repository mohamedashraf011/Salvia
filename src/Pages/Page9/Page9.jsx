import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import tree from "../../assets/images/tree.png";
import { DOMAIN } from "../../utils/Domain";

function Page9() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${DOMAIN}/api/site-showcase/showcase`);
        const result = await response.json();
        // User example: direct object: { pageTitle: "...", ... }
        setData(result);
      } catch (error) {
        console.error("Error fetching Page 9 data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  if (loading) {
    return (
        <section className="relative flex flex-col h-screen bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white w-full overflow-hidden items-center justify-center">
            <p className="text-xl">Loading...</p>
        </section>
    );
  }

  if (!data || !data.active) {
       // If not active or no data, what to show? Maybe just "Content not available" or still show what we have.
       // User requirement is just "have a real data".
       // If !data, show error/empty.
  }

  return (
    <section className="relative flex flex-col h-screen bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white w-full overflow-hidden">
      <img
        src={tree}
        alt="Top Right Image"
        className="absolute top-0 right-0 w-40 md:w-65 opacity-90"
      />

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/2 flex flex-col px-10 py-10 overflow-y-auto scrollbar-hide">
          <h1 className="text-4xl font-extrabold mb-8 flex-shrink-0">
            {data?.pageTitle || "Heading"}
          </h1>
          <div className="flex-1 text-white text-lg leading-relaxed">
            <p>{data?.description}</p>
          </div>
        </div>

        <div className="w-1/2 flex items-end justify-center">
          {data?.mainImageUrl && (
            <img
                src={data.mainImageUrl}
                alt="Right Image"
                className="absolute bottom-40 right-60 w-64 md:w-100 opacity-95 pointer-events-none select-none z-20 object-contain"
            />
          )}
        </div>
      </div>

      <Footer
        toggleSidebar={toggleSidebar}
        className="absolute bottom-0 left-0 w-full z-100 bg-transparent"
      />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </section>
  );
}

export default Page9;
