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
    <div className="flex flex-col justify-center text-center px-6 py-2 space-y-5 w-full h-full">
      <h2 className="text-4xl font-bold pt-4">Meet the new NLS Team members</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {hiresToShow.map((hire, index) => (
          <div
            key={index}
            className="bg-slate-300 p-4 rounded-xl shadow w-64 flex-shrink-0"
          >
            <img
              src={hire.image}
              alt={hire.name}
              className="w-28 h-28 rounded-md mx-auto mb-4 object-cover"
            />
            <p className="text-xl font-semibold text-gray-800">{hire.name}</p>
            <p className="text-sm text-gray-800">{hire.department}</p>
            <p className="italic text-base mt-1 text-gray-800">
              {hire.welcomeMessage}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewHiresSlide;
