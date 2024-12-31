import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Work() {
  return (
    <div id="work" className="bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen flex flex-col justify-between">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800">My Projects</h2>

      <div className="flex flex-wrap gap-6 justify-center px-4">
        <div className="bg-white shadow-lg rounded-lg w-full sm:w-72 max-w-sm transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div
            className="h-40 sm:h-48 bg-cover bg-center rounded-t-lg relative group overflow-hidden"
            style={{ backgroundImage: "url('https://via.placeholder.com/400x300')" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-500 ease-in-out"
              style={{
                backgroundImage: "url('https://via.placeholder.com/400x300')",
              }}
            ></div>
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-2xl font-semibold text-gray-800">YouTube Clone</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Built a YouTube Clone using Next.js and TypeScript. Integrated MongoDB for data storage and Firebase Authentication for secure user login.
              Utilized Cloudinary and Multer for video uploads and media optimization. Implemented core features like channel management, a shorts section,
              video uploads, likes, subscribes, and comments. Designed a responsive UI with a modern, user-friendly interface.
            </p>
            <a
              href="https://github.com/your-repo-link"
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg w-full sm:w-72 max-w-sm transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div
            className="h-40 sm:h-56 bg-cover bg-center rounded-t-lg relative group overflow-hidden"
            style={{ backgroundImage: "url('home/work2.jpg')" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-500 ease-in-out"
              style={{
                backgroundImage: "url('home/work2.jpg')",
              }}
            ></div>
          </div>

          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-2xl font-semibold text-gray-800">E-Commerce Shoe Website</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Designed and developed a fully functional e-commerce website for shoes using the MERN stack (MongoDB, Express.js, React, Node.js). Implemented
              user authentication and authorization features, enabling secure access for customers and admins. Created a responsive and user-friendly interface
              using React, ensuring an optimal experience across devices. Integrated payment processing functionality using Razorpay, facilitating secure
              transactions for users.
            </p>
            <a
              href="https://e-comerce-shoe.vercel.app"
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center space-y-4">

          <div className="flex justify-center space-x-6 text-xl sm:text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedin />
            </a>
          </div>

          <p className="text-sm sm:text-base text-center">© 2024 My Projects | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Work;
