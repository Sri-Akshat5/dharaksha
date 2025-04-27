import React from 'react';
import i1 from '../assets/I1.png';
import i2 from '../assets/I2.png';
import i3 from '../assets/I3.png';
import i4 from '../assets/I4.jpg';
import i5 from '../assets/I5.png';

function Incubator() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Incubator</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">
          <div className="w-36 h-36 flex justify-center items-center rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-110 hover:shadow-2xl">
            <a href="https://your-link-1.com" target="_blank" rel="noreferrer noopener">
              <img src={i1} alt="Logo 1" className="w-full h-full object-cover" />
            </a>
          </div>

          <div className="w-36 h-36 flex justify-center items-center rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-110 hover:shadow-2xl">
            <a href="https://your-link-2.com" target="_blank" rel="noreferrer noopener">
              <img src={i2} alt="Logo 2" className="w-full h-full object-cover" />
            </a>
          </div>

          <div className="w-36 h-36 flex justify-center items-center rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-110 hover:shadow-2xl">
            <a href="https://your-link-3.com" target="_blank" rel="noreferrer noopener">
              <img src={i3} alt="Logo 3" className="w-full h-full object-cover" />
            </a>
          </div>

          <div className="w-36 h-36 flex justify-center items-center rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-110 hover:shadow-2xl">
            <a href="https://your-link-4.com" target="_blank" rel="noreferrer noopener">
              <img src={i4} alt="Logo 4" className="w-full h-full object-cover" />
            </a>
          </div>

          <div className="w-36 h-36 flex justify-center items-center rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-110 hover:shadow-2xl">
            <a href="https://your-link-5.com" target="_blank" rel="noreferrer noopener">
              <img src={i5} alt="Logo 5" className="w-full h-full object-cover" />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Incubator;
