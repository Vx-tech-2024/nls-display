import React from "react";
import hrAnnouncements from "../data/hrAnnouncements";
import { Megaphone, AlertTriangle, Info } from "lucide-react";
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

const HRAnnouncementsSlide = () => {
    if (!hrAnnouncements || hrAnnouncements.length === 0) return null;

    return (

            <div className="p-12 rounded-3xl shadow-2xl bg-white text-gray-900 w-full h-full flex flex-col gap-12 justify-center items-center">
                <h2 className="text-6xl font-bold text-center">📢 HR Announcements</h2>

                {hrAnnouncements.map((item, idx) => (
                    <div
                        key={idx}
                        className={`rounded-2xl p-8 w-full max-w-4xl ${priorityStyles[item.priority] || "bg-gray-100"}`}
                    >
                        <h3 className="text-3xl font-semibold mb-2 flex items-center">
                            {iconMap[item.priority] || "📌"} {item.title}
                        </h3>
                        <p className="text-2xl">{item.message}</p>
                        <p className="text-lg mt-4 italic text-gray-600">Posted on {item.date}</p>
                    </div>
                ))}
            </div>

    );
};

export default HRAnnouncementsSlide;
