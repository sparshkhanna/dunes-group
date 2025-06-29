import React from "react";
import { GraduationCap, Plane, Settings, ArrowRight } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const ServicesSection = ({ services }) => (
  <section id="services" className="py-20 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4">
      <AnimatedElement animation="fadeInUp" className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Three Core{" "}
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Verticals
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive aviation services across training, operations, and
          technical support
        </p>
      </AnimatedElement>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <AnimatedElement
            key={index}
            animation="scaleIn"
            delay={index * 200}
            className="group"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 hover-lift hover-glow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 animate-float hover-glow">
                  <service.icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
                    {service.title}
                  </span>
                </h3>
                <p className="text-blue-400 font-semibold text-lg">
                  {service.brand}
                </p>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300 hover-glow">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
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
