jsx
import React, { useState } from 'react';
import { classService } from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/services/classService.js';

function AddClassForm({ onClassAdded, onCancel }) {
  const [className, setClassName] = useState('');
  const [instructor, setInstructor] = useState('');
  const [schedule, setSchedule] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!className || !instructor || !schedule || !capacity) {
      alert('Please fill in all fields.');
 return;
    }
    // Basic validation
    if (!className || !instructor || !schedule || !capacity) {
      alert('Please fill in all fields.');
      return;
    }
    const newClass = {
      name: className,
      instructor,
      schedule,
      capacity: parseInt(capacity, 10), // Convert capacity to a number
    };

    // Call the class service to add the class (placeholder)
    classService.addClass(newClass)
      .then(() => {
        console.log('Class added successfully (placeholder)');
        onClassAdded(); // Notify parent component
        // Clear form
        setClassName('');
        setInstructor('');
        setSchedule('');
        setCapacity('');
      })
      .catch(error => console.error('Error adding class (placeholder):', error));
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold mb-4">Add New Class</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="className">
            Class Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="className"
            type="text"
            placeholder="Class Name"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructor">
            Instructor
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="instructor"
            type="text"
            placeholder="Instructor"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="schedule">
            Schedule
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="schedule"
            type="text"
            placeholder="e.g., Mon, Wed, Fri 10:00 AM"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="capacity">
            Capacity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="capacity"
            type="number"
            placeholder="Capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Class
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddClassForm;