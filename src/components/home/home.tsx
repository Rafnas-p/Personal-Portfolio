"use client"; // This marks the component as a Client Component

import Image from "next/image";
import React from "react";

function Home() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="h-screen w-full bg-gradient-to-r from-indigo-900 via-black to-gray-900 flex flex-col items-center justify-center relative overflow-hidden text-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-[200px] opacity-40"></div>
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-gradient-to-br from-blue-500 to-teal-400 rounded-full blur-[150px] opacity-50"></div>
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full blur-[150px] opacity-40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Profile Image */}
        <div className="mb-8 transform transition-transform duration-300 hover:scale-110">
          <Image
            src="/home/profile.jpg"
            alt="Profile"
            className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover shadow-2xl border-[5px] border-gray-800"
            width={208}
            height={208}
            priority
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide mb-4 text-center">
          Hello, I&apos;m <span className="text-purple-400">Rafnas</span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg max-w-xl text-center leading-relaxed">
          A passionate MERN stack developer from Kerala, India. I create
          high-quality web applications tailored to meet client needs while
          ensuring seamless user experiences.
        </p>

        <div className="flex justify-center mt-8 gap-6">
          <button
            onClick={() => scrollToSection("work")}
            className="px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            View My Work
          </button>
          <button
  onClick={() => window.location.href = "https://wa.me/9633298524"}
  className="px-5 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
>
  Contact Me
</button>

        </div>
      </div>
    </div>
  );
}

export default Home;
