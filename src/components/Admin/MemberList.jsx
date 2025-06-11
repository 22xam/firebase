jsx
import React, { useState, useEffect } from 'react';
import { fetchMembers, deleteMember } from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/services/memberService.js'; // Usar ruta absoluta

const MemberList = () => {
  const [members, setMembers] = useState([]); // Accept onEdit prop

  useEffect(() => {
    // Fetch members when the component mounts
    const getMembers = async () => {
      const fetchedMembers = await fetchMembers(); // Call the service function
      setMembers(fetchedMembers);
    };

    getMembers();
  }, []); // Empty dependency array means this runs once on mount

  const handleDelete = async (memberId) => {
    // Placeholder for delete logic
    console.log(`Attempting to delete member with ID: ${memberId}`);
    const success = await deleteMember(memberId); // Call the service function
    if (success) {
      // If deletion is successful, update the state to remove the member
      setMembers(members.filter(member => member.id !== memberId));
    } else {
      console.error(`Failed to delete member with ID: ${memberId}`);
    }
  };

 // Placeholder data
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Member List</h2>
      {members.length > 0 ? (<ul>
        {members.map(member => (
          <li key={member.id} className="border-b last:border-b-0 py-2 flex justify-between items-center">
            <div>
              <p className="font-semibold">{member.name}</p>
              <p className="text-sm text-gray-600">{member.email} - {member.membership}</p>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-2 rounded mr-2" onClick={() => onEdit(member)}>Edit</button>{/* Edit functionality will be added later */}
              <button className="bg-red-500 hover:bg-red-700 text-white text-sm py-1 px-2 rounded" onClick={() => handleDelete(member.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>) : (<p>No members found.</p>)

      }
    </div>
  );
};

export default MemberList;