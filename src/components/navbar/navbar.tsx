"use client";

import React, { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work"];
      for (let sectionId of sections) {
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
    <nav className="fixed top-0 w-full p-4 bg-black text-white z-30">
      <div className="flex justify-between items-center">
      <h2 className="rafnas tracking-wider">Rafnas</h2>
      <div className="space-x-10">
          {["home", "about", "work"].map((sectionId) => (
            <h3
              key={sectionId}
              className={` inline cursor-pointer hover:text-gray-400 text-balance relative tracking-wider italic ${
                activeSection === sectionId 
              }`}
              onClick={() => scrollToSection(sectionId)}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
              {activeSection === sectionId && (
 <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 border-t-2 border-red-700"></span>              )}
            </h3>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
