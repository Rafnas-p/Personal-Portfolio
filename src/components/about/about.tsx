import React from 'react';
import { FaCode, FaMusic, FaBook } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTailwindcss, SiMongodb, SiGit, SiNodedotjs, SiExpress, SiNextdotjs, SiTypescript } from 'react-icons/si';

function About() {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white">
      <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
          <p className="text-lg md:text-xl mb-8">A passionate developer who loves to create, learn, and innovate.</p>
        </div>
      </div>

      <div className="py-16 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-6">Hobbies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="group flex flex-col items-center bg-black p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-400">
            <FaMusic className="text-5xl text-blue-400 mb-2 group-hover:text-blue-600 transition-colors" />
            <p className="text-lg">Listening to Music</p>
          </div>
          <div className="group flex flex-col items-center bg-black p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400">
            <FaBook className="text-5xl text-yellow-400 mb-2 group-hover:text-yellow-600 transition-colors" />
            <p className="text-lg">Reading</p>
          </div>
          <div className="group flex flex-col items-center bg-black p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-green-400">
            <FaCode className="text-5xl text-green-400 mb-2 group-hover:text-green-600 transition-colors" />
            <p className="text-lg">Coding</p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          <div className="group flex flex-col items-center bg-black p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500">
            <SiJavascript className="text-5xl text-yellow-500 mb-2 group-hover:text-yellow-700 transition-colors" />
            <p className="text-lg">JavaScript</p>
          </div>
          <div className="group flex flex-col items-center bg-black p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500">
            <SiReact className="text-5xl text-blue-500 mb-2 group-hover:text-blue-700 transition-colors" />
            <p className="text-lg">React</p>
          </div>
          <div className="group flex flex-col items-center bg-black p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-teal-400">
            <SiTailwindcss className="text-5xl text-teal-400 mb-2 group-hover:text-teal-600 transition-colors" />
            <p className="text-lg">Tailwind CSS</p>
          </div>
          <div className="group flex flex-col items-center bg-black p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600">
            <SiTypescript className="text-5xl text-blue-600 mb-2 group-hover:text-blue-800 transition-colors" />
            <p className="text-lg">TypeScript</p>
          </div>
        </div>
      </div>

      {/* Libraries & Frameworks Section */}
      <div className="py-16 bg-gray-700">
        <h2 className="text-3xl font-semibold text-center mb-6">Libraries & Frameworks</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          <div className="group flex flex-col items-center bg-black p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-green-500">
            <SiNodedotjs className="text-5xl text-green-500 mb-2 group-hover:text-green-700 transition-colors" />
            <p className="text-lg">Node.js</p>
          </div>
          <div className="group flex flex-col items-center bg-black p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500">
            <SiExpress className="text-5xl text-blue-500 mb-2 group-hover:text-blue-700 transition-colors" />
            <p className="text-lg">Express</p>
          </div>
          <div className="group flex flex-col items-center bg-black p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-green-400">
            <SiMongodb className="text-5xl text-green-400 mb-2 group-hover:text-green-600 transition-colors" />
            <p className="text-lg">MongoDB</p>
          </div>
          <div className="group flex flex-col items-center bg-black p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600">
            <SiNextdotjs className="text-5xl text-blue-600 mb-2 group-hover:text-blue-800 transition-colors" />
            <p className="text-lg">Next.js</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
