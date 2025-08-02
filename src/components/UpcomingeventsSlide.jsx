import React from "react";
import upcomingEvents from "../data/upcomingEvents";
import { CalendarDays } from "lucide-react";
import SlideLayout from "./SlideLayout";

const getDaysLeft = (dateStr) => {
    const today = new Date();
    const eventDate = new Date(dateStr);
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};

const UpcomingEventsSlide = () => {
    const today = new Date();
    const futureEvents = upcomingEvents.filter(e => new Date(e.date) >= today);
    if (futureEvents.length === 0) return null;

    return (
 
            <div className="p-6 rounded-2xl shadow-xl bg-white text-gray-900 w-full h-full flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold mb-4 text-center">
                    📅 Upcoming Events
                </h2>

                {futureEvents.map((event, idx) => {
                    const daysLeft = getDaysLeft(event.date);
                    return (
                        <div
                            key={idx}
                            className="bg-blue-50 text-blue-900 p-4 rounded-xl shadow w-full max-w-2xl mb-4"
                        >
                            <h3 className="text-4xl font-semibold mb-1 flex items-center">
                                <CalendarDays className="w-5 h-5 mr-2" />
                                {event.name}
                            </h3>
                            <p className="text-sm italic text-gray-600 mb-2">
                                {daysLeft === 0
                                    ? "🎉 Happening Today!"
                                    : `🕒 In ${daysLeft} day${daysLeft > 1 ? "s" : ""}`}
                            </p>
                            <p><strong>Date:</strong> {event.date} at {event.time}</p>
                            <p><strong>Location:</strong> {event.location}</p>
                            <p className="mt-2 text-3xl">{event.description}</p>
                        </div>
                    );
                })}
            </div>
  
    );
};

export default UpcomingEventsSlide;
