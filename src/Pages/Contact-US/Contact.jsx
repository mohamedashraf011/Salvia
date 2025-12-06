import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import SEOHead from "../../Components/SEOHead";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import root from "../../assets/images/Contact1.png";
import trunk from "../../assets/images/Contact2.png";
import Signboard from "../../assets/images/Contact3.png";
import flower from "../../assets/images/Contact4.png";
import logo from "../../assets/images/logo.png";
import { DOMAIN } from "../../utils/Domain";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "../../utils/schemas";

const Contact = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [siteInfo, setSiteInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const fetchSiteInfo = async () => {
      try {
        const response = await fetch(`${DOMAIN}/api/contact-us/site-info`);
        if (!response.ok) {
          throw new Error(`Failed to fetch contact data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setSiteInfo(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching contact site info:", err);
        setError(err.message || "Failed to fetch contact data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSiteInfo();
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${DOMAIN}/api/contact-us/inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! We will get back to you soon."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again."
      });
    } finally {
      setSubmitting(false);
    }
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" }
  ]);

  const localBusinessSchema = getLocalBusinessSchema({
    phone: siteInfo?.phone,
    email: siteInfo?.email,
    address: siteInfo?.address
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, localBusinessSchema]
  };

  // Show error state for site info
  if (error) {
    return (
      <>
        <SEOHead
          title="Contact Salvia Naturals | Get Quote for Dried Herbs Export"
          description="Connect with Salvia Naturals for wholesale inquiries, product samples, and export quotes for dried herbs and botanicals. Fast response guaranteed."
          canonicalUrl="/contact"
        />
        <main>
          <section className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white">
            <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
            
            <div className="flex-grow flex items-center justify-center px-4">
              <div className="max-w-md text-center">
                <div className="bg-red-500/20 border border-red-500 rounded-lg p-6 mb-4" role="alert">
                  <h1 className="text-2xl font-bold text-red-300 mb-2">Error Loading Contact Information</h1>
                  <p className="text-white">{error}</p>
                </div>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-[#4E6347] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3a4d35] transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Retry
                </button>
              </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full z-[9999]">
              <Footer toggleSidebar={toggleSidebar} />
            </div>
          </section>
        </main>
      </>
    );
  }

  // Show loading state
  if (loading) {
    return (
      <>
        <SEOHead
          title="Contact Salvia Naturals | Get Quote for Dried Herbs Export"
          description="Connect with Salvia Naturals for wholesale inquiries, product samples, and export quotes for dried herbs and botanicals. Fast response guaranteed."
          canonicalUrl="/contact"
        />
        <main>
          <section className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white">
            <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
            
            <div className="flex-grow flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4" role="status" aria-label="Loading"></div>
                <p className="text-xl">Loading contact information...</p>
              </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full z-[9999]">
              <Footer toggleSidebar={toggleSidebar} />
            </div>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Contact Salvia Naturals | Get Quote for Dried Herbs Export"
        description="Connect with Salvia Naturals for wholesale inquiries, product samples, and export quotes for dried herbs and botanicals. Fast response guaranteed."
        keywords="contact Salvia Naturals, dried herbs quote, botanical products inquiry, herbs export contact, wholesale herbs Egypt"
        canonicalUrl="/contact"
        schema={combinedSchema}
      />
      <main>
        <section className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white" aria-labelledby="contact-heading">
          <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

          <div className="flex-grow relative z-10 px-4 md:px-20 pb-32 md:pb-28 flex">
            <div className="w-full md:w-1/2 max-w-lg py-12 flex flex-col items-start z-20">
              <h1 id="contact-heading" className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                {siteInfo?.pageTitle || "Contact Us"}
              </h1>
              <form className="w-full space-y-6" onSubmit={handleSubmit} aria-label="Contact form">
                {submitStatus && (
                  <div 
                    className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-500/20 text-green-100 border border-green-500' : 'bg-red-500/20 text-red-100 border border-red-500'}`}
                    role="alert"
                    aria-live="polite"
                  >
                    {submitStatus.message}
                  </div>
                )}
                <div className="w-full">
                  <label htmlFor="contact-name" className="sr-only">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    autoComplete="name"
                    className="w-full p-3 bg-transparent border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 text-sm"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="contact-email" className="sr-only">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    autoComplete="email"
                    className="w-full p-3 bg-transparent border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 text-sm"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="contact-subject" className="sr-only">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full p-3 bg-transparent border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 text-sm"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="contact-message" className="sr-only">Your Message</label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    className="w-full p-3 bg-transparent border border-white rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 resize-none text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full bg-[#4E6347] text-white py-3 rounded-lg font-semibold hover:bg-[#3a4d35] transition-colors text-sm cursor-pointer relative z-50 hover:z-[10000] focus:outline-none focus:ring-2 focus:ring-white ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <img
              src={root}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute top-[-50px] md:top-[0px] right-[-50px] md:right-[-130px] w-[300px] md:w-[400px] h-auto transform -translate-x-1/4 z-60"
            />

            <img
              src={trunk}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute top-[100px] md:top-[0px] right-[20px] md:right-[40px] w-32 md:w-3xl h-auto z-50"
            />

            <aside className="top-[200px] md:top-[100px] right-[40px] md:right-[-250px] z-20 relative w-48 md:w-90" aria-label="Company information">
              <img src={Signboard} alt="" aria-hidden="true" className="w-full h-auto" loading="lazy" />
              <img
                src={logo}
                alt="Salvia Naturals Logo"
                className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 md:w-28 h-auto z-30"
                loading="lazy"
              />

              <address className="absolute top-40 w-64 md:w-80 text-left text-sm md:text-base ml-4 md:ml-8 pt-2 not-italic">
                <p className="text-[#D3D4C6] mb-4 leading-relaxed">
                  {siteInfo?.description || ""}
                </p>
                <div className="space-y-2 text-xs md:text-base">
                  <div className="flex items-center">
                    <FiMapPin className="w-4 h-4 text-white mr-2" aria-hidden="true" />
                    <span>Address: {siteInfo?.address || ""}</span>
                  </div>
                  <div className="flex items-center">
                    <FiPhone className="w-4 h-4 text-white mr-2" aria-hidden="true" />
                    <span>Phone: <a href={`tel:${siteInfo?.phone}`} className="hover:text-green-300">{siteInfo?.phone || ""}</a></span>
                  </div>
                  <div className="flex items-center">
                    <FiMail className="w-4 h-4 text-white mr-2" aria-hidden="true" />
                    <span>Email: <a href={`mailto:${siteInfo?.email}`} className="hover:text-green-300">{siteInfo?.email || ""}</a></span>
                  </div>
                </div>
              </address>
            </aside>

            <img
              src={flower}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute bottom-[-20px] md:bottom-[0px] right-[-20px] md:right-20 w-[200px] md:w-80 h-auto z-100 transform translate-x-1/4"
            />

            <div className="absolute bottom-0 left-0 right-0 h-20 md:h-24 bg-gradient-to-r from-[#8B4513] to-[#654321] flex items-center pl-8 z-5">
              <img
                src={logo}
                alt="Salvia Naturals"
                className="w-10 md:w-12 h-auto mr-2"
                loading="lazy"
              />
              <span className="text-white font-semibold text-sm md:text-base">
                Salvia Naturals
              </span>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 w-full z-[9999]">
            <Footer toggleSidebar={toggleSidebar} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;