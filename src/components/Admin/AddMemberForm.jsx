jsx
import React, { useState } from 'react';
import { addMember } from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/services/memberService.js';

function AddMemberForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    membershipType: '',
    // Add other relevant fields here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.membershipType) {
      alert('Please fill in all required fields.');
      return;
    }

    // Handle form submission logic here (e.g., send data to backend)
    addMember(formData)
      .then(response => {
        console.log('Member added successfully:', response);
        // Optionally, clear the form or show a success message
      })
      .catch(error => console.error('Error adding member:', error));
    // Reset form or provide feedback
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Add New Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
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
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="membershipType" className="block text-gray-700 text-sm font-bold mb-2">
            Membership Type:
          </label>
          <select
            id="membershipType"
            name="membershipType"
            value={formData.membershipType}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Membership Type</option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Add more input fields as needed */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Member
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMemberForm;