import React from 'react';
import c1 from "../assets/c1.avif";
import c2 from "../assets/c2.avif";
import c3 from "../assets/c3.avif";

function Client() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Our Trusted Clients
        </h2>
        <div className="flex justify-center gap-12 mb-8">
          {/* Client 1 */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <img
              src={c1}
              alt="Client 1"
              className="w-32 h-32 object-contain mx-auto"
            />
          </div>

          {/* Client 2 */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <img
              src={c2}
              alt="Client 2"
              className="w-32 h-32 object-contain mx-auto"
            />
          </div>

          {/* Client 3 */}
          <div className="transform transition-all duration-300 hover:scale-110">
            <img
              src={c3}
              alt="Client 3"
              className="w-32 h-32 object-contain mx-auto"
            />
          </div>
        </div>

        {/* Call to action line */}
        <p className="text-xl text-gray-600">
          We are looking for more amazing partners! <br />
          Want to work with us? Get in touch today.
        </p>
      </div>
      <div >
      <hr class="mb-5 mt-20 mx-10 border-zinc-700 bord border-b-2 "/>
      </div>
    </div>
  );
}

export default Client;
