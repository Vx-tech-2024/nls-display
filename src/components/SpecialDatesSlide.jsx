import React from "react";
import SlideLayout from "./SlideLayout";
import specialDates from "../data/specialDates";

function SpecialDatesSlide() {
  const today = new Date().toISOString().slice(0, 10);

  const birthdaysToday = specialDates.birthdaysToday.filter(b => b.date === today);
  const anniversariesToday = specialDates.anniversariesToday.filter(a => a.date === today);

  const hasBirthdays = birthdaysToday.length > 0;
  const hasAnniversaries = anniversariesToday.length > 0;

  if (!hasBirthdays && !hasAnniversaries) return null;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 py-6 space-y-6">
      <h2 className="text-4xl font-bold text-center">
        Special Moments Today at NLS 🎉
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-8 w-full max-w-6xl">

        {hasAnniversaries && (
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-semibold text-blue-600 text-center">
              🎊 Work Anniversaries
            </h3>
            {anniversariesToday.map((person, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow text-left flex items-center space-x-4"
              >
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold text-black">{person.name}</p>
                  <p className="text-sm text-black">{person.department}</p>
                  <p className="text-base italic mt-1 text-black">
                    {person.yearsAtNLS} {person.yearsAtNLS === 1 ? "year" : "years"} at NLS —{" "}
                    {person.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {hasBirthdays && (
          <div className="flex-1 space-y-4">
            <h3 className="text-3xl font-semibold text-pink-600 text-center">
              🎂 Birthdays
            </h3>
            {birthdaysToday.map((person, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow text-left flex items-center space-x-4"
              >
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold text-black">{person.name}</p>
                  <p className="text-sm text-black">{person.department}</p>
                  <p className="text-base italic mt-1 text-black">{person.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SpecialDatesSlide;
