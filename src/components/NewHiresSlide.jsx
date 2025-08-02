import React from "react";
import SlideLayout from "./SlideLayout";
import newHires from "../data/newHires";

function NewHiresSlide() {
    const now = new Date();

    const hiresToShow = newHires.filter((hire) => {
        if (!hire.startDate) return false;
        const start = new Date(hire.startDate);
        const diffDays = (now - start) / (1000 * 60 * 60 * 24);
        return diffDays >= 0 && diffDays <= 15;
    });

    if (hiresToShow.length === 0) return null;

    return (

            <div className="text-center space-y-6 ">
                <h2 className="text-4xl font-bold">Meet the new NLS Team members</h2>
                <div className="space-y-3 ">
                    {hiresToShow.map((hire, index) => (
                        <div key={index} className="bg-slate-300 p-3 rounded-xl shadow text-left max-w-xl mx-auto">
                            <img
                                src={hire.image}    
                                alt={hire.name}
                                className="w-28 h-28 rounded-md mx-auto mb-4"
                            />
                            <p className="text-xl font-semibold text-gray-800">{hire.name}</p>
                            <p className="text-sm text-gray-800">{hire.department}</p>
                            <p className="italic text-base mt-1 text-gray-800">{hire.welcomeMessage}</p>
                            </div>
                    ))}
                </div>
            </div>

    );
}

export default NewHiresSlide;