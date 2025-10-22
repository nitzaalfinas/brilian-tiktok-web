import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import ContactUs from "./components/ContactUs";
import './App.css';

const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        {/* Hero Section */}
        <div style={styles.heroSection}>
          <div style={styles.heroOverlay}></div>
          <h1 style={styles.heroText}>COMMUNICATION<br/>in the Age of<br/>DECENTRALIZATION</h1>
        </div>

        {/* Navigation */}
        <nav style={styles.nav}>
          <Link to="/privacy-policy" style={styles.navLink}>Privacy Policy</Link>
          <Link to="/terms-of-service" style={styles.navLink}>Terms of Service</Link>
          <Link to="/contact-us" style={styles.navLink}>Contact Us</Link>
        </nav>

        {/* Routes */}
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const styles = {
  heroSection: {
    position: "relative",
    height: "50vh",
    backgroundImage: "url('/hero_image_future_city.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.45)",
    zIndex: 1,
  },
  heroText: {
    position: "relative",
    zIndex: 2,
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    letterSpacing: "1px",
    textShadow: "0 4px 24px rgba(0,0,0,0.9), 0 1px 2px rgba(0,0,0,0.7)",
    padding: "0 20px",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    padding: "14px 0",
    background: "rgba(255,255,255,0.95)",
    borderBottom: "1px solid #e0e0e0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    position: "sticky",
    top: 0,
    zIndex: 10,
    backdropFilter: "blur(4px)",
  },
  navLink: {
    padding: "8px 18px",
    borderRadius: "6px",
    textDecoration: "none",
    color: "#000000",
    fontWeight: "bold",
    fontSize: "1.08rem",
    transition: "background 0.2s, color 0.2s",
    background: "transparent",
  },
  content: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
};

export default App;
