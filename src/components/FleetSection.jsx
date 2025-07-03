import React from "react";
import AnimatedElement from "./AnimatedElement";

const FleetSection = ({ fleet }) => (
  <section id="fleet" className="py-20 bg-slate-900/95 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4">
      <AnimatedElement animation="fadeInUp" className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our{" "}
          <span className="animate-motion-gradient bg-clip-text text-transparent">
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
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-[#D9AC40]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#D9AC40]/10">
              <div className="text-center mb-6">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-500 animate-float">
                  {aircraft.name === "Cessna 208B Grand Caravan" ? (
                    <img
                      src="/grand.jpg"
                      alt="Cessna 208B Grand Caravan"
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                  ) : aircraft.name.includes("Citation") ? (
                    <img
                      src="/citation.webp"
                      alt={aircraft.name}
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                  ) : aircraft.name.includes("Challenger") ? (
                    <img
                      src="/challenger.webp"
                      alt={aircraft.name}
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                  ) : (
                    <div className="text-6xl">{aircraft.image}</div>
                  )}
                </div>
                <div className="text-center mb-2">
                  <div className="text-[#D9AC40] font-bold text-lg md:text-xl mb-1">
                    {aircraft.name}
                  </div>
                  <div className="text-[#D9AC40] font-semibold text-base md:text-lg">
                    {aircraft.type}
                  </div>
                </div>
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
                <button className="w-full bg-[#D9AC40] hover:bg-[#FFD700] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#D9AC40]/25 animate-pulse">
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
