import React from "react";
import AnimatedElement from "./AnimatedElement";

const FleetSection = ({ fleet }) => (
  <section id="fleet" className="py-20 bg-dunes-gradient">
    <div className="max-w-7xl mx-auto px-4">
      <AnimatedElement animation="fadeInUp" className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Fleet
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Modern, well-maintained aircraft for all your aviation needs
        </p>
      </AnimatedElement>

      <div className="grid md:grid-cols-3 gap-8">
        {fleet.map((aircraft, index) => (
          <AnimatedElement
            key={index}
            animation="scaleIn"
            delay={index * 200}
            className="group"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 hover-lift hover-glow">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500 animate-float hover-glow">
                  {aircraft.image}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
                    {aircraft.name}
                  </span>
                </h3>
                <p className="text-blue-400 font-semibold">{aircraft.type}</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="text-gray-300">Capacity</span>
                  <span className="text-white font-semibold">
                    {aircraft.capacity}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="text-gray-300">Range</span>
                  <span className="text-white font-semibold">
                    {aircraft.range}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-pulse hover-lift hover-glow">
                  Charter Now
                </button>
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </div>
  </section>
);

export default FleetSection;
