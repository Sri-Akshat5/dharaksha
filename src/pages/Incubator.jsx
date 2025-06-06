import React from 'react';
import i1 from '../assets/I1.png';
import i2 from '../assets/I2.png';
import i3 from '../assets/I3.png';
import i4 from '../assets/I4.jpg';
import i5 from '../assets/I5.png';

function Incubator() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Incubator</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo 1 */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 flex justify-center items-center rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-110 hover:shadow-2xl mx-auto">
            <a href="https://your-link-1.com" target="_blank" rel="noreferrer noopener">
              <img src={i1} alt="Logo 1" className="w-full h-full object-cover" />
            </a>
          </div>

          {/* Logo 2 */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 flex justify-center items-center rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-110 hover:shadow-2xl mx-auto">
            <a href="https://your-link-2.com" target="_blank" rel="noreferrer noopener">
              <img src={i2} alt="Logo 2" className="w-full h-full object-cover" />
            </a>
          </div>

          {/* Logo 3 */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 flex justify-center items-center rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-110 hover:shadow-2xl mx-auto">
            <a href="https://your-link-3.com" target="_blank" rel="noreferrer noopener">
              <img src={i3} alt="Logo 3" className="w-full h-full object-cover" />
            </a>
          </div>

          {/* Logo 4 */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 flex justify-center items-center rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-110 hover:shadow-2xl mx-auto">
            <a href="https://your-link-4.com" target="_blank" rel="noreferrer noopener">
              <img src={i4} alt="Logo 4" className="w-full h-full object-cover" />
            </a>
          </div>

          {/* Logo 5 */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 flex justify-center items-center rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-110 hover:shadow-2xl mx-auto">
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
