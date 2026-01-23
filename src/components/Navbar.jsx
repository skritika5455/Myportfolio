import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <div className="logo">
           KS Kritika<span>Singh</span>
        </div>

        {/* NAV LINKS */}
        <nav className={`nav ${menuOpen ? "show" : ""}`}>
          <a href="#entry">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#Certification">Certifications</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* HAMBURGER */}
        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}
