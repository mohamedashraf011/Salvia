import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import SEOHead from "../../Components/SEOHead";
import tree from "../../assets/images/tree.png";
import { DOMAIN } from "../../utils/Domain";
import { getBreadcrumbSchema } from "../../utils/schemas";

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

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallary" }
  ]);

  // ImageGallery schema for rich results
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Salvia Naturals Photo Gallery",
    "description": "Explore our state-of-the-art facilities, farm sources, and premium dried herb products.",
    "url": "https://salvia.com/gallary",
    "numberOfItems": images.length
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, gallerySchema]
  };

  return (
    <>
      <SEOHead
        title="Photo Gallery | Salvia Naturals Facilities & Products"
        description="Explore our state-of-the-art facilities, farm sources, and premium dried herb products in action. See where your quality botanicals come from."
        keywords="herb production gallery, dried herbs facility, botanical farm Egypt, herbal products photos, Salvia Naturals images"
        canonicalUrl="/gallary"
        schema={combinedSchema}
      />
      <main>
        <section className="relative flex flex-col h-screen bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] text-white w-full overflow-hidden" aria-labelledby="gallery-heading">
          <img
            src={tree}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute top-0 right-0 w-40 md:w-55 opacity-90"
          />
          
          <div className="flex flex-col flex-1 px-4 gap-6 overflow-hidden">
            <div className="max-w-6xl ml-45">
              <h1 id="gallery-heading" className="text-5xl font-bold mb-4 mt-4 text-left flex-shrink-0">
                Gallery
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl flex-1 overflow-y-auto pb-4 mx-auto scrollbar-hide" role="list" aria-label="Photo gallery">
              {loading ? (
                <p className="text-center col-span-full" role="status" aria-live="polite">Loading images...</p>
              ) : images.length > 0 ? (
                images.map((img, index) => (
                  <figure key={img._id || index} role="listitem" className="relative h-fit bg-white rounded-lg shadow-lg">
                    <img
                      src={img.image}
                      alt={img.caption || `Salvia Naturals facility and products - Image ${index + 1}`}
                      loading="lazy"
                      className="w-full h-auto rounded-lg"
                    />
                    {img.caption && (
                      <figcaption className="sr-only">{img.caption}</figcaption>
                    )}
                  </figure>
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
      </main>
    </>
  );
}

export default Gallery;