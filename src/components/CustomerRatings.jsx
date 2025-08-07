import React, { useEffect, useState } from 'react';
import customerRatings from '../data/customerRatings.js';
import { motion, AnimatePresence } from 'framer-motion';

const getRandomIndex = (exclude) => {
  let index;
  do {
    index = Math.floor(Math.random() * customerRatings.length);
  } while (index === exclude); 
  return index;
};

const CustomerRatings = ({ interval = 10000, transitionDuration = 1.5 }) => {
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * customerRatings.length));

  useEffect(() => {
    const rotation = setInterval(() => {
      setCurrentIndex((prev) => getRandomIndex(prev));
    }, interval);

    return () => clearInterval(rotation);
  }, [interval]);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center space-y-2 px-2">
      <div className="text-8xl font-bold text-gray-950 text-center">
        Customer Feedback
      </div>

      <div className="min-w-full max-w-2xl h-5/6 relative overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={customerRatings[currentIndex]}
            src={customerRatings[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: transitionDuration }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CustomerRatings;
