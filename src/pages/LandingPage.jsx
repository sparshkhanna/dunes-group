import React, { useState } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FleetSection from "../components/FleetSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SEO from "../components/SEO";
// import "../LandingPage.css"; // Uncomment if you move custom CSS

const stats = [
  {
    number: "15+",
    label: "Years Experience",
    icon: require("lucide-react").Award,
  },
  {
    number: "500+",
    label: "Pilots Trained",
    icon: require("lucide-react").GraduationCap,
  },
  {
    number: "50+",
    label: "Aircraft Serviced",
    icon: require("lucide-react").Plane,
  },
  {
    number: "1000+",
    label: "Flight Hours",
    icon: require("lucide-react").Timer,
  },
];

const services = [
  {
    icon: require("lucide-react").GraduationCap,
    title: "Flying Training Organization",
    brand: "Dunes Aviation Academy",
    description:
      "DGCA-approved pilot training with state-of-the-art simulators and experienced instructors.",
    features: [
      "Commercial Pilot License",
      "Private Pilot License",
      "Instrument Rating",
      "Multi-Engine Rating",
    ],
  },
  {
    icon: require("lucide-react").Plane,
    title: "Non-Scheduled Air Operations",
    brand: "Dunes Air",
    description:
      "Premium charter services with our modern fleet for business and leisure travel.",
    features: [
      "Cessna 208B",
      "Citation CJ2+",
      "Challenger 605",
      "24/7 Operations",
    ],
  },
  {
    icon: require("lucide-react").Settings,
    title: "MRO & CAMO Services",
    brand: "Dunes Aerotech",
    description:
      "Comprehensive maintenance, repair, and overhaul services with certified technicians.",
    features: [
      "Scheduled Maintenance",
      "Component Overhaul",
      "CAMO Services",
      "Pre-Purchase Inspections",
    ],
  },
];

const fleet = [
  {
    name: "Cessna 208B Grand Caravan",
    type: "Turboprop Utility",
    capacity: "9 Passengers",
    range: "1,070 nm",
    image: "🛩️",
  },
  {
    name: "Citation CJ2+",
    type: "Light Business Jet",
    capacity: "6 Passengers",
    range: "1,478 nm",
    image: "✈️",
  },
  {
    name: "Challenger 605",
    type: "Super Mid-Size Jet",
    capacity: "10 Passengers",
    range: "4,000 nm",
    image: "🛫",
  },
];

const DunesAviationLanding = () => {
  const [selectedAircraft, setSelectedAircraft] = useState(null);

  const handleAircraftSelection = (aircraft, type) => {
    setSelectedAircraft({ ...aircraft, type });

    // Smooth scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <SEO
        title="Aviation Ecosystem | Pilot Training, Aircraft Operations & Maintenance"
        description="The Dunes Group represents the unified strength of three core aviation verticals—Flying Training Organization (FTO), Non-Scheduled Air Operations (NSOP), and Maintenance, Repair & Overhaul (MRO) along with Continuing Airworthiness Management Organization (CAMO) services."
        keywords="aviation training, pilot training, aircraft operations, maintenance repair overhaul, MRO services, airworthiness management, CAMO, flying school, aviation academy, aircraft charter, cargo operations, aviation maintenance, aircraft repair, aviation services, India aviation"
        canonical="/"
        ogType="website"
      />
      <div className="min-h-screen bg-dunes-gradient text-white w-full">
        <Navigation />
        <HeroSection />
        <StatsSection stats={stats} lightBg />
        <AboutSection />
        <ServicesSection services={services} lightBg />
        <FleetSection
          fleet={fleet}
          onAircraftSelection={handleAircraftSelection}
        />
        <ContactSection lightBg selectedAircraft={selectedAircraft} />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default DunesAviationLanding;
