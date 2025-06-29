import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4">
      <AnimatedElement animation="fadeInUp" className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Take{" "}
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Flight?
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Contact us today to learn more about our aviation services
        </p>
      </AnimatedElement>

      <div className="grid md:grid-cols-2 gap-12">
        <AnimatedElement animation="slideInLeft" className="space-y-8">
          {[
            {
              icon: MapPin,
              title: "Location",
              content: "Aviation Hub, International Airport",
            },
            { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
            { icon: Mail, title: "Email", content: "info@dunesgroup.com" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 hover-scale hover-glow"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center animate-float hover-glow">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.content}</p>
              </div>
            </div>
          ))}
        </AnimatedElement>

        <AnimatedElement animation="slideInRight" delay={200}>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover-glow">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
                />
              </div>

              <div>
                <select className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400">
                  <option value="">Select Service</option>
                  <option value="training">Pilot Training</option>
                  <option value="charter">Charter Services</option>
                  <option value="maintenance">Maintenance & MRO</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
                ></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-pulse hover-lift hover-glow">
                Send Message
              </button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  </section>
);

export default ContactSection;
