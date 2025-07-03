import React from "react";
import { Plane, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = [
        "home",
        "stats",
        "about",
        "services",
        "fleet",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Stats", id: "stats" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Fleet", id: "fleet" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrollY > 50
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105 ">
            <div className="relative group">
              <img
                src="/dunes-group-logo.png"
                alt="Dunes Group Logo"
                className={`h-10 w-auto object-contain transition-all duration-300 ${
                  isLogoHovered || activeSection ? "logo-gradient-overlay" : ""
                }`}
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-500 font-medium transform hover:scale-105 ${
                  activeSection === item.id ? "text-[#D9AC40]" : "text-white"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white p-2 transition-all duration-300 hover:scale-110 hover-glow"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md animate-slideDown">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 transition-all duration-500 transform hover:scale-105 ${
                  activeSection === item.id
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
