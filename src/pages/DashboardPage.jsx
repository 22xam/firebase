import React from 'react';
import DashboardStatsCards from '/src/components/DashboardStatsCards.jsx';

function DashboardPage() {
  return (
    <div className="p-4"> {/* Padding general */}
      <h1 className="text-2xl font-bold mb-4">Dashboard del Gimnasio</h1> {/* Título */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Aquí irán los componentes de estadísticas (DashboardStatsCards) */}
        <DashboardStatsCards />
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Pagos Recientes</h2>
          <p>Placeholder para lista de pagos recientes...</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Alertas de Membresía</h2>
          <p>Placeholder para alertas de membresía...</p>
        </div>
      </div>

      {/* Aquí podrías añadir espacio para gráficos u otros elementos */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Gráficos/Otra Información</h2>
        <p>Placeholder para gráficos o secciones adicionales...</p>
      </div>
    </div>
  );
}

export default DashboardPage;