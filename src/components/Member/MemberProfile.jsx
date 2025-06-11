import React, { useState, useEffect } from 'react';
import { getMemberProfile } from '../../services/memberDashboardService';

function MemberProfile() {
  const [memberProfile, setMemberProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Placeholder data for the member's profile
  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getMemberProfile(); // Call the service function
      setMemberProfile(profile);
      setLoading(false);
    };
    fetchProfile();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Name:</p>
          <p className="text-lg font-semibold">{memberProfile.name}</p>
        </div>
        {memberProfile && (
          <>
            <div>
          <p className="text-gray-600">Email:</p>
          <p className="text-lg font-semibold">{memberProfile.email}</p>
        </div>
        <div>
          <p className="text-gray-600">Membership Type:</p>
          <p className="text-lg font-semibold">{memberProfile.membershipType}</p>
        </div>
            <div>
          <p className="text-gray-600">Membership Status:</p>
          <p className="text-lg font-semibold">{memberProfile.membershipStatus}</p>
        </div>
        <div>
          <p className="text-gray-600">Membership Start Date:</p>
              <p className="text-lg font-semibold">{memberProfile.startDate ? new Date(memberProfile.startDate).toLocaleDateString() : 'N/A'}</p>
        </div>
        <div>
          <p className="text-gray-600">Membership End Date:</p>
              <p className="text-lg font-semibold">{memberProfile.endDate ? new Date(memberProfile.endDate).toLocaleDateString() : 'N/A'}</p>
        </div>
          </>
        )}
      {/* Add more profile details as needed */}
    </div>
  );
 }

export default MemberProfile;