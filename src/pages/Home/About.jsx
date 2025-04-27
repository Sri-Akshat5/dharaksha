import React from 'react';
import about from "../../assets/about.gif";
import circle from "../../assets/circle.png";
import '../../App.css';

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        
        {/* Text Section */}
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Dharaksha Ecosolutions is an environment-conscious startup specializing in biodegradable packaging materials.
            Based in Delhi and incubated at RCB (Regional Center for Biotechnology), we aim to combat stubble burning 
            and plastic pollution by creating sustainable alternatives.
            Backed by experienced scientists, innovators, and entrepreneurs,
            we are committed to protecting the future of our planet.
          </p>
          <img src={circle} alt="Rotating Circle" className="rotating-circle" />
          {/* Button with rotating circle */}
          <div className="button-wrapper">
           
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>

        {/* Image Section */}
        <div className="about-image">
          <img src={about} alt="About Dharaksha" />
        </div>

      </div>
    </div>
  );
}

export default About;
