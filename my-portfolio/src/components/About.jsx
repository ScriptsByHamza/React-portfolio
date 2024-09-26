// src/components/AboutUs.jsx

import React from 'react';


const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16" id="about"> {/* Changed background color */}
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Section: Text */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <p className="text-lg text-gray-700 mb-4">
              Hello! I'm John Doe, a passionate frontend developer with a knack for creating beautiful and functional websites. 
              With several years of experience in web development, I enjoy turning ideas into reality through clean and efficient code.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              I specialize in modern JavaScript frameworks like React and have a strong understanding of UI/UX principles.
              My goal is to provide users with the best possible experience while navigating through my projects.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              When I'm not coding, you can find me exploring new technologies, playing video games, or enjoying a good book.
            </p>
          </div>

          {/* Right Section: Image */}
          {/* <div className="lg:w-1/2 flex justify-center">
            <img
              src={aboutImage} // Use the imported image here
              alt="About Me"
              className="w-64 h-64 rounded-full shadow-lg border-4 border-indigo-600"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
