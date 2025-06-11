import React from 'react';

function DashboardStatsCards() {
  // Placeholder data - replace with actual data from props or state later
  const stats = [
    { title: 'Total Miembros', value: '500' },
    { title: 'Pagos Hoy', value: '$ 2,500' },
    { title: 'Membresías Expiradas', value: '35' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">{stat.title}</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardStatsCards;