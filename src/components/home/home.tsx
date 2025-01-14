import Image from "next/image";
import React from "react";

function Home() {
  const profileImage = "https://dunks1980.com/images/hero_setup.avif";

  return (
    <div
      id="home"
      className="h-screen w-full bg-black mt-10 flex flex-col-reverse lg:flex-row"
    >
      <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-3/4 bg-gradient-to-r from-black via-blue-900 to-black relative p-6 sm:p-8 md:p-10">
        <div className="mb-6 transform transition-all duration-300 hover:scale-125">
        <Image
  src="/home/profile.jpg"
  alt="Profile"
    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-white shadow-lg"
  width={192}
  height={192}
  priority 
  sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 192px" 
/>
        </div>

        <div className="text-center lg:text-left">
  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold opacity-90 transform transition-all duration-500 hover:opacity-100 hover:scale-110 mb-4">
    Hi, I&apos;m Rafnas
  </h1>
  <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-80 hover:opacity-100 transition-all duration-500">
    I am a dedicated MERN stack developer based in Kerala, India, with a
    strong passion for creating user-friendly and visually engaging
    applications. From e-commerce booking systems to a variety of web
    solutions, I focus on building intuitive interfaces that provide
    seamless and impactful user experiences. Take a look at my projects
    to see how I bring ideas to life. Let&apos;s collaborate and create
    something amazing together!
  </p>
</div>

      </div>

      <div
        className="w-full lg:w-2/4 z-10 relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('${profileImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 bg-cover bg-center transform transition-all duration-500 hover:scale-110"></div>
      </div>
    </div>
  );
}

export default Home;
