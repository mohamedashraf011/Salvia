import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from 'react';
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";
import PageTransition from "./Components/PageTransition";

// Lazy load pages
const About = lazy(() => import("./Pages/About-Us/About"));
const Mission = lazy(() => import("./Pages/About-Us/Mission"));
const Community = lazy(() => import("./Pages/About-Us/Community"));
const Reputation = lazy(() => import("./Pages/About-Us/Reputation"));
const Vision = lazy(() => import("./Pages/About-Us/Vision"));
const Product = lazy(() => import("./Pages/Product/Products"));
const ProductDetails = lazy(() => import("./Pages/Product/ProductDetails"));
const OurQuality = lazy(() => import("./Pages/Our-Quality-Commitment/OurQuality"));
const RnDPage = lazy(() => import("./Pages/R&D/RnDPage"));
const Innovation = lazy(() => import("./Pages/R&D/Innovation"));
const ProductDevelopment = lazy(() => import("./Pages/R&D/ProductDevelopment"));
const Quality = lazy(() => import("./Pages/R&D/Quality"));
const Packaging = lazy(() => import("./Pages/R&D/Packaging"));
const Commitment = lazy(() => import("./Pages/R&D/Commitment"));
const Gallary = lazy(() => import("./Pages/Gallary/Gallary"));
const Events = lazy(() => import("./Pages/Events/Events"));
const EventDetail = lazy(() => import("./Pages/Events/EventDetail"));
const EventInformation = lazy(() => import("./Pages/Events/EventInformation"));
const Contact = lazy(() => import("./Pages/Contact-US/Contact"));
const Certificates = lazy(() => import("./Pages/Certificates/Certificates"));
const Page9 = lazy(() => import("./Pages/Page9/Page9"));
const Page10 = lazy(() => import("./Pages/Page10/Page10"));

function AppRoutes() {
  const location = useLocation();

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", backgroundColor: "transparent" }}>
      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
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
            path="/product-details/:id"
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
            path="/event-information/:id"
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
        </Suspense>
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
