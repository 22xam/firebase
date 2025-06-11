jsx
import React from 'react';

function Reports() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Informes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded">
          <h3 className="text-lg font-medium mb-2">Estadísticas de Membresía</h3>
          <p>Placeholder para un resumen o enlace a un informe detallado de membresías (ej. miembros activos, nuevas membresías, membresías por vencer).</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Ver Informe de Membresía</button>
        </div>
        <div className="border p-4 rounded">
          <h3 className="text-lg font-medium mb-2">Asistencia a Clases</h3>
          <p>Placeholder para un resumen o enlace a un informe de asistencia a clases por clase o por miembro.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Ver Informe de Asistencia</button>
        </div>
        <div className="border p-4 rounded">
          <h3 className="text-lg font-medium mb-2">Ingresos por Pagos</h3>
          <p>Placeholder para un resumen o enlace a un informe de ingresos por pagos.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Ver Informe de Ingresos</button>
        </div>
        {/* Add more report types as needed */}
      </div>
    </div>
  );
}

export default Reports;