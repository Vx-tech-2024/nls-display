import React from "react";
import SlideLayout from "./SlideLayout";
import specialDates from "../data/specialDates";

function SpecialDatesSlide() {
  const { birthdaysToday, anniversariesToday } = specialDates;

  const hasBirthdays = birthdaysToday && birthdaysToday.length > 0;
  const hasAnniversaries = anniversariesToday && anniversariesToday.length > 0;

  if (!hasBirthdays && !hasAnniversaries) return null;

  return (

      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold">Special Moments Today at NLS 🎉</h2>

        {hasBirthdays && (
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-pink-600">🎂 Birthdays</h3>
            {birthdaysToday.map((person, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow max-w-xl mx-auto text-left">
                <div className="flex items-center space-x-4">
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
              </div>
            ))}
          </div>
        )}

        {hasAnniversaries && (
          <div className="space-y-4 mt-8">
            <h3 className="text-2xl font-semibold text-blue-600">🎊 Work Anniversaries</h3>
            {anniversariesToday.map((person, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow max-w-xl mx-auto text-left">
                <div className="flex items-center space-x-4">
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
              </div>
            ))}
          </div>
        )}
      </div>

  );
}

export default SpecialDatesSlide;
