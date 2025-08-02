import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles  } from 'lucide-react';
import motivationalQuote from '../data/motivationalQuote';
import SlideLayout from './SlideLayout';

const MotivationalQuoteSlide = () => {
    const { quote, author, date } = motivationalQuote;

    return (

        <motion.div
        className="bg-white shadow-lg rounded-2xl p-16 mx-auto max-w-4xl text-center flex flex-col items-center justify-center gap-12 h-screen"
        initial = {{ opacity: 0, scale: 0.95 }}
        animate = {{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1 }}
        >

            <div className="text-yellow-500">
                <Sparkles size={80} />
            </div>

            <blockquote className="text-4xl font-semibold text-black italic animate-fade-in-up delay-250">
                "{quote}"
            </blockquote>

            <p className="text-2xl text-black">— {author}</p>

            <p className="text-lg text-black mt-4">
                Posted on {new Date(date).toLocaleDateString("en-KE", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })}
            </p>
        </motion.div>

    );
};
export default MotivationalQuoteSlide;