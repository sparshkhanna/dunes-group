import React, { useEffect, useState } from "react";
import { Plane, ChevronDown } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Semi-transparent Overlay for readability */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: "rgba(25, 25, 41, 0.6)" }}
      ></div>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-400 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="relative z-40 text-center max-w-4xl mx-auto px-4">
        <AnimatedElement animation="fadeInUp" delay={200}>
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building a Seamless
              <span className="bg-gradient-to-r from-[#D9AC40] to-[#FFD700] bg-clip-text text-transparent animate-gradient">
                {" "}
                Aviation Ecosystem
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Excellence Across Pilot Training, Aircraft Operations & Technical
              Support
            </p>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="fadeInUp" delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25 hover-lift hover-glow"
            >
              Explore Our Services
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover-lift"
            >
              Get in Touch
            </button>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="fadeInUp" delay={600}>
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-blue-400 mx-auto animate-pulse" />
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default HeroSection;
