import React from 'react';
import milestones from '../data/milestones';
import { motion } from 'framer-motion';
import SlideLayout from './SlideLayout';
import BackgroundRotator from './BackgroundRotator';
import milestone1 from '../assets/milestones/milestone 1.jpg';
import milestone2 from '../assets/milestones/milestone 2.jpg';
import milestone3 from '../assets/milestones/milestone 3.jpg';
import milestone4 from '../assets/milestones/milestone 4.jpg';
import milestone5 from '../assets/milestones/milestone 5.jpg';
import milestone6 from '../assets/milestones/milestone 6.jpg';
import milestone7 from '../assets/milestones/milestone 7.jpg';
import milestone8 from '../assets/milestones/milestone 8.jpg';
import milestone9 from '../assets/milestones/milestone 9.jpg';
import milestone10 from '../assets/milestones/milestone 10.jpg';
import milestone11 from '../assets/milestones/milestone 11.jpg';
import milestone12 from '../assets/milestones/milestone 12.jpg';
import milestone13 from '../assets/milestones/milestone 13.jpg';
import milestone14 from '../assets/milestones/milestone 14.jpg';
import milestone15 from '../assets/milestones/milestone 15.jpg';
import milestone16 from '../assets/milestones/milestone 16.jpg';
import milestone17 from '../assets/milestones/milestone 17.jpg';
import milestone18 from '../assets/milestones/milestone 18.jpg';

const backgroundImages = [
    milestone1, milestone2, milestone3, milestone4, milestone5, milestone6, milestone7, milestone8, milestone9, milestone10, milestone11, milestone12, milestone13, milestone14, milestone15, milestone16, milestone17, milestone18  
];

const Milestones = () => {
  return (


      <div className="relative w-4/5 h-screen overflow-hidden bg-white">

        <BackgroundRotator images={backgroundImages} interval={8000} opacity={0.8} />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <motion.h1
            className="text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Company Milestones
          </motion.h1>

          <div className="space-y-6 max-w-3xl">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h2 className="text-4xl font-bold text-gray-950">
                  {item.title}
                </h2>
                <p className="text-2xl text-gray-900 font-semibold">{item.description}</p>
                <p className="text-sm mt-2 text-gray-800">
                  {new Date(item.date).toLocaleDateString("en-KE", {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

  );
};

export default Milestones;
