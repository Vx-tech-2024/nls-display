import React, { useEffect, useState } from 'react';
import customerRatings from '../data/customerRatings';
import { motion, AnimatePresence } from 'framer-motion';
import SlideLayout from './SlideLayout';

const getRandomIndex = (exclude) => {
  let index;
  do {
    index = Math.floor(Math.random() * customerRatings.length);
  } while (index === exclude); // avoid repeating the same image
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

    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={customerRatings[currentIndex]}
          src={customerRatings[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration }}
        />
      </AnimatePresence>
    </div>

  );
};

export default CustomerRatings;
