import React from "react";

export default function HomeSection() {
  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Navigation Bar */}
        <nav className="relative z-10 p-6 flex justify-between items-center">
          <div className="text-white text-2xl font-bold rounded-md">
            JustStay
          </div>
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
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md shadow-lg transition duration-300">
            Logout
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white p-6 md:p-12 lg:p-24">
          <p className="text-lg mb-2 rounded-md">Welcome To</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 rounded-md">
            Hotel JustStay <br /> Ahmedabad India
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-8 rounded-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam
            maxime praesentium why did the scarecrow win an award? because he
            was outstanding in his field. Lorem ipsum
          </p>
          <div className="flex space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md shadow-lg transition duration-300">
              Book Now
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-orange-500 text-white py-3 px-8 rounded-md shadow-lg transition duration-300">
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* You can add more sections below this if needed */}
    </div>
  );
}
