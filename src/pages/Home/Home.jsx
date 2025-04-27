import React from 'react';
import homeimg from '../../assets/home1.jpg';
import border from '../../assets/border.png';
import greener from '../../assets/greener.jpg';
import clean from '../../assets/clean.jpeg';
import sustain from '../../assets/sustain.jpeg';

function Home() {
  return (
    <div className="relative w-full overflow-hidden max-h-[565px] pt-20">
      {/* Background Image */}
      <img
        src={homeimg}
        alt="Background"
        className="w-full h-auto object-cover pointer-events-none"
      />

      {/* Dark Overlay + Centered Text */}
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
        
        <div className="flex space-x-2">
          {/* GREENER */}
          <div className="relative group">
            <h1 className="text-white text-4xl  font-bold md:text-6xl text-center transition-opacity duration-500 group-hover:opacity-30">
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
            <h1 className="text-white text-4xl font-bold md:text-6xl text-center transition-opacity duration-500 group-hover:opacity-30">
              CLEANER,
            </h1>
            <img
              src={clean}
              alt="Leaf"
              className="absolute inset-0  m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          {/* SUSTAINABLE */}
          <div className="relative group ">
            <h1 className="text-white text-4xl font-bold md:text-6xl text-center transition-opacity duration-500 group-hover:opacity-30">
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
        <h3 className="text-white text-2xl py-10 text-center px-4 hover:text-4xl">
          Home-grown, organic and biodegradable packaging material
        </h3>
      </div>

      {/* Border Overlays */}
      <img
        src={border}
        alt="Border Top"
        className="absolute top-20 left-0 w-full pointer-events-none"
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
