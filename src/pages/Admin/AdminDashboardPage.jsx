import React, { useState, useEffect } from 'react';

function EditMemberForm({ member, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    membershipType: '',
  });

  useEffect(() => {
    if (member) {
      setFormData({
        name: member.name,
        email: member.email,
        membershipType: member.membershipType,
      });
    }
  }, [member]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold mb-4">Editar Miembro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="membershipType" className="block text-gray-700 text-sm font-bold mb-2">Tipo de Membresía:</label>
          <input type="text" id="membershipType" name="membershipType" value={formData.membershipType} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Guardar Cambios
          </button>
          <button type="button" onClick={onCancel} className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditMemberForm;
jsx
import React from 'react';
import { useState } from 'react';
import MemberList from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/components/Admin/MemberList.jsx';
import AddMemberForm from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/components/Admin/AddMemberForm.jsx';
import EditMemberForm from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/components/Admin/EditMemberForm.jsx';
import ClassList from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/components/Admin/ClassList.jsx';
import AddClassForm from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/components/Admin/AddClassForm.jsx';
import EditClassForm from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/components/Admin/EditClassForm.jsx';
import ScheduleManager from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/components/Admin/ScheduleManager.jsx';
import Reports from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/components/Admin/Reports.jsx';

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