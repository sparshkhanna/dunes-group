import React from "react";
import { Plane, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Aviation", path: "/aviation" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

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
          <div className="flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105 hover-glow">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-sky-400 rounded-lg flex items-center justify-center animate-pulse hover-glow">
              <Plane className="w-6 h-6 text-white transform transition-transform duration-300 hover:rotate-12" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">The Dunes Group</h1>
              <p className="text-xs text-gray-300">Aviation Ecosystem</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-all duration-300 font-medium hover-scale ${
                  location.pathname === item.path
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </Link>
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
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 transition-all duration-300 hover-scale ${
                  location.pathname === item.path
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
