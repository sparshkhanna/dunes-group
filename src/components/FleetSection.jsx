import React from "react";
import AnimatedElement from "./AnimatedElement";

const FleetSection = ({ fleet }) => {
  // Split fleet into charter and training aircraft
  const charterAircraft = fleet.filter(
    (aircraft) =>
      aircraft.name.includes("Cessna 208B") ||
      aircraft.name.includes("Citation") ||
      aircraft.name.includes("Challenger")
  );

  // For now, we'll create placeholder training aircraft
  const trainingAircraft = [
    {
      name: "Piper PA-28",
      type: "Training Aircraft",
      image: "✈️",
      capacity: "4 passengers",
      range: "700 nm",
    },
    {
      name: "Cessna 172",
      type: "Training Aircraft",
      image: "✈️",
      capacity: "4 passengers",
      range: "640 nm",
    },
    {
      name: "Diamond DA40",
      type: "Training Aircraft",
      image: "✈️",
      capacity: "4 passengers",
      range: "720 nm",
    },
  ];

  return (
    <section
      id="fleet"
      className="py-20 bg-slate-900/95 backdrop-blur-md relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#D9AC40] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
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

        {/* Dunes Air - Charter Services */}
        <AnimatedElement animation="fadeInUp" className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            <span className="text-[#D9AC40]">Dunes Air</span> - Charter Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-16 py-4">
            {charterAircraft.map((aircraft, index) => (
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
        </AnimatedElement>

        {/* Dunes Aviation Academy - Trainer Aircraft */}
        <AnimatedElement animation="fadeInUp" delay={600}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            <span className="text-[#D9AC40]">Dunes Aviation Academy</span> -
            Trainer Aircraft
          </h3>
          <div className="grid md:grid-cols-3 gap-8 py-4">
            {trainingAircraft.map((aircraft, index) => (
              <AnimatedElement
                key={index}
                animation="scaleIn"
                delay={800 + index * 200}
                className="group"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-[#D9AC40]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#D9AC40]/10">
                  <div className="text-center mb-6">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-500 animate-float">
                      {aircraft.name === "Piper PA-28" ? (
                        <img
                          src="/piper.jpeg"
                          alt="Piper PA-28"
                          className="w-full h-48 object-cover rounded-lg shadow-lg"
                        />
                      ) : aircraft.name === "Cessna 172" ? (
                        <img
                          src="/cessna.jpg"
                          alt="Cessna 172"
                          className="w-full h-48 object-cover rounded-lg shadow-lg"
                        />
                      ) : aircraft.name === "Diamond DA40" ? (
                        <img
                          src="/diamond.jpg"
                          alt="Diamond DA40"
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
                      Learn More
                    </button>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default FleetSection;
