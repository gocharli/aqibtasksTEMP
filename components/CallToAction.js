import React from "react";

const CallToActionSection = () => {
  return (
    <section className="bg-orange-500 py-16 sm:py-20 md:py-24 px-6 relative overflow-hidden flex items-center justify-center min-h-[400px]">
      {" "}
      {/* Added flexbox for vertical centering, min-height for consistent size */}
      {/* Background shapes (more subtle and abstract) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-400 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-400 rounded-full opacity-10 translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-orange-400 rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-1/2 right-1/4 w-48 h-48 bg-orange-400 rounded-full opacity-5 translate-x-1/2 translate-y-1/2"></div>
      {/* Abstract bar chart like graphic on the right (more subtle) */}
      <div className="absolute bottom-0 right-0 p-4 opacity-10 hidden md:block">
        <div className="flex items-end space-x-2 h-32">
          <div className="w-4 bg-orange-400 h-1/4 rounded-sm"></div>
          <div className="w-4 bg-orange-400 h-1/2 rounded-sm"></div>
          <div className="w-4 bg-orange-400 h-3/4 rounded-sm"></div>
          <div className="w-4 bg-orange-400 h-full rounded-sm"></div>
        </div>
      </div>
      {/* Abstract grid lines on the left (more subtle) */}
      <div className="absolute top-0 left-0 p-4 opacity-10 hidden md:block">
        <div className="grid grid-cols-4 gap-2 h-32 w-32">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="border border-orange-400 border-opacity-50"
            ></div>
          ))}
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center text-center relative z-10 max-w-3xl">
        {" "}
        {/* Added max-w-3xl for content width */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight rounded-md">
          Transform Ideas into Reality <br className="hidden sm:block" /> with
          Trusted Global Teams.
        </h2>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:max-w-xl">
          {" "}
          {/* Adjusted max-width for input/button group */}
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 shadow-md"
          />
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition duration-300  min-w-fit sm:w-auto ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
