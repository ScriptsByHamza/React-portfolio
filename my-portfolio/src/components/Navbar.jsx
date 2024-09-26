// src/components/Navbar.jsx

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-10 shadow-lg">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo or Name */}
        <div className="text-gray-900 text-2xl font-bold">
          Muhammd Hamza
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8 text-gray-700">
          <a href="#home" className="hover:text-indigo-600">Home</a>
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-indigo-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-indigo-600">Home</a>
            <a href="#projects" className="block px-3 py-2 text-gray-900 hover:text-indigo-600">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-gray-900 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
