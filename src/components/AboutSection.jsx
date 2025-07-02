import React from "react";
import { Plane } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const AboutSection = () => (
  <section id="about" className="py-20 bg-dunes-gradient">
    <div className="max-w-7xl mx-auto px-4">
      <AnimatedElement animation="fadeInUp" className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Unified{" "}
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Aviation Ecosystem
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          The Dunes Group represents a comprehensive approach to aviation
          services, integrating training, operations, and technical support
          under one unified platform.
        </p>
      </AnimatedElement>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <AnimatedElement animation="slideInLeft" delay={200}>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover-lift hover-glow">
              <h3 className="text-2xl font-bold text-white mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
                  Vision
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To create a seamless aviation ecosystem where training
                excellence, operational efficiency, and technical expertise
                converge to deliver unparalleled service in the aviation
                industry.
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slideInLeft" delay={400}>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover-lift hover-glow">
              <h3 className="text-2xl font-bold text-white mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
                  Mission
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Providing world-class aviation services through innovation,
                safety, and commitment to excellence across all our verticals.
              </p>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement animation="slideInRight" delay={300}>
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full opacity-20 animate-pulse"></div>
              <div
                className="absolute inset-8 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full opacity-30 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute inset-16 bg-gradient-to-r from-blue-700 to-sky-600 rounded-full opacity-40 animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Plane className="w-32 h-32 text-blue-400 transform rotate-45 animate-spinSlow" />
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  </section>
);

export default AboutSection;
