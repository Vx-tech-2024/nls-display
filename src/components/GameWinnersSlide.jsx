import React, { useEffect, useState } from 'react';
import gameWinners from '../data/gameWinners';
import SlideLayout from './SlideLayout';
import { motion, AnimatePresence } from 'framer-motion';

const groupedWinners = (list) => {
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    const result = [];
    for (let i = 0; i < shuffled.length; i += 4) {
        result.push(shuffled.slice(i, i + 4));
    }
    return result;
};

function GameWinnersSlide() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        setSlides(groupedWinners(gameWinners));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); 
        return () => clearInterval(interval);
    }, [slides]);

    const getGridStyle = (count) => {
        if (count === 1) return "grid-cols-1 justify-center";
        if (count === 2) return "grid-cols-2";
        if (count === 3) return "grid-cols-3";
        if (count === 4) return "grid-cols-3";
        return "grid-cols-3";
    };

    const isCenterBottom = (index, groupLength) =>
        groupLength === 4 && index === 3;

    return (

            <div className="h-full w-full flex flex-col items-center justify-center space-y-16 px-8">
                <h2 className="text-5xl font-bold uppercase text-center">🏆Game Winners🏆 </h2>

                <div className="relative w-full max-w-7xl h-[400px] overflow-hidden">
                    <AnimatePresence mode="wait">
                        {slides.length > 0 && (
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.2 }}
                                className={`grid gap-12 ${getGridStyle(slides[currentSlide].length)} w-full`}
                            >
                                {slides[currentSlide].map((winner, index) => (
                                    <motion.div
                                        key={winner.game}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 * index, duration: 0.8 }}
                                        className={`bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center ${
                                            isCenterBottom(index, slides[currentSlide].length)
                                                ? "col-span-3 mx-auto"
                                                : ""
                                        }`}
                                    >
                                        <img
                                            src={winner.photo}
                                            alt={winner.winner}
                                            className="w-40 h-40 rounded-full object-cover border-8 border-blue-500 mb-6"
                                        />
                                        <h3 className="text-3xl font-semibold uppercase text-gray-600">{winner.game}</h3>
                                        <p className="text-xl font-medium text-gray-600">{winner.winner}</p>
                                        <p className="text-lg text-gray-500">{winner.department}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

    );
}

export default GameWinnersSlide;
