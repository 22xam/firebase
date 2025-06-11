import React, { useState, useEffect } from 'react';
import { fetchMemberSchedule } from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/services/memberDashboardService.js';

function MemberSchedule() {
  const [memberClasses, setMemberClasses] = useState([]);

  useEffect(() => {
    const getSchedule = async () => {
      // Assuming fetchMemberSchedule returns a Promise with the schedule data
      const scheduleData = await fetchMemberSchedule(); // Placeholder call
      setMemberClasses(scheduleData);
    };
    getSchedule();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="member-schedule">
      <h3 className="text-lg font-semibold mb-2">Mi Horario</h3>
      {memberClasses.length > 0 ? (
        <ul className="list-disc pl-5">
          {memberClasses.map(cls => (
            <li key={cls.id} className="mb-1">
              {cls.day}, {cls.time} - {cls.name} with {cls.instructor}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes clases programadas actualmente.</p>
      )}
    </div>
  );
}

export default MemberSchedule;