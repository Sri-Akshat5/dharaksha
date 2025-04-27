import React from 'react';
import homeimg from '../../assets/home1.jpg';
import border from '../../assets/border.png';
import greener from '../../assets/greener.jpg';
import clean from '../../assets/clean.jpeg';
import sustain from '../../assets/sustain.jpeg';

function Home() {
  return (
    <div className="relative w-full overflow-hidden h-[600px] sm:max-h-[700px] pt-10 sm:pt-16">
      {/* Background Image */}
      <img
        src={homeimg}
        alt="Background"
        className="w-full h-full object-cover pointer-events-none"
      />

      {/* Dark Overlay + Centered Text */}
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4">
        <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 items-center">
          {/* GREENER */}
          <div className="relative group">
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center transition-opacity duration-500 group-hover:opacity-30">
              GREENER,
            </h1>
            <img
              src={greener}
              alt="Leaf"
              className="absolute inset-0  m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          {/* CLEANER */}
          <div className="relative group">
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center transition-opacity duration-500 group-hover:opacity-30">
              CLEANER,
            </h1>
            <img
              src={clean}
              alt="Leaf"
              className="absolute inset-0  m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          {/* SUSTAINABLE */}
          <div className="relative group">
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center transition-opacity duration-500 group-hover:opacity-30">
              SUSTAINABLE
            </h1>
            <img
              src={sustain}
              alt="Leaf"
              className="absolute inset-0  m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Subtitle */}
        <h3 className="text-white text-base sm:text-xl md:text-2xl py-4 sm:py-10 text-center hover:scale-105 transition-all duration-500 max-w-[90%] mx-auto">
          Home-grown, organic and biodegradable packaging material
        </h3>
      </div>

      {/* Border Overlays */}
      <img
        src={border}
        alt="Border Top"
        className="absolute top-8 sm:pt-45 left-0 w-full pointer-events-none"
      />
      <img
        src={border}
        alt="Border Bottom"
        className="absolute bottom-0 left-0 w-full rotate-180 pointer-events-none"
      />
    </div>
  );
}

export default Home;