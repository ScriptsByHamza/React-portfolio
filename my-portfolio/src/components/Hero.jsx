// src/components/Hero.jsx

import React from 'react';
import reactImage from '../assets/react.png'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 h-screen flex items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">

        {/* Left Section: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hi, I'm Muhammad Hamza
          </h1>
          <p className="text-lg md:text-xl text-black-700 mb-6">
            A Passionate Frontend Developer crafting beautiful and functional websites.
          </p>

          <div className="space-x-4">
            <a
              href="#projects"
              className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-md font-semibold"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-gray-400 text-white-700 hover:bg-gray-300 hover:text-gray-900 px-6 py-3 rounded-md font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src="data:image/png;base64,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"
            alt="Profile"
            className="w-64 h-64 rounded-full shadow-lg border-4 border-indigo-600"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
