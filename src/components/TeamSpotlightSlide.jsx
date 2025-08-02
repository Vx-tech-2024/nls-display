import React from "react";
import SlideLayout from "./SlideLayout";
import teamSpotlight from "../data/teamSpotlight";

function TeamSpotlightSlide() {
    const today = new Date();
    const day = today.getDay();

    if (day !== 3 && day !== 5) return null;

    return (

            <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">Team Member Spotlight🌟</h2>
                <div className="bg-white text-black p-6 rounded-xl shadow max-w-xl mx-auto space-y-2">
                    <img
                        src={teamSpotlight.image}    
                        alt={teamSpotlight.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <p className="text-xl font-semibold text-gray-600">{teamSpotlight.name}</p>
                    <p className="text-sm text-gray-600">{teamSpotlight.department}</p>
                    <p className="italic mt-2 text-gray-600">{teamSpotlight.funFact}</p>
                </div>
            </div>

    );
}

export default TeamSpotlightSlide;