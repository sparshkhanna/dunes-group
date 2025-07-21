import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import AnimatedElement from "./AnimatedElement";
import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const serviceOptions = [
  { value: "", label: "Select Service" },
  { value: "training", label: "Pilot Training" },
  { value: "charter", label: "Charter Services" },
  { value: "maintenance", label: "Maintenance & MRO" },
  { value: "other", label: "Other" },
];

const ContactSection = ({ lightBg, selectedAircraft }) => {
  const [selectedService, setSelectedService] = useState(serviceOptions[0]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    aircraftInfo: "",
  });

  // Auto-fill form when aircraft is selected
  useEffect(() => {
    if (selectedAircraft) {
      const isTraining = selectedAircraft.type === "training";
      const serviceType = isTraining ? "training" : "charter";
      setSelectedService(
        serviceOptions.find((option) => option.value === serviceType) ||
          serviceOptions[0]
      );

      setFormData((prev) => ({
        ...prev,
        aircraftInfo: `${selectedAircraft.name} - ${selectedAircraft.type}`,
        message: isTraining
          ? `I'm interested in pilot training using the ${selectedAircraft.name} (${selectedAircraft.type}).\n\nAircraft Details:\n- Capacity: ${selectedAircraft.capacity}\n- Range: ${selectedAircraft.range}\n\nPlease provide more information about training programs, schedules, and pricing for this aircraft.`
          : `I'm interested in chartering the ${selectedAircraft.name} (${selectedAircraft.type}).\n\nAircraft Details:\n- Capacity: ${selectedAircraft.capacity}\n- Range: ${selectedAircraft.range}\n\nPlease provide more information about availability and pricing.`,
      }));
    }
  }, [selectedAircraft]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section
      id="contact"
      className={`py-20 ${
        lightBg
          ? "bg-white text-slate-900"
          : "bg-slate-900/95 backdrop-blur-md text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedElement
          animation="fadeInUp"
          className={`text-center mb-16 ${lightBg ? "text-slate-900" : ""}`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              lightBg ? "text-slate-900" : "text-white"
            }`}
          >
            Ready to Take{" "}
            <span className="animate-motion-gradient bg-clip-text text-transparent">
              Flight?
            </span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              lightBg ? "text-slate-900 opacity-80" : "text-gray-300"
            }`}
          >
            Contact us today to learn more about our aviation services
          </p>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedElement animation="slideInLeft" className="space-y-8">
            {[
              {
                icon: MapPin,
                title: "Location",
                content:
                  "703, The Umed Heights, Cazri Road Light Industrial Area, Milkman Colony Jodhpur, Rajasthan, India- 342003",
              },
              {
                icon: MapPin,
                title: "Flying Base",
                content:
                  "Ahmedabad Airport | Bhavnagar Airport | Bhilwara Airstrip",
              },
              { icon: Phone, title: "Phone", content: "+91 96101 60999" },
              { icon: Mail, title: "Email", content: "info@dunesaviation.in" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 ${
                  lightBg ? "text-slate-900" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center animate-float ${
                    lightBg
                      ? "bg-[#D9AC40]/10"
                      : "bg-gradient-to-r from-[#D9AC40] to-[#FFD700]"
                  }`}
                >
                  <item.icon
                    className={`w-6 h-6 ${
                      lightBg ? "text-[#D9AC40]" : "text-white"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      lightBg ? "text-slate-900" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`${
                      lightBg ? "text-slate-900 opacity-80" : "text-gray-300"
                    }`}
                  >
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedElement>

          <AnimatedElement animation="slideInRight" delay={200}>
            <div
              className={`rounded-2xl p-8 border ${
                lightBg
                  ? "bg-slate-900/5 border-slate-900/10"
                  : "bg-slate-800/50 backdrop-blur-sm border-slate-700"
              }`}
            >
              {selectedAircraft && (
                <div
                  className={`mb-6 p-4 rounded-lg border-l-4 ${
                    selectedAircraft.type === "training"
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-[#D9AC40] bg-[#D9AC40]/20"
                  } ${lightBg ? "text-slate-900" : "text-white"}`}
                >
                  <h4 className="font-semibold mb-2">
                    {selectedAircraft.type === "training"
                      ? "Selected Training Aircraft:"
                      : "Selected Charter Aircraft:"}
                  </h4>
                  <p className="text-sm opacity-90">{selectedAircraft.name}</p>
                  <p className="text-sm opacity-90">{selectedAircraft.type}</p>
                  <p className="text-xs opacity-75 mt-1">
                    {selectedAircraft.type === "training"
                      ? "Perfect for pilot training programs"
                      : "Ideal for charter services"}
                  </p>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300 ${
                        lightBg
                          ? "bg-white border-slate-900/20 text-slate-900 placeholder-slate-900/40 focus:ring-[#D9AC40] hover:border-[#D9AC40]"
                          : "bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:ring-[#D9AC40] hover:border-[#D9AC40]"
                      }`}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300 ${
                        lightBg
                          ? "bg-white border-slate-900/20 text-slate-900 placeholder-slate-900/40 focus:ring-[#D9AC40] hover:border-[#D9AC40]"
                          : "bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:ring-[#D9AC40] hover:border-[#D9AC40]"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      lightBg
                        ? "bg-white border-slate-900/20 text-slate-900 placeholder-slate-900/40 focus:ring-[#D9AC40] hover:border-[#D9AC40]"
                        : "bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:ring-[#D9AC40] hover:border-[#D9AC40]"
                    }`}
                  />
                </div>

                <div className="relative">
                  <Listbox
                    value={selectedService}
                    onChange={setSelectedService}
                  >
                    {({ open }) => (
                      <>
                        <Listbox.Button
                          className={`w-full rounded-xl px-5 py-3 pr-12 text-base md:text-lg font-medium border transition-all duration-300 shadow focus:outline-none focus:ring-2 focus:ring-[#D9AC40] focus:border-[#D9AC40] hover:border-[#D9AC40] bg-opacity-90 flex items-center justify-between ${
                            lightBg
                              ? "bg-white border-slate-900/20 text-slate-900 placeholder-slate-900/40 hover:bg-[#f7f6f2]"
                              : "bg-slate-700/60 border border-slate-600 text-white placeholder-gray-400 hover:bg-slate-700/80"
                          }`}
                          style={{
                            boxShadow: lightBg
                              ? "0 2px 12px 0 rgba(25,25,41,0.04)"
                              : "0 2px 12px 0 rgba(0,0,0,0.12)",
                          }}
                        >
                          <span>{selectedService.label}</span>
                          <ChevronDown
                            className={`w-6 h-6 ml-2 transition-transform duration-200 ${
                              open
                                ? "rotate-180 text-[#D9AC40]"
                                : "text-[#D9AC40]"
                            }`}
                          />
                        </Listbox.Button>
                        <Listbox.Options
                          className={`absolute z-10 mt-2 w-full rounded-xl bg-white shadow-lg ring-1 ring-black/10 focus:outline-none text-base overflow-hidden ${
                            lightBg ? "" : "bg-slate-800 text-white"
                          }`}
                        >
                          {serviceOptions.map((option) => (
                            <Listbox.Option
                              key={option.value}
                              value={option}
                              className={({ active, selected }) =>
                                `cursor-pointer select-none px-5 py-3 transition-all ${
                                  active ? "bg-[#FFF7E0] text-[#D9AC40]" : ""
                                } ${selected ? "font-semibold" : ""}`
                              }
                            >
                              {option.label}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </>
                    )}
                  </Listbox>
                </div>

                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      lightBg
                        ? "bg-white border-slate-900/20 text-slate-900 placeholder-slate-900/40 focus:ring-[#D9AC40] hover:border-[#D9AC40]"
                        : "bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:ring-[#D9AC40] hover:border-[#D9AC40]"
                    }`}
                  ></textarea>
                </div>

                <button
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 animate-pulse hover:shadow-2xl hover:shadow-[#D9AC40]/25 ${
                    lightBg
                      ? "bg-slate-900 text-white hover:bg-[#D9AC40]"
                      : "bg-[#D9AC40] hover:bg-[#FFD700] text-white"
                  }`}
                >
                  Send Message
                </button>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
