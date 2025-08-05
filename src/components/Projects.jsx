import React from 'react';
import SlideLayout from './SlideLayout';
import projects from '../data/projects';

function Projects() {
  const lastMonthProjects = projects.lastmonth;
  const thisMonthProjects = projects.thismonth;

  return (

      <div className="w-full h-full flex flex-col items-center justify-center px-8">
        <h2 className="text-5xl font-bold mb-10 text-center text-gray-900">
          📊 Last Month and This Month Projects
        </h2>

        <table className="table-auto border-collapse w-full max-w-4xl text-2xl text-left shadow-xl">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-6 py-4 text-center">Last Month ({lastMonthProjects.length})</th>
              <th className="border px-6 py-4 text-center">This Month ({thisMonthProjects.length})</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.max(lastMonthProjects.length, thisMonthProjects.length) }).map((_, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="border px-6 py-4">
                  {lastMonthProjects[index] || " "}
                </td>
                <td className="border px-6 py-4">
                  {thisMonthProjects[index] || " "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  );
}

export default Projects;
