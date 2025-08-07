import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from "lucide-react";
import techTips from '../data/techTips';
import SlideLayout from './SlideLayout';


const TechTipSlide = () => {
    const { title, description, date, author } = techTips;

    return (

        <div className="flex items-center justify-center min-h-screen  bg-white">
            <motion.div
                className="bg-white shadow-lg rounded-3xl p-8 max-w-2xl text-center flex flex-col items-center gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="bg-yellow-100 text-yellow-800 text-6xl font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Tip of the Week
                </span>

                <div className="text-yellow-500">
                    <Lightbulb size={150} />
                </div>

                <h2 className="text-4xl font-bold text-black">{title}</h2>

                <p className="text-black text-3xl font-serif">{description}</p>

                <div className="text-sm text-black mt-2">
                    Posted by <span className="font-medium text-gray-500">{author}</span> on{" "}
                    {new Date(date).toLocaleDateString("en-KE", {
                        weekday: "long",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}
                </div>
            </motion.div>
        </div>

    );
};
export default TechTipSlide;