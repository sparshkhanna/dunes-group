import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import AnimatedElement from "./AnimatedElement";
import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import {
  sendContactEmail,
  checkEmailHealth,
  openEmailClient,
  generateEmailContent,
} from "../utils/emailService";

const serviceOptions = [
  { value: "", label: "Select Service" },
  { value: "training", label: "Pilot Training" },
  { value: "charter", label: "Charter Services" },
  { value: "maintenance", label: "Maintenance & MRO" },
  { value: "other", label: "Other" },
];

const ContactSection = ({ lightBg }) => {
  const [selectedService, setSelectedService] = useState(serviceOptions[0]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [errors, setErrors] = useState({});
  const [emailServiceAvailable, setEmailServiceAvailable] = useState(true);

  // Check email service health on mount
  useEffect(() => {
    checkEmailHealth().then(setEmailServiceAvailable);
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!selectedService.value) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const emailContent = generateEmailContent({
        ...formData,
        service: selectedService.value,
      });

      await sendContactEmail(emailContent);

      setSubmitStatus("success");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setSelectedService(serviceOptions[0]);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFallbackContact = () => {
    const emailContent = generateEmailContent({
      ...formData,
      service: selectedService.value,
    });
    openEmailClient(emailContent);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
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
          {/* Contact Info */}
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
              { icon: Mail, title: "Email", content: "group@dunesaviation.in" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 ${
                  lightBg ? "text-slate-900" : ""
                }`}
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

          {/* Contact Form */}
          <AnimatedElement animation="slideInRight" delay={200}>
            <div
              className={`rounded-2xl p-8 border ${
                lightBg
                  ? "bg-slate-900/5 border-slate-900/10"
                  : "bg-slate-800/50 backdrop-blur-sm border-slate-700"
              }`}
            >
              {/* Service Status Alert */}
              {!emailServiceAvailable && (
                <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  <div className="text-yellow-700 text-sm">
                    <p className="font-semibold">Email Service Notice</p>
                    <p>
                      Service temporarily unavailable. We'll open your email
                      client instead.
                    </p>
                  </div>
                </div>
              )}

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700">
                    Message sent successfully! We'll get back to you soon.
                  </span>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-700 font-semibold">
                      Message could not be sent
                    </span>
                  </div>
                  <p className="text-red-600 text-sm mb-3">
                    Please try the alternative method below.
                  </p>
                  <button
                    onClick={handleFallbackContact}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Email Client</span>
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
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
                      } ${errors.firstName ? "border-red-500" : ""}`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
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

                {/* Email */}
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
                    } ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Service Selection */}
                <div className="relative">
                  <Listbox
                    value={selectedService}
                    onChange={setSelectedService}
                  >
                    {({ open }) => (
                      <>
                        <Listbox.Button
                          className={`w-full rounded-xl px-5 py-3 pr-12 text-base font-medium border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D9AC40] focus:border-[#D9AC40] hover:border-[#D9AC40] flex items-center justify-between ${
                            lightBg
                              ? "bg-white border-slate-900/20 text-slate-900 hover:bg-[#f7f6f2]"
                              : "bg-slate-700/60 border border-slate-600 text-white hover:bg-slate-700/80"
                          } ${errors.service ? "border-red-500" : ""}`}
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
                          className={`absolute z-10 mt-2 w-full rounded-xl shadow-lg ring-1 ring-black/10 focus:outline-none text-base overflow-hidden ${
                            lightBg ? "bg-white" : "bg-slate-800 text-white"
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
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Message */}
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
                    } ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#D9AC40]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                    lightBg
                      ? "bg-slate-900 text-white hover:bg-[#D9AC40]"
                      : "bg-[#D9AC40] hover:bg-[#FFD700] text-white"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </button>

                {/* Fallback Contact */}
                <div className="text-center">
                  <p
                    className={`text-sm mb-3 ${
                      lightBg ? "text-slate-600" : "text-gray-400"
                    }`}
                  >
                    Having trouble? Contact us directly:
                  </p>
                  <button
                    type="button"
                    onClick={handleFallbackContact}
                    className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                      lightBg
                        ? "border-slate-300 text-slate-700 hover:bg-slate-50"
                        : "border-slate-600 text-gray-300 hover:bg-slate-700"
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Email Client</span>
                  </button>
                </div>
              </form>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
