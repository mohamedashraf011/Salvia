import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";
import About from "./Pages/About Us/About";
import Mission from "./Pages/About Us/Mission";
import Footer from "./Components/Footer";
import Community from "./Pages/About Us/Community";
import Reputation from "./Pages/About Us/Reputation";
import Vision from "./Pages/About Us/Vision";
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
import PageTransition from "./Components/PageTransition";

function AppRoutes() {
  const location = useLocation();

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", backgroundColor: "transparent" }}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition pageKey={location.pathname}>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition pageKey={location.pathname}>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/mission"
          element={
            <PageTransition pageKey={location.pathname}>
              <Mission />
            </PageTransition>
          }
        />
        <Route
          path="/community"
          element={
            <PageTransition pageKey={location.pathname}>
              <Community />
            </PageTransition>
          }
        />
        <Route
          path="/reputation"
          element={
            <PageTransition pageKey={location.pathname}>
              <Reputation />
            </PageTransition>
          }
        />
        <Route
          path="/vision"
          element={
            <PageTransition pageKey={location.pathname}>
              <Vision />
            </PageTransition>
          }
        />
        <Route
          path="/product"
          element={
            <PageTransition pageKey={location.pathname}>
              <Product />
            </PageTransition>
          }
        />
        <Route
          path="/product-details/:title"
          element={
            <PageTransition pageKey={location.pathname}>
              <ProductDetails />
            </PageTransition>
          }
        />
        <Route
          path="/our-quality"
          element={
            <PageTransition pageKey={location.pathname}>
              <OurQuality />
            </PageTransition>
          }
        />
        <Route
          path="/r-and-d"
          element={
            <PageTransition pageKey={location.pathname}>
              <RnDPage />
            </PageTransition>
          }
        />
        <Route
          path="/innovation"
          element={
            <PageTransition pageKey={location.pathname}>
              <Innovation />
            </PageTransition>
          }
        />
        <Route
          path="/product-development"
          element={
            <PageTransition pageKey={location.pathname}>
              <ProductDevelopment />
            </PageTransition>
          }
        />
        <Route
          path="/quality"
          element={
            <PageTransition pageKey={location.pathname}>
              <Quality />
            </PageTransition>
          }
        />
        <Route
          path="/packaging"
          element={
            <PageTransition pageKey={location.pathname}>
              <Packaging />
            </PageTransition>
          }
        />
        <Route
          path="/commitment"
          element={
            <PageTransition pageKey={location.pathname}>
              <Commitment />
            </PageTransition>
          }
        />
        <Route
          path="/gallary"
          element={
            <PageTransition pageKey={location.pathname}>
              <Gallary />
            </PageTransition>
          }
        />
        <Route
          path="/events"
          element={
            <PageTransition pageKey={location.pathname}>
              <Events />
            </PageTransition>
          }
        />
        <Route
          path="/event/:id"
          element={
            <PageTransition pageKey={location.pathname}>
              <EventDetail />
            </PageTransition>
          }
        />
        <Route
          path="/event-information"
          element={
            <PageTransition pageKey={location.pathname}>
              <EventInformation />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition pageKey={location.pathname}>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/certificates"
          element={
            <PageTransition pageKey={location.pathname}>
              <Certificates />
            </PageTransition>
          }
        />
        <Route
          path="/page9"
          element={
            <PageTransition pageKey={location.pathname}>
              <Page9 />
            </PageTransition>
          }
        />
        <Route
          path="/page10"
          element={
            <PageTransition pageKey={location.pathname}>
              <Page10 />
            </PageTransition>
          }
        />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
