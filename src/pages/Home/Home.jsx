import React from 'react';
import homeimg from '../../assets/home1.jpg';
import border from '../../assets/border.png';
import greener from '../../assets/greener.jpg';
import clean from '../../assets/clean.jpeg';
import sustain from '../../assets/sustain.jpeg';

function Home() {
  return (
    <div className="relative w-full overflow-hidden max-h-[565px] sm:max-h-[700px] pt-10 sm:pt-20">
      {/* Background Image */}
      <img
        src={homeimg}
        alt="Background"
        className="w-full h-auto object-cover pointer-events-none"
      />

      {/* Dark Overlay + Centered Text */}
      <div className="absolute inset-0 sm:flex-row bg-black/60 flex flex-col items-center justify-center px-4">
        
        <div className="sm:flex-row flex flex-col  sm:space-x-2 space-y-4 sm:space-y-0 items-center">
          {/* GREENER */}
          <div className="relative group">
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center transition-opacity duration-500 group-hover:opacity-30">
              GREENER,
            </h1>
            <img
              src={greener}
              alt="Leaf"
              className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[80%] max-h-[80%]"
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
              className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[80%] max-h-[80%]"
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
              className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[80%] max-h-[80%]"
            />
          </div>
        </div>

        {/* Subtitle */}
        <h3 className="text-white text-lg sm:text-xl md:text-2xl py-6 sm:py-10 text-center hover:scale-105 transition-all duration-500">
          Home-grown, organic and biodegradable packaging material
        </h3>
      </div>

      {/* Border Overlays */}
      <img
        src={border}
        alt="Border Top"
        className="absolute top-16 sm:top-20 left-0 w-full pointer-events-none"
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
