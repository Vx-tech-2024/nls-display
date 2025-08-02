import React from 'react';
import { motion } from 'framer-motion';
import { ScrollText } from 'lucide-react';
import policyTip from '../data/policyTip';
import SlideLayout from './SlideLayout';

const PolicyRemindersSlide = () => {
    const { title, description, date, author } = policyTip;

    return (

        <motion.div
        className="bg-white shadow-md rounded-2xl p-10 mx-auto max-w-2xl text-center flex flex-col items-center gap-8 justify-center h-screen"
        initial={{ opacity: 0, y: 30}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >

            <div className="text-blue-500">
                <ScrollText size={80} />
            </div>

            <h2 className="text-4xl font-bold text-gray-800">{title}</h2>

            <p className="text-3xl text-black">{description}</p>

            <div className="text-3xl text-black mt-4">
                Posted by <span className="font-medium text-black text-3xl">{author}</span> on {""}
                {new Date(date).toLocaleDateString("en-KE", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })}
            </div>
        </motion.div>

    );
}

export default PolicyRemindersSlide;