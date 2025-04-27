import React, { useState } from 'react';
import GooeyNav from '../../Reactbites/GooeyNav/GooeyNav';
import Logo from "../assets/logo.jpg";
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and Close icons

const items = [
  { label: "Home", href: "#home" },
  { label: "Team", href: "#team" },
  { label: "Contact Us", href: "#contact" },
  { label: "Work Gallery", href: "https://www.dharaksha.com/work-gallery" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className="fixed top-0 left-0 right-0 z-50 bg-white ">
      <div className="h-20 flex items-center justify-between px-4 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-8 md:h-10 w-auto" />
          <span className="text-xs text-black md:hidden">
            "पर्यावरण की रक्षा, दुनियां की सुरक्षा।"
          </span>
        </div>

        {/* Desktop Tagline */}
        <div className="hidden md:flex items-center text-sm md:text-base text-black hover:text-green-400 transition-colors duration-700 text-center">
          "पर्यावरण की रक्षा, दुनियां की सुरक्षा।"
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
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

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? (
              <HiX className="h-8 w-8 text-green-700" />
            ) : (
              <HiMenu className="h-8 w-8 text-green-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-lg py-4">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="py-2 text-green-800 font-semibold hover:text-green-500 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default Navbar;
