jsx
import React, { useState, useEffect } from 'react';

// Use absolute path
import { classService } from '../../services/classService.js'; // Use absolute path
function EditClassForm({ classData, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    instructor: '',
    schedule: '',
    capacity: '',
  });

  useEffect(() => {
    if (classData) {
      setFormData({
        name: classData.name || '',
        instructor: classData.instructor || '',
        schedule: classData.schedule || '',
        capacity: classData.capacity || '',
      });
    }
  }, [classData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.instructor || !formData.schedule || !formData.capacity) {
      alert('Please fill in all fields.');
      return;
    }
    if (isNaN(parseInt(formData.capacity, 10))) {
      alert('Capacity must be a number.');
 return;
    }

    // Call the classService to update the class
    classService.updateClass(classData.id, formData)
      .then(() => onSave(formData)); // Call onSave after successful update
  };

  return (
    <div className="bg-white p-6 rounded shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Edit Class</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Class Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructor">
            Instructor
          </label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="schedule">
            Schedule
          </label>
          <input
            type="text"
            id="schedule"
            name="schedule"
            value={formData.schedule}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="capacity">
            Capacity
          </label>
          <input
            type="number"
            id="capacity"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditClassForm;