import React from "react";
import { Plane, Home, ArrowLeft } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-dunes-gradient">
      <Navigation />
      <div className="flex items-center justify-center py-20">
        <div className="text-center max-w-2xl mx-auto px-4">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 -z-10">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>

          <div className="relative z-10">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-r from-gold-metallic to-gold-dark bg-clip-text leading-none">
                404
              </h1>
            </div>

            {/* Plane Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-gold-metallic to-gold-dark rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <Plane className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Page Not{" "}
                <span className="bg-gradient-to-r from-gold-metallic via-gold-dark to-gold-metallic bg-clip-text text-transparent animate-gradient">
                  Found
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Looks like this flight path doesn't exist. The page you're
                looking for has taken off to an unknown destination.
              </p>
              <p className="text-gray-400">
                Don't worry, our navigation systems are here to help you get
                back on course.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.history.back()}
                className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Go Back</span>
              </button>

              <a
                href="/"
                className="flex items-center space-x-2 bg-gradient-to-r from-gold-metallic to-gold-dark hover:from-gold-dark hover:to-gold-metallic text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Home className="w-5 h-5" />
                <span>Return Home</span>
              </a>
            </div>

            {/* Additional Help */}
            <div className="mt-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">
                Need Help?
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                If you believe this is an error, please contact our support
                team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a
                  href="mailto:group@dunesaviation.in"
                  className="text-gold-metallic hover:text-gold-dark transition-colors"
                >
                  group@dunesaviation.in
                </a>
                <span className="text-gray-500 hidden sm:inline">|</span>
                <span className="text-gray-300">+91 96101 60999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
