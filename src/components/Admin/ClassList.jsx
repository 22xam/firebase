import React, { useState, useEffect } from 'react';
import { fetchClasses, deleteClass } from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/services/classService.js'; // Usar ruta absoluta

function ClassList({ onEdit }) {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch classes when the component mounts
    const getClasses = async () => {
      const classesData = await fetchClasses();
      setClasses(classesData);
    };
    getClasses();
  }, []);

  const handleDelete = async (classId) => {
    // Call the delete service and update the state
    await deleteClass(classId);
    setClasses(classes.filter(cls => cls.id !== classId)); // Optimistically update UI
  };

  const handleEdit = (cls) => {
    onEdit(cls); // Call the onEdit prop with the class object
    // This would typically involve setting state in a parent component
    // to show the EditClassForm with the class data
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Class Management</h2>
      <ul>
        {classes.map(cls => (
          <li key={cls.id} className="border-b last:border-b-0 border-gray-200 py-2 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium">{cls.name}</h3>
              <p className="text-sm text-gray-600">Instructor: {cls.instructor}</p>
              <p className="text-sm text-gray-600">Schedule: {cls.schedule}</p>
              <p className="text-sm text-gray-600">Capacity: {cls.capacity}</p>
            </div>
            <div>
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                onClick={() => handleEdit(cls)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => handleDelete(cls.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClassList;