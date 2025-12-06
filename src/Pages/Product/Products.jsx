import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaSeedling } from "react-icons/fa";
import { GiHerbsBundle } from "react-icons/gi";
import { PiFlowerTulipBold } from "react-icons/pi";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import SEOHead from "../../Components/SEOHead";
import ProductCard from "../../Components/ProductCard";
import leavesRight from "../../assets/images/tree.png";
import { DOMAIN } from "../../utils/Domain";
import { getBreadcrumbSchema } from "../../utils/schemas";

function Products() {
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${DOMAIN}/api/products`);
        const data = await response.json();
        if (data.products) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.shortDescription && p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory =
      filterCategory === "All" || p.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCardClick = (product) => {
    navigate(`/product-details/${product._id}`);
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/product" }
  ]);

  // Product list schema for rich results
  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Salvia Naturals Products",
    "description": "Premium dried herbs, seeds, dried leaves, and dried flowers for wholesale export",
    "numberOfItems": products.length,
    "itemListElement": products.slice(0, 10).map((p, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": p.name,
        "description": p.shortDescription,
        "image": p.image,
        "category": p.category,
        "brand": {
          "@type": "Brand",
          "name": "Salvia Naturals"
        }
      }
    }))
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, productListSchema]
  };

  return (
    <>
      <SEOHead
        title="Premium Dried Herbs & Botanicals | Seeds, Leaves, Flowers - Salvia Naturals"
        description="Browse our collection of certified dried herbs: seeds, dried leaves, and dried flowers. Wholesale quality botanical products from Egypt's finest farms."
        keywords="dried herbs products, botanical products, dried flowers wholesale, dried leaves supplier, seeds export, organic herbs Egypt, bulk herbs supplier"
        canonicalUrl="/product"
        schema={combinedSchema}
      />
      <main className="relative min-h-screen bg-gradient-to-r from-[#4E6347] to-[#9F9F9D] flex flex-col overflow-hidden">
        <img
          src={leavesRight}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute top-0 right-0 w-44 md:w-64 opacity-90 pointer-events-none select-none"
        />

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-8 relative z-10 flex flex-col flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md mb-8">
            Our Products
          </h1>

          <div className="flex flex-wrap justify-between items-center gap-6 mb-10">
            <div className="flex items-center bg-white/10 border border-white/60 rounded-full px-5 py-2 w-100 shadow-md backdrop-blur-sm">
              <FaSearch className="text-white/70" aria-hidden="true" />
              <label htmlFor="product-search" className="sr-only">Search products</label>
              <input
                id="product-search"
                type="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="ml-3 flex-1 bg-transparent outline-none text-white placeholder-white/70"
                aria-label="Search products"
              />
            </div>

            <nav className="flex flex-wrap items-center gap-3" aria-label="Product category filters">
              <button
                onClick={() => setFilterCategory("All")}
                aria-pressed={filterCategory === "All"}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-white ${
                  filterCategory === "All"
                    ? "bg-white text-[#4E6347]"
                    : "bg-[#4E6347] text-white hover:bg-white hover:text-[#4E6347]"
                }`}
              >
                All Products
              </button>

              <button
                onClick={() => setFilterCategory("Seeds")}
                aria-pressed={filterCategory === "Seeds"}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-white ${
                  filterCategory === "Seeds"
                    ? "bg-white text-[#4E6347]"
                    : "bg-[#4E6347] text-white hover:bg-white hover:text-[#4E6347]"
                }`}
              >
                <FaSeedling className="text-xs" aria-hidden="true" />
                Seeds
              </button>

              <button
                onClick={() => setFilterCategory("Dried Flowers")}
                aria-pressed={filterCategory === "Dried Flowers"}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-white ${
                  filterCategory === "Dried Flowers"
                    ? "bg-white text-[#4E6347]"
                    : "bg-[#4E6347] text-white hover:bg-white hover:text-[#4E6347]"
                }`}
              >
                <PiFlowerTulipBold aria-hidden="true" />
                Dried Flowers
              </button>

              <button
                onClick={() => setFilterCategory("Dried Leaves")}
                aria-pressed={filterCategory === "Dried Leaves"}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-white ${
                  filterCategory === "Dried Leaves"
                    ? "bg-white text-[#4E6347]"
                    : "bg-[#4E6347] text-white hover:bg-white hover:text-[#4E6347]"
                }`}
              >
                <GiHerbsBundle aria-hidden="true" />
                Dried Leaves
              </button>
            </nav>
          </div>

          <section className="flex-1" aria-label="Product listings">
            <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8" role="list">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((p, index) => (
                    <article
                      key={p._id || index}
                      role="listitem"
                      className="cursor-pointer"
                      onClick={() => handleCardClick(p)}
                    >
                      <ProductCard
                        image={p.image}
                        title={p.name}
                        subtitle={p.shortDescription}
                      />
                    </article>
                  ))
                ) : (
                  <p className="text-white text-center col-span-full opacity-70">
                    No products found matching your search.
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>

        <Footer toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      </main>
    </>
  );
}

export default Products;
