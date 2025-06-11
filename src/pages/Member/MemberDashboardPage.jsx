import React, { useState, useEffect } from 'react';
import MemberProfile from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/components/Member/MemberProfile.jsx';
import AvailableClasses from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/components/Member/AvailableClasses.jsx';
import MemberSchedule from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/components/Member/MemberSchedule.jsx';
import { subscribeUserToPush } from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/services/notificationService.js';



function MemberDashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard del Miembro</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Mi Perfil</h2>
          <MemberProfile />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Clases Disponibles</h2>
          <AvailableClasses />
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Mi Horario</h2>
        <MemberSchedule />
      </div>

      <div className="bg-white p-4 rounded shadow mt-8">
        <h2 className="text-xl font-semibold">Notificaciones</h2>
        <p className="mb-2">Controla tus notificaciones push.</p>
        <button
          onClick={subscribeUserToPush}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Activar Notificaciones
        </button>
        {/* Puedes añadir aquí el estado actual del permiso si lo manejas */}
      </div>
    </div>
  );
}

export default MemberDashboardPage;