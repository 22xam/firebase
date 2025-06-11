jsx
import React from 'react';

function ScheduleManager() {
  // Placeholder data for the schedule
  const scheduleData = [
    { day: 'Monday', time: '9:00 AM', className: 'Yoga', instructor: 'Alice' },
    { day: 'Monday', time: '10:00 AM', className: 'Zumba', instructor: 'Bob' },
    { day: 'Tuesday', time: '9:00 AM', className: 'Pilates', instructor: 'Charlie' },
    { day: 'Tuesday', time: '11:00 AM', className: 'Strength Training', instructor: 'Alice' },
    // Add more placeholder data as needed
  ];

  return (
    <div className="bg-white p-4 rounded shadow mb-8">
      <h2 className="text-xl font-semibold mb-4">Gestión de Horarios</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Day
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Class
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Instructor
            </th>
            {/* Add columns for actions like edit/delete if needed */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {scheduleData.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{item.day}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.className}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.instructor}</td>
              {/* Add action buttons here if needed */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add buttons for adding/editing schedule entries if needed */}
    </div>
  );
}

export default ScheduleManager;