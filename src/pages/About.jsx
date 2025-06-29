const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Dunes Group
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            We are a comprehensive aviation ecosystem dedicated to excellence in
            training, operations, and maintenance.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide world-class aviation services with uncompromising
                safety standards and innovative solutions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the leading aviation group in the region, setting industry
                standards for excellence and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
