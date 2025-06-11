import React, { useState, useEffect } from 'react';
import { fetchAvailableClasses, enrollInClass } from '../../services/memberDashboardService.js'; // Use relative path

function AvailableClasses() {
  const [availableClasses, setAvailableClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAvailableClasses = async () => {
      const classes = await fetchAvailableClasses(); // Call the service function
      setAvailableClasses(classes);
      setLoading(false);
    };

    getAvailableClasses();
  }, []);

  const handleEnrollClick = (classId) => {
    console.log(`Enroll button clicked for class ID: ${classId}`);
    // Placeholder for enrollment logic
    enrollInClass(classId); // Call the service function
    // You might want to refresh the list or update the UI after enrollment
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold mb-4">Available Classes</h2>
      {availableClasses.length > 0 ? (
        <ul>
        {loading ? (
            <p>Loading classes...</p>
          ) : availableClasses.length > 0 ? (
            availableClasses.map(cls => (
              <li key={cls.id} className="border-b py-2 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{cls.name}</h3>
                  <p className="text-sm text-gray-600">Instructor: {cls.instructor}</p>
                  <p className="text-sm text-gray-600">Schedule: {cls.schedule}</p>
                  <p className="text-sm text-gray-600">Capacity: {cls.enrolled}/{cls.capacity}</p>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm"
                  onClick={() => handleEnrollClick(cls.id)}
                >
                  Enroll
                </button>
              </li>
            ))
          ) : (  // This part seems duplicated, will keep the first one for now
            <p>No classes available at this time.</p>
          )}
        </ul>
      ) : (
        <p>No classes available at this time.</p>
      )}
    </div>
  );
}

export default AvailableClasses;