import React from 'react';
import milestones from '../data/milestones';
import { motion } from 'framer-motion';
import SlideLayout from './SlideLayout';
import BackgroundRotator from './BackgroundRotator';

const backgroundImages = [
    '/assets/milestones/milestone 1.jpg',
    '/assets/milestones/milestone 2.jpg',
    '/assets/milestones/milestone 3.jpg',
    '/assets/milestones/milestone 4.jpg',
    '/assets/milestones/milestone 5.jpg',
    '/assets/milestones/milestone 6.jpg',
    '/assets/milestones/milestone 7.jpg',
    '/assets/milestones/milestone 8.jpg',
    '/assets/milestones/milestone 9.jpg',
    '/assets/milestones/milestone 10.jpg',
    '/assets/milestones/milestone 11.jpg',
    '/assets/milestones/milestone 12.jpg',
    '/assets/milestones/milestone 13.jpg',
    '/assets/milestones/milestone 14.jpg',
    '/assets/milestones/milestone 15.jpg',
    '/assets/milestones/milestone 16.jpg',
    '/assets/milestones/milestone 17.jpg',
    '/assets/milestones/milestone 18.jpg'
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
                <h2 className="text-3xl font-semibold text-yellow-300">
                  {item.title}
                </h2>
                <p className="text-lg">{item.description}</p>
                <p className="text-sm mt-2 text-gray-200">
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
