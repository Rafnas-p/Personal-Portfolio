import React from "react";

function About() {
  return (
    <div id="about" className="min-h-screen bg-black text-white relative">
      <div className="container mx-auto px-8 py-24 relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-10 leading-snug tracking-widest text-[#d4af37]">
          About <span className="text-[#c0a16b]">Me</span>
        </h1>

        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-16 text-gray-400 leading-relaxed">
          I&apos;m a MERN stack developer passionate about crafting high-quality,
          scalable applications. I love blending creativity with technology to
          build meaningful solutions.
        </p>

        <div className="border border-[#c0a16b] bg-[#1a1a1a] p-10 rounded-xl shadow-[0px_0px_15px_rgba(192,161,107,0.3)] max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#d4af37] text-center mb-6">
            My Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            {[
              "JavaScript",
              "React.js",
              "Next.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "TanStack Query",
              "Tailwind CSS",
              "Redux Toolkit",
              "Git & GitHub",
            ].map((skill, index) => (
              <span
                key={index}
                className="border border-[#d4af37] bg-black text-[#d4af37] px-6 py-3 rounded-full font-medium text-lg shadow-md transform transition-all duration-300 hover:scale-110"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
          <div className="border border-[#c0a16b] bg-[#121212] p-8 rounded-xl shadow-md transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">
              My Mission
            </h3>
            <p className="text-gray-300 text-lg">
              To craft innovative, high-performance solutions that enhance user
              experiences and solve real-world problems.
            </p>
          </div>

          <div className="border border-[#d4af37] bg-[#1a1a1a] p-8 rounded-xl shadow-md transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#c0a16b] mb-4">
              What Drives Me?
            </h3>
            <p className="text-gray-300 text-lg">
              The power of technology and my desire to create meaningful,
              impactful applications that make a difference.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xl italic text-center text-[#c0a16b]">
            &quot;Dream big, code bigger, and never stop learning.&quot;
          </p>
        </div>

        <div className="w-full h-1 mt-12 bg-gradient-to-r from-[#d4af37] via-[#c0a16b] to-[#d4af37]"></div>
      </div>
    </div>
  );
}

export default About;
