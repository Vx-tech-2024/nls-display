import React from 'react';
import SlideLayout from './SlideLayout';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from 'recharts';
import projects from '../data/projects';

const COLORS = ['#0088FE', '#00C49F'];

function Projects() {
  // Calculate counts
  const lastWeekCount = projects.lastWeek.length;
  const thisWeekCount = projects.thisWeek.length;

  const chartData = [
    { name: 'Last Week', value: lastWeekCount },
    { name: 'This Week', value: thisWeekCount }
  ];

  return (

      <div className="w-full h-[500px] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-6">Projects Completed Comparison</h2>
        <div className="w-3/5 h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label = {({ name, value }) => `${name} : ${value}`}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`slice-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

  );
}

export default Projects;
