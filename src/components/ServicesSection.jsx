import React from "react";
import { GraduationCap, Plane, Settings, ArrowRight } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const ServicesSection = ({ services, lightBg }) => (
  <section
    id="services"
    className={`py-20 ${
      lightBg ? "bg-white" : "bg-slate-900/95 backdrop-blur-md text-white"
    }`}
  >
    <div className="max-w-6xl mx-auto px-4">
      <AnimatedElement
        animation="fadeInUp"
        className={`text-center mb-16 ${lightBg ? "text-[#191929]" : ""}`}
      >
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 ${
            lightBg ? "text-slate-900" : "text-white"
          }`}
        >
          Three Core{" "}
          <span className="animate-motion-gradient bg-clip-text text-transparent">
            Verticals
          </span>
        </h2>
        <p
          className={`text-xl max-w-3xl mx-auto ${
            lightBg ? "text-slate-900 opacity-80" : "text-gray-300"
          }`}
        >
          Comprehensive aviation services across training, operations, and
          technical support
        </p>
      </AnimatedElement>

      <div className="grid md:grid-cols-3 gap-8 p-4">
        {services.map((service, index) => (
          <AnimatedElement
            key={index}
            animation="scaleIn"
            delay={index * 200}
            className="group h-full"
          >
            <div
              onClick={() => {
                if (service.brand === "Dunes Aviation Academy") {
                  window.open("https://dunesaviation.in/", "_blank");
                }
              }}
              className={`h-full rounded-2xl p-8 border transition-all duration-500 transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#D9AC40]/10 flex flex-col cursor-pointer relative z-10 hover:z-20 ${
                lightBg
                  ? "bg-[#191929]/5 border-[#191929]/10"
                  : "bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-[#D9AC40]/50"
              }`}
            >
              <div className="mb-6">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 animate-float hover-glow ${
                    lightBg
                      ? "bg-[#D9AC40]/10"
                      : "bg-gradient-to-r from-[#D9AC40] to-[#FFD700]"
                  }`}
                >
                  <service.icon
                    className={`w-8 h-8 ${
                      lightBg ? "text-[#D9AC40]" : "text-white"
                    } group-hover:rotate-12 transition-transform duration-300`}
                  />
                </div>
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    lightBg ? "text-[#D9AC40]" : "text-white"
                  }`}
                >
                  <span
                    className={`text-[#D9AC40] ${
                      lightBg ? "text-[#D9AC40]" : "text-[#D9AC40]"
                    }`}
                  >
                    {service.title}
                  </span>
                </h3>
                <p
                  className={`text-[#D9AC40] font-semibold text-lg ${
                    lightBg ? "text-[#D9AC40]" : "text-[#D9AC40]"
                  }`}
                >
                  {service.brand}
                </p>
              </div>

              <p
                className={`mb-6 leading-relaxed flex-grow ${
                  lightBg ? "text-slate-900 opacity-80" : "text-gray-300"
                }`}
              >
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div
                      className={`w-2 h-2 bg-[#D9AC40] rounded-full animate-pulse ${
                        lightBg ? "bg-[#D9AC40]" : "bg-[#D9AC40]"
                      }`}
                    ></div>
                    <span
                      className={`${
                        lightBg ? "text-slate-900" : "text-gray-300"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (service.brand === "Dunes Aviation Academy") {
                      window.open("https://dunesaviation.in/", "_blank");
                    }
                  }}
                  className={`text-[#D9AC40] hover:text-[#FFD700] font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-all duration-500 hover:shadow-lg hover:shadow-[#D9AC40]/25 ${
                    lightBg
                      ? "text-[#D9AC40] hover:text-[#FFD700]"
                      : "text-[#D9AC40] hover:text-[#FFD700]"
                  }`}
                >
                  <span>Learn More</span>
                  <ArrowRight
                    className={`w-4 h-4 group-hover:rotate-45 transition-all duration-500 ${
                      lightBg ? "text-[#D9AC40]" : "text-[#D9AC40]"
                    }`}
                  />
                </button>
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
