import React from 'react';
import GooeyNav from '../../Reactbites/GooeyNav/GooeyNav';
import Logo from "../assets/logo.jpg";

const items = [
  { label: "Home", href: "#home" },
  { label: "Team", href: "#team" },
  { label: "Contact Us", href: "#contact" },
  { label: "Work Gallery", href: "https://www.dharaksha.com/work-gallery" },
];

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-8 py-5 bg-white ">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Tagline Section */}
      <div className="flex items-center text-black hover:text-green-400 transition-colors duration-700">
        "पर्यावरण की रक्षा, दुनियां की सुरक्षा।"
      </div>

      {/* Navigation Section */}
      <div className="flex items-center">
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </div>
  );
}

export default Navbar;
