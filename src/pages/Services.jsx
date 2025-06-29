const Services = () => {
  const services = [
    {
      title: "Flying Training Organization",
      description:
        "DGCA-approved pilot training with state-of-the-art simulators and experienced instructors.",
      icon: "✈️",
      features: [
        "Commercial Pilot License",
        "Private Pilot License",
        "Instrument Rating",
        "Multi-Engine Rating",
      ],
    },
    {
      title: "Non-Scheduled Air Operations",
      description:
        "Premium charter services with our modern fleet for business and leisure travel.",
      icon: "🛩️",
      features: [
        "Cessna 208B",
        "Citation CJ2+",
        "Challenger 605",
        "24/7 Operations",
      ],
    },
    {
      title: "MRO & CAMO Services",
      description:
        "Comprehensive maintenance, repair, and overhaul services with certified technicians.",
      icon: "🔧",
      features: [
        "Scheduled Maintenance",
        "Component Overhaul",
        "CAMO Services",
        "Pre-Purchase Inspections",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive aviation solutions tailored to meet your needs with
            the highest standards of safety and excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-600"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
