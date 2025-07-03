import React from "react";
import { Plane } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const AboutSection = () => (
  <section id="about" className="py-20 bg-slate-900/95 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4">
      <AnimatedElement animation="fadeInUp" className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Unified{" "}
          <span className="animate-motion-gradient bg-clip-text text-transparent">
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
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-[#D9AC40]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#D9AC40]/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Our <span className="text-[#D9AC40]">Vision</span>
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
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-[#D9AC40]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#D9AC40]/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Our <span className="text-[#D9AC40]">Mission</span>
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#D9AC40] to-[#FFD700] rounded-full opacity-20 animate-pulse"></div>
              <div
                className="absolute inset-8 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] rounded-full opacity-30 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute inset-16 bg-gradient-to-r from-[#D9AC40] to-[#FFD700] rounded-full opacity-40 animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Plane className="w-32 h-32 text-[#D9AC40] transform rotate-45 animate-spinSlow" />
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  </section>
);

export default AboutSection;
