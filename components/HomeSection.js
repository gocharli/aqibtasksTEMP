"use client";
import React, { useState } from "react";

export default function HomeSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 font-inter overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] md:h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("/bgImage.jpg")',
        }}
      >
        {/* Navigation Bar */}
        <nav className="relative z-20 p-6 flex justify-between items-center">
          {" "}
          {/* Increased z-index for nav */}
          <div className="text-white text-2xl font-bold rounded-md">
            JustStay
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-white hover:text-orange-400 transition duration-300 rounded-md"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-orange-400 transition duration-300 rounded-md"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-orange-400 transition duration-300 rounded-md"
            >
              Rooms
            </a>
            <a
              href="#"
              className="text-white hover:text-orange-400 transition duration-300 rounded-md"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-orange-400 transition duration-300 rounded-md"
            >
              Contact
            </a>
          </div>
          <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md shadow-lg transition duration-300">
            Logout
          </button>
        </nav>

        {/* Mobile Menu Slide-in */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-blue-900 bg-opacity-95 transform transition-transform duration-300 ease-in-out z-30
            ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden flex flex-col items-center justify-center space-y-8 p-6`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <a
            href="#"
            className="text-white text-2xl hover:text-orange-400 transition duration-300 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="text-white text-2xl hover:text-orange-400 transition duration-300 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="text-white text-2xl hover:text-orange-400 transition duration-300 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Rooms
          </a>
          <a
            href="#"
            className="text-white text-2xl hover:text-orange-400 transition duration-300 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#"
            className="text-white text-2xl hover:text-orange-400 transition duration-300 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md shadow-lg transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Logout
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-6 md:px-12 lg:px-24 py-6 md:py-12 lg:py-24 text-left">
          {" "}
          {/* Adjusted padding for better horizontal spacing */}
          <p className="text-lg mb-2 rounded-md">Welcome To</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 rounded-md">
            Hotel <span className="text-orange-500">JustStay</span> <br />{" "}
            Ahmedabad India
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-8 rounded-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam
            maxime praesentium why did the scarecrow win an award? because he
            was outstanding in his field. Lorem ipsum
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            {/* Primary button with orange background */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md shadow-lg transition duration-300 w-full sm:w-auto">
              Book Now
            </button>
            {/* Secondary button with orange border and text, and orange hover */}
            <button className="bg-transparent border border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white py-3 px-8 rounded-md shadow-lg transition duration-300 w-full sm:w-auto">
              Explore More
            </button>
          </div>
        </div>
      </div>
      {/* You can add more sections below this if needed */}
    </div>
  );
}
