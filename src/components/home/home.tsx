"use client";

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
      className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center text-white pt-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black before:content-[''] before:absolute before:inset-0 before:bg-[url('/noise.png')] before:opacity-10 before:pointer-events-none"></div>


      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <div className="mb-8 transform transition-transform duration-300 hover:scale-110">
          <Image
            src="/home/profile.jpg"
            alt="Profile"
            className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover shadow-lg border-[3px] border-gray-700"
            width={208}
            height={208}
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider mb-4 text-center leading-tight text-gray-200">
          Hello, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 drop-shadow-md">
            Rafnas
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          A passionate MERN stack developer from Kerala, India, with one year of experience.
          I specialize in building scalable and user-friendly web applications. As a former
          intern, I have worked on three projects, continuously refining my skills while
          seeking new opportunities to innovate and contribute.
        </p>

        <div className="flex justify-center mt-8 gap-6">
          <button
            onClick={() => scrollToSection("work")}
            className="px-6 py-3 bg-black text-yellow-500 border border-yellow-500 rounded-lg shadow-md transform transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:shadow-yellow-500"
          >
            View My Work
          </button>
          <button
            onClick={() => (window.location.href = 'https://wa.me/9633298524')}
            className="px-6 py-3 bg-black text-red-500 border border-red-500 rounded-lg shadow-md transform transition-all duration-300 hover:bg-red-500 hover:text-black hover:shadow-red-500"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
