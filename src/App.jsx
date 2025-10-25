import "./App.css";
// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";
import About from "./Pages/About Us/About";
import Mission from "./Pages/About Us/Mission";
import Footer from "./Components/Footer";
import Community from "./Pages/About Us/Community";
import Product from "./Pages/Product/Products";
import ProductDetails from "./Pages/Product/ProductDetails";
import OurQuality from "./Pages/Our Quality Commitment/OurQuality";
import RnDPage from "./Pages/R&D/RnDPage";
import Innovation from "./Pages/R&D/Innovation";
import ProductDevelopment from "./Pages/R&D/ProductDevelopment";
import Quality from "./Pages/R&D/Quality";
import Packaging from "./Pages/R&D/Packaging";
import Commitment from "./Pages/R&D/Commitment";
import Gallary from "./Pages/Gallary/Gallary";
import Events from "./Pages/Events/Events";
import EventDetail from "./Pages/Events/EventDetail";
import EventInformation from "./Pages/Events/EventInformation";
import Contact from "./Pages/Contact US/Contact";
import Certificates from "./Pages/Certificates/Certificates";
import Page9 from "./Pages/Page9/Page9";
import Page10 from "./Pages/Page10/Page10";



function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/community" element={<Community />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-details/:title" element={<ProductDetails />} />
          <Route path="/our-quality" element={<OurQuality />} />
          <Route path="/r-and-d" element={<RnDPage />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/product-development" element={<ProductDevelopment />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/packaging" element={<Packaging />} />
          <Route path="/commitment" element={<Commitment />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/event-information" element={<EventInformation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/page9" element={<Page9 />} />
          <Route path="/page10" element={<Page10 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
