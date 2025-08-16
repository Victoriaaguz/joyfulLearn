// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Layout
import Navbar from "./pages/Navbar.jsx";
import Footer from "./pages/Footer.jsx";

// Pages (make sure the file names match exactly)
import HeroPage from "./pages/HeroPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Teaching from "./pages/Teaching.jsx";
//import Programs from "./Programs.jsx";
//import Inrichment from "./Inrichment.jsx"; // keep this spelling if your file is named that
//import ContactUs from "./ContactUs.jsx";

import "./App.css";

// Optional: scroll to top on route change
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter /* basename="/"  <- set this if deploying under a subpath */>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/teaching" element={<Teaching />} />
        {/* 404 fallback */}
        <Route path="*" element={<div style={{ padding: "2rem" }}>404 Not Found</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
