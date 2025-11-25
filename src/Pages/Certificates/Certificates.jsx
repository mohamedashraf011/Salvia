import { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import Certificate from "../../assets/images/Certificates.png";
import tree from "../../assets/images/tree.png";
import { DOMAIN } from "../../utils/Domain";

function Certificates() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch(`${DOMAIN}/api/certificates`);
        const data = await response.json();
        setCertificates(data.certificates);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  const toggleSidebar = () => {
    console.log("Toggle clicked! State will be:", !isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

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
          {loading ? (
            <div className="col-span-full text-center text-xl">Loading certificates...</div>
          ) : certificates.length === 0 ? (
            <div className="col-span-full text-center text-xl">No certificates available</div>
          ) : (
            certificates.map((cert) => (
              <div 
                key={cert._id} 
                className="bg-white rounded-lg shadow-lg aspect-square flex flex-col justify-center items-center p-4 overflow-visible"
              >
                <img
                  src={cert.image || Certificate}
                  alt={`Certificate ${cert.certificateNumber}`}
                  className="mx-auto mb-4 w-auto h-auto max-h-[60%] object-contain"
                />
                <div className="w-full pl-4">
                  <p className="text-gray-700 mb-1 font-semibold">
                    {cert.certificateBody}
                  </p>
                  <p className="text-gray-700">
                    Certificate no: {cert.certificateNumber}
                  </p>
                  <p className="text-gray-700">
                    Expiry: {formatDate(cert.expiryDate)}
                  </p>
                </div>
              </div>
            ))
          )}
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
