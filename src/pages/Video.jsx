import React from 'react';
import bg from "../assets/videobg.jpeg";

import border from '../assets/border.png';

function Video() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      {/* Green blur overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500 to-transparent h-1/3"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Watch Our Videos</h2>
        <p className="text-lg text-center mb-12">
          Check out these amazing videos for more insight and information.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
          {/* Video 1 */}
          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg w-full">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/5Z2TjokMBRw" // Correct YouTube Embed Link
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video 1"
                className="transform transition-all duration-500 hover:scale-105"
              ></iframe>
              <div className="absolute inset-0 bg-white opacity-10 hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>

          {/* Video 2 */}
          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg w-full">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/1M5I6_A28D4" // Correct YouTube Embed Link
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video 2"
                className="transform transition-all duration-500 hover:scale-105"
              ></iframe>
              <div className="absolute inset-0 bg-white opacity-10 hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={border}
        alt="Border Top"
        className="relative z-0 bottom-0 rotate-180 drop-shadow-xl left-0 w-full pointer-events-none"
      />
    </div>
  );
}

export default Video;
