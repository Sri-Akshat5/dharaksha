import React from 'react';
import c1 from "../assets/c1.avif";
import c2 from "../assets/c2.avif";
import c3 from "../assets/c3.avif";

function Client() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Our Trusted Clients
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-8">
          {/* Client 1 */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <img
              src={c1}
              alt="Client 1"
              className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto"
            />
          </div>

          {/* Client 2 */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <img
              src={c2}
              alt="Client 2"
              className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto"
            />
          </div>

          {/* Client 3 */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <img
              src={c3}
              alt="Client 3"
              className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto"
            />
          </div>
        </div>

        {/* Call to action line */}
        <p className="text-base md:text-xl text-gray-600">
          We are looking for more amazing partners! <br />
          Want to work with us? Get in touch today.
        </p>
      </div>

      <div>
        <hr className="mb-5 mt-20 mx-10 border-zinc-700 border-b-2" />
      </div>
    </div>
  );
}

export default Client;
