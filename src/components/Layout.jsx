import React, { useState, useEffect } from "react";
import { Plane, Menu, X, MapPin, Phone, Mail } from "lucide-react";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Navigation = () => (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-slate-900/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <a
              href="/"
              className="transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/dunes-group-logo.png"
                alt="Dunes Group Logo"
                className="h-14 w-auto object-contain"
              />
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Services", "Fleet", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-gold-metallic transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
          <div className="px-4 py-2 space-y-2">
            {["Home", "About", "Services", "Fleet", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                className="block py-2 text-gray-300 hover:text-gold-metallic transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const Footer = () => (
    <footer className="bg-dunes-gradient border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/dunes-group-logo.png"
                alt="Dunes Group Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Building excellence in aviation through integrated training,
              operations, and technical services.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Pilot Training</li>
              <li>Charter Services</li>
              <li>MRO Services</li>
              <li>CAMO Services</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About Us</li>
              <li>Our Fleet</li>
              <li>Careers</li>
              <li>Safety</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>+91 96101 60999</li>
              <li>group@dunesaviation.in</li>
              <li>703, The Umed Heights</li>
              <li>Jodhpur, Rajasthan, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 The Dunes Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-dunes-gradient text-white">
      <Navigation />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
