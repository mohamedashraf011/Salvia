import { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import SEOHead from "../../Components/SEOHead";
import Certificate from "../../assets/images/Certificates.png";
import tree from "../../assets/images/tree.png";
import { DOMAIN } from "../../utils/Domain";
import { getBreadcrumbSchema } from "../../utils/schemas";

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

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Certificates", path: "/certificates" }
  ]);

  return (
    <>
      <SEOHead
        title="Quality Certifications | Salvia Naturals Standards & Compliance"
        description="View our quality certifications ensuring premium standards in dried herbs and botanical products export. HACCP, ISO, and organic certifications."
        keywords="quality certifications herbs, HACCP certified herbs, organic certification Egypt, botanical products standards, herb export compliance"
        canonicalUrl="/certificates"
        schema={breadcrumbSchema}
      />
      <main>
        <section className="relative flex flex-col h-screen bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white w-full overflow-hidden" aria-labelledby="certificates-heading">
          <img
            src={tree}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute top-0 right-0 w-40 md:w-55 opacity-90"
          />

          <div className="flex flex-col flex-1 px-4 gap-6 mt-8 overflow-y-auto">
            <div className="max-w-6xl ml-65">
              <h1 id="certificates-heading" className="text-5xl font-bold mb-4 text-left flex-shrink-0">
                Certificates
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl flex-1 overflow-y-auto pb-0 mx-auto scrollbar-hide relative z-10" role="list" aria-label="Quality certificates list">
              {loading ? (
                <div className="col-span-full text-center text-xl" role="status" aria-live="polite">Loading certificates...</div>
              ) : certificates.length === 0 ? (
                <div className="col-span-full text-center text-xl">No certificates available</div>
              ) : (
                certificates.map((cert) => (
                  <article 
                    key={cert._id} 
                    role="listitem"
                    className="bg-white rounded-lg shadow-lg aspect-square flex flex-col justify-center items-center p-4 overflow-visible"
                  >
                    <img
                      src={cert.image || Certificate}
                      alt={`${cert.certificateBody} Certificate - ${cert.certificateNumber}`}
                      loading="lazy"
                      className="mx-auto mb-4 w-auto h-auto max-h-[60%] object-contain"
                    />
                    <div className="w-full pl-4">
                      <h2 className="text-gray-700 mb-1 font-semibold">
                        {cert.certificateBody}
                      </h2>
                      <p className="text-gray-700">
                        Certificate no: {cert.certificateNumber}
                      </p>
                      <p className="text-gray-700">
                        <time dateTime={cert.expiryDate}>Expiry: {formatDate(cert.expiryDate)}</time>
                      </p>
                    </div>
                  </article>
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
      </main>
    </>
  );
}

export default Certificates;
