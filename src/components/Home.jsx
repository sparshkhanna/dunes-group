const Home = () => {
  return (
    <div className="min-h-screen bg-dunes-gradient">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-indigo-600">Dunes Group</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern React application built with Tailwind CSS for beautiful,
            responsive design.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-in-left">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Lightning Fast
            </h3>
            <p className="text-gray-600">
              Built with modern React and optimized for performance.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Beautiful Design
            </h3>
            <p className="text-gray-600">
              Styled with Tailwind CSS for modern, responsive layouts.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-in-right">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Secure & Reliable
            </h3>
            <p className="text-gray-600">
              Built with security best practices and modern standards.
            </p>
          </div>
        </div>

        <div className="text-center animate-fade-in">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>

        <footer className="mt-16 text-center text-gray-500 animate-fade-in">
          <p>Built with ❤️ using React & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
