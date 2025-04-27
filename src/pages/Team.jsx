import React from 'react';
import t1 from '../assets/t1.avif';
import t2 from '../assets/t2.avif';
import t3 from '../assets/t3.avif';
import t4 from '../assets/t4.avif';
import t5 from '../assets/t5.avif';
import t6 from '../assets/t6.avif';
import base from '../assets/base.png';

// Team member data
const teamMembers = [
  {
    name: "ARPIT DHUPAR",
    role: "CEO",
    description: "CEO-Dharaksha Ecosolutions | Forbes 30 under 30 | Ex-CTO Chakr Innovation",
    image: t1,
  },
  {
    name: "ANAND BODH",
    role: "CBO",
    description: "Serial entrepreneur, Studied psychology, Decision influencer",
    image: t2,
  },
  {
    name: "PRIYA BARUAH",
    role: "Lead Product Development",
    description: "ex- Redcliffe lifesciences, gene modification, mycelium whisperer.",
    image: t3,
  },
  {
    name: "RAUNAQ MITTAL",
    role: "Plant Head & Core operations",
    description: "ex- plant head CKD pack, Engineer-MBA, core DNA in operations",
    image: t4,
  },
  {
    name: "SANJAY KUSHWAHA",
    role: "Design & Operations",
    description: "Ex- Chakr Innovation, Machine and automation specialist, scale at heart",
    image: t5,
  },
  {
    name: "RUDRANSH GARG",
    role: "Corporate & Strategic Communications",
    description: "Quick learner, admin and Jack of all trades in the company",
    image: t6,
  },
];

function Team() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12 px-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="w-full bg-gradient-to-b from-lime-200 to-lime-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-36 rounded-full mx-auto border-4 border-white"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-lg text-teal-600 mt-2">{member.role}</p>
                <p className="text-sm text-gray-600 mt-4">{member.description}</p>
                
              </div>
              <div>
                    <img src={base} className='h-30 w-full overflow-hidden'/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
