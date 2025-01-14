"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); 
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work"];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= 150 && bottom > 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black text-white z-30">
      <div className="flex justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <h2 className="text-xl md:text-2xl font-bold tracking-wider italic">Rafnas</h2>

        {/* Large Screen Navigation */}
        <div className="hidden md:flex space-x-10">
          {["home", "about", "work"].map((sectionId) => (
            <h3
              key={sectionId}
              className={`cursor-pointer hover:text-gray-400 relative tracking-wider italic`}
              onClick={() => scrollToSection(sectionId)}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
              {activeSection === sectionId && (
                <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 border-t-2 border-red-700"></span>
              )}
            </h3>
          ))}
        </div>

        {/* Small Screen Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Small Screen Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white shadow-lg">
          {["home", "about", "work"].map((sectionId) => (
            <h3
              key={sectionId}
              className={`block px-4 py-3 text-lg hover:bg-gray-800`}
              onClick={() => scrollToSection(sectionId)}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </h3>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
