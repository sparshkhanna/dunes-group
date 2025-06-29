import React, { useEffect, useState } from "react";
import { Plane, ChevronDown } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
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

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Flying Planes Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-400 animate-fly"
            style={{
              top: `${20 + i * 30}%`,
              left: "-10%",
              animationDelay: `${i * 2}s`,
              animationDuration: "8s",
            }}
          >
            <Plane className="w-8 h-8 transform rotate-45" />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <AnimatedElement animation="fadeInUp" delay={200}>
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building a Seamless
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent animate-gradient">
                {" "}
                Aviation Ecosystem
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Excellence Across Pilot Training, Aircraft Operations & Technical
              Support
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fadeInUp" delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25 hover-lift hover-glow">
              Explore Our Services
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover-lift">
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
