// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm mb-2">© {new Date().getFullYear()} Muhammad Hamza. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/yourusername" // Update with your GitHub link
            className="hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername" // Update with your LinkedIn link
            className="hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername" // Update with your Twitter link
            className="hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
