import React from "react";
import { Plane } from "lucide-react";

const Footer = () => (
  <footer className="bg-slate-900/95 backdrop-blur-md border-t border-slate-800 py-12 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        {/* First column - Logo and description */}
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

        {/* Services column */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer hover-scale">
              Pilot Training
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer hover-scale">
              Charter Services
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer hover-scale">
              MRO Services
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer hover-scale">
              CAMO Services
            </li>
          </ul>
        </div>

        {/* Company column */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer hover-scale">
              About Us
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer hover-scale">
              Our Fleet
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer hover-scale">
              Careers
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer hover-scale">
              Safety
            </li>
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer hover-scale">
              +1 (555) 123-4567
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer hover-scale">
              info@dunesgroup.com
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer hover-scale">
              Aviation Hub
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer hover-scale">
              International Airport
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-8 pt-8 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 The Dunes Group. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
