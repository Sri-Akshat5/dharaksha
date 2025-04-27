import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; 


import border from '../assets/border.png';


function Footer() {
  return (
    <div className="relative  ">
            <img
            src={border}
            alt="Border Top"
            className=" drop-shadow-xl relative z-0 top-0 left-0 w-full pointer-events-none"
        />
       
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-sm">
            We're a team of passionate creators committed to delivering the best products to our users. Our mission is to make life easier, better, and more fun.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-yellow-300 transition-all">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-300 transition-all">Team</a></li>
            <li><a href="#services" className="hover:text-yellow-300 transition-all">Contact Us</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition-all">Work gallery</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <p className="text-sm">Email: anand@dharaksha.com</p>
          <p className="text-sm">Phone: +91 9205336261</p>
         
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-6 text-3xl">
            <a href="https://facebook.com" className="hover:text-yellow-300 transform transition-all duration-300 hover:scale-125">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="hover:text-yellow-300 transform transition-all duration-300 hover:scale-125">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="hover:text-yellow-300 transform transition-all duration-300 hover:scale-125">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="hover:text-yellow-300 transform transition-all duration-300 hover:scale-125">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm py-4 bg-emerald-950">
        <p className="text-amber-50">&copy; 2023 by Dharaksha Ecosolutions</p>
        <p className="text-amber-50">Design and Developer by <a href=" https://www.linkedin.com/in/sriakshat5/" className="text-blue-600">Akshat Srivastava</a></p>
      </div>
    </div>
  );
}

export default Footer;
