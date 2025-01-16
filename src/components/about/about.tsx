import React from "react";

function About() {
  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-br from-blue-800 via-teal-700 to-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-8 py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-10 leading-snug tracking-wide">
          About <span className="text-teal-400">Me</span>
        </h1>

        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-16 text-gray-300">
          I'm a full-stack developer passionate about solving problems through
          innovative technology. With a dedication to continuous learning and
          growth, I aim to create seamless digital experiences that inspire and
          empower.
        </p>

        <div className="bg-gray-800 bg-opacity-90 p-10 rounded-xl shadow-lg max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-teal-400 text-center mb-6">
            My Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <span className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium text-lg shadow-md hover:bg-teal-500 transition duration-300">
              JavaScript
            </span>
            <span className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium text-lg shadow-md hover:bg-teal-500 transition duration-300">
              React.js
            </span>
            <span className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium text-lg shadow-md hover:bg-teal-500 transition duration-300">
              Node.js
            </span>
            <span className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium text-lg shadow-md hover:bg-teal-500 transition duration-300">
              Express.js
            </span>
            <span className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium text-lg shadow-md hover:bg-teal-500 transition duration-300">
              MongoDB
            </span>
            <span className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium text-lg shadow-md hover:bg-teal-500 transition duration-300">
              Tailwind CSS
            </span>
            <span className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium text-lg shadow-md hover:bg-teal-500 transition duration-300">
              Redux Toolkit
            </span>
            <span className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium text-lg shadow-md hover:bg-teal-500 transition duration-300">
              Git & GitHub
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
              My Mission
            </h3>
            <p className="text-gray-200 text-lg">
              To craft innovative, impactful solutions that empower users and
              solve real-world problems through technology.
            </p>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">
              What Drives Me?
            </h3>
            <p className="text-gray-200 text-lg">
              The limitless potential of technology and my commitment to creating
              a meaningful impact through every project I build.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xl italic text-center text-gray-400">
            "Dream big, code bigger, and never stop learning."
          </p>
        </div>

        <div className="w-full h-1 mt-12 bg-gradient-to-r from-blue-400 via-teal-400 to-gray-400"></div>
      </div>
    </div>
  );
}

export default About;
