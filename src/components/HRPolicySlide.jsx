import React from "react";
import hrAnnouncements from "../data/hrAnnouncements";
import policyTip from "../data/policyTip";
import { Megaphone, AlertTriangle, Info, ScrollText } from "lucide-react";
import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";

const priorityStyles = {
  info: "bg-blue-100 text-blue-800",
  alert: "bg-yellow-100 text-yellow-800",
  urgent: "bg-red-100 text-red-800",
};

const iconMap = {
  info: <Info className="w-8 h-8 inline-block mr-2" />,
  alert: <AlertTriangle className="w-8 h-8 inline-block mr-2" />,
  urgent: <Megaphone className="w-8 h-8 inline-block mr-2" />,
};

const HRPolicySlide = () => {
  const hasHRAnnouncements = Array.isArray(hrAnnouncements) && hrAnnouncements.length > 0;
  const hasPolicyTip = policyTip && policyTip.title && policyTip.description;

  if (!hasHRAnnouncements && !hasPolicyTip) return null;

  return (
      <motion.div
        className="w-full h-full flex flex-col items-center justify-center gap-5 px-8 overflow-y-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {hasHRAnnouncements && (
          <div className="w-full flex flex-col items-center gap-4">
            <h2 className="text-4xl font-bold text-center">📢 HR Announcements</h2>
            {hrAnnouncements.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-4 w-full max-w-4xl ${priorityStyles[item.priority] || "bg-gray-100"}`}
              >
                <h3 className="text-2xl font-semibold mb-2 flex items-center">
                  {iconMap[item.priority] || "📌"} {item.title}
                </h3>
                <p className="text-2xl">{item.message}</p>
                <p className="text-lg mt-4 italic text-gray-800">Posted on {item.date}</p>
              </div>
            ))}
          </div>
        )}

        {hasPolicyTip && (
          <div className="bg-gray-100 shadow-md rounded-2xl p-4 w-full max-w-3xl text-center flex flex-col items-center gap-8">
            <div className="text-blue-500">
              <ScrollText size={60} />
            </div>

            <h2 className="text-3xl font-bold text-gray-900">{policyTip.title}</h2>
            <p className="text-2xl text-black">{policyTip.description}</p>

            <div className="text-2xl text-black mt-4">
              Posted by <span className="font-medium">{policyTip.author}</span> on{" "}
              {new Date(policyTip.date).toLocaleDateString("en-KE", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
          </div>
        )}
      </motion.div>
  );
};

export default HRPolicySlide;
