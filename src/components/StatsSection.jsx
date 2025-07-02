import React, { useState, useEffect } from "react";
import { Award, GraduationCap, Plane, Shield } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const StatsSection = ({ stats, lightBg }) => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const animateCounts = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts(
          stats.map((stat, index) => {
            const targetValue = parseInt(stat.number.replace(/[^0-9]/g, ""));
            const currentValue = Math.floor(targetValue * progress);
            return stat.number.includes("%")
              ? `${currentValue}%`
              : `${currentValue}+`;
          })
        );

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounts(stats.map((stat) => stat.number));
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    // Start counting animation when component mounts
    const timer = setTimeout(animateCounts, 500);
    return () => clearTimeout(timer);
  }, [stats]);

  return (
    <section
      id="stats"
      className={`py-20 ${
        lightBg ? "bg-white text-[#191929]" : "bg-dunes-gradient text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedElement
          animation="stagger"
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group hover-scale hover-glow ${
                lightBg ? "text-[#191929]" : ""
              }`}
            >
              <div className="mb-4 flex justify-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 animate-float hover-glow ${
                    lightBg
                      ? "bg-[#191929]/10"
                      : "bg-gradient-to-r from-blue-500 to-sky-400"
                  }`}
                >
                  <stat.icon
                    className={`w-8 h-8 ${
                      lightBg ? "text-[#191929]" : "text-white"
                    } group-hover:rotate-12 transition-transform duration-300`}
                  />
                </div>
              </div>
              <div
                className={`text-3xl md:text-4xl font-bold mb-2 animate-countUp ${
                  lightBg ? "text-[#191929]" : "text-white"
                }`}
              >
                {counts[index]}
              </div>
              <div
                className={`font-medium ${
                  lightBg ? "text-[#191929]" : "text-gray-300"
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </AnimatedElement>
      </div>
    </section>
  );
};

export default StatsSection;
