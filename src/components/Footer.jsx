import React from "react";
import { Plane } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const Footer = () => (
  <footer className="bg-slate-900/95 backdrop-blur-md border-t border-slate-800 py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <AnimatedElement animation="slideInLeft" delay={100}>
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
        </AnimatedElement>

        {[
          {
            title: "Services",
            items: [
              "Pilot Training",
              "Charter Services",
              "MRO Services",
              "CAMO Services",
            ],
          },
          {
            title: "Company",
            items: ["About Us", "Our Fleet", "Careers", "Safety"],
          },
          {
            title: "Contact",
            items: [
              "+1 (555) 123-4567",
              "info@dunesgroup.com",
              "Aviation Hub",
              "International Airport",
            ],
          },
        ].map((section, index) => (
          <AnimatedElement
            key={index}
            animation="fadeInUp"
            delay={200 + index * 100}
          >
            <h4 className="text-white font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-blue-400 transition-colors duration-300 cursor-pointer hover-scale"
                >
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedElement>
        ))}
      </div>

      <AnimatedElement animation="fadeInUp" delay={500}>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 The Dunes Group. All rights reserved.
          </p>
        </div>
      </AnimatedElement>
    </div>
  </footer>
);

export default Footer;
