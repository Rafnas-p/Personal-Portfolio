"use client";
import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "YouTube Clone",
    description:
      "Built a YouTube Clone using Next.js and TypeScript. Integrated MongoDB for data storage and Firebase Authentication for secure user login. Utilized Cloudinary and Multer for video uploads and media optimization. Implemented core features like channel management, a shorts section, video uploads, likes, subscribes, and comments. Designed a responsive UI with a modern, user-friendly interface.",
    image: "home/work1.jpg",
    link: "https://youtube-cloneby-rafnas.vercel.app",
  },
  {
    id: 2,
    title: "E-Commerce Shoe Website",
    description:
      "Designed and developed a fully functional e-commerce website for shoes using the MERN stack (MongoDB, Express.js, React, Node.js). Implemented user authentication and authorization features, enabling secure access for customers and admins. Created a responsive and user-friendly interface using React, ensuring an optimal experience across devices. Integrated payment processing functionality using Razorpay, facilitating secure transactions for users.",
    image: "home/work2.jpg",
    link: "https://e-comerce-shoe.vercel.app",
  },
];

function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const currentProject = projects[currentIndex];
  const progressWidth = ((currentIndex + 1) / projects.length) * 100;

  return (
    <div
      id="work"
      className="bg-black min-h-screen flex flex-col justify-between "
    >
      <div className="relative w-fit mx-auto pb-3 border-b-4 border-yellow-600 mt-5 mb-5">
        <h2
          className="text-5x2 sm:text-6x2 font-bold text-center 
      text-transparent bg-clip-text bg-gradient-to-r 
      from-yellow-500 to-red-600 drop-shadow-xl 
      uppercase tracking-widest font-serif opacity-90"
        >
          ✦ My Projects ✦
        </h2>
      </div>

      {/* Mobile View */}
      <div className="block sm:hidden">
        <div className="bg-gray-900 shadow-xl rounded-lg w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-500 ease-out p-6">
          <div
            className="h-48 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${currentProject.image})` }}
          ></div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-white">
              {currentProject.title}
            </h3>
            <p className="text-gray-400 mt-3">{currentProject.description}</p>
            <a
              href={currentProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-white bg-red-600 px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-110"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6">
          <div className="w-full max-w-md h-1 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 transition-all duration-300"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
          <button
            onClick={handleNext}
            className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Next Project
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:flex flex-wrap gap-12 justify-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 shadow-lg rounded-lg w-full sm:w-80 p-6 transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-2xl"
          >
            <div
              className="h-48 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-white bg-red-600 px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-110"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-6 mt-10 text-center">
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="text-sm sm:text-base mt-4">
          © 2024 My Projects | All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default Work;
