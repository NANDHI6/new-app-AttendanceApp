import React from "react";
import Header from "./Container/header/header";
import Footer from "./Container/footer";
import Navbar from "./Container/navbar/navbar";
import "./lpage.css";

export default function LandingPage() {
  return (
    <div className="grid-container">
      <div className="header">
        <Header />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <h1>content</h1>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
