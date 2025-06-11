import React, { useState, useEffect } from 'react';

import MemberList from '../../components/Admin/MemberList.jsx'; // Keep this import
import AddMemberForm from '../../components/Admin/AddMemberForm.jsx';
import EditMemberForm from '../../components/Admin/EditMemberForm.jsx';
import ClassList from '../../components/Admin/ClassList.jsx';
import AddClassForm from '../../components/Admin/AddClassForm.jsx';
import EditClassForm from '../../components/Admin/EditClassForm.jsx';
import ScheduleManager from '../../components/Admin/ScheduleManager.jsx';
import Reports from '../../components/Admin/Reports.jsx';

function AdminDashboardPage() {
  const [showAddMember, setShowAddMember] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [showAddClass, setShowAddClass] = useState(false);
  const [editingClass, setEditingClass] = useState(null);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Sección de Gestión de Miembros */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Gestión de Miembros</h2>
          {showAddMember ? (
            <AddMemberForm onCancel={() => setShowAddMember(false)} onMemberAdded={() => setShowAddMember(false)} />
          ) : editingMember ? (
            <EditMemberForm member={editingMember} onCancel={() => setEditingMember(null)} onMemberUpdated={() => setEditingMember(null)} />
          ) : (
            <>
              <button
                onClick={() => setShowAddMember(true)}
                className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Añadir Nuevo Miembro
              </button>
              <MemberList onEditMember={setEditingMember} />
            </>
          )}
        </div>

        {/* Sección de Gestión de Clases */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Gestión de Clases</h2>
          {showAddClass ? (
            <AddClassForm onCancel={() => setShowAddClass(false)} onClassAdded={() => setShowAddClass(false)} />
          ) : editingClass ? (
            <EditClassForm classData={editingClass} onCancel={() => setEditingClass(null)} onClassUpdated={() => setEditingClass(null)} />
          ) : (
            <>
              <button
                onClick={() => setShowAddClass(true)}
                className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Añadir Nueva Clase
              </button>
              <ClassList onEditClass={setEditingClass} />
            </>
          )}
        </div>

        {/* Sección de Gestión de Horarios */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Gestión de Horarios</h2>
          <ScheduleManager />
        </div>

        {/* Sección de Informes */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Informes</h2>
          <Reports />
        </div>
      </div>

      {/* Otras secciones o información */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Actividad Reciente / Alertas</h2>
        <p>Placeholder para mostrar actividad reciente del gimnasio o alertas importantes.</p>
      </div>
    </div>
  );
}

export default AdminDashboardPage;