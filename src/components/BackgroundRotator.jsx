import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundRotator = ({ images = [], interval = 9000, opacity = 0.8, transitionDuration = 3 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const rotation = setInterval(() => {
      setIndex((prev) => {
        if (images.length <= 1) return prev;

        let next;
        do {
          next = Math.floor(Math.random() * images.length);
        } while (next === prev);

        return next;
      });
    }, interval);

    return () => clearInterval(rotation);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`Background ${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

export default BackgroundRotator;
