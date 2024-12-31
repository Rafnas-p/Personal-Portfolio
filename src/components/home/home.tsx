import React from "react";

function Home() {
  const profileImage = "https://dunks1980.com/images/hero_setup.avif"; 

  return (
    <div id="home" className="h-screen w-full bg-black mt-10 flex flex-col-reverse lg:flex-row">
      <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-3/4 bg-gradient-to-r from-black via-blue-900 to-black relative p-6 sm:p-8 md:p-10">
        <div className="mb-6">
          <img
              src="/home/profile.jpg"
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        <div className="text-center lg:text-left">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold opacity-90 transform transition-all duration-300 hover:opacity-100 hover:scale-105 mb-4">
            Hi, I'm  Rafnas
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            As a passionate MEARN stack developer , Devon, UK, I specialize in building user-friendly, visually appealing applications. From DJ platforms to eCommerce booking systems, I strive to craft intuitive interfaces that deliver seamless experiences. Let's create something amazing together!
          </p>
        </div>
      </div>

      <div
        className="w-full lg:w-2/4 z-10 relative h-screen bg-black"
        style={{
          backgroundImage: `url('${profileImage}')`,
          backgroundSize: "contain", 
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> 
      </div>
    </div>
  );
}

export default Home;
