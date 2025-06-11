import React from 'react';
import DashboardStatsCards from '/src/components/DashboardStatsCards.jsx'; // Assuming this component displays the cards
import useAuth from '/src/hooks/useAuth.js';
import useMembers from '/src/hooks/useMembers.js';
import useMemberships from '/src/hooks/useMemberships.js';
import usePayments from '/src/hooks/usePayments.js';


function DashboardPage() {
  const { user } = useAuth(); // Assuming you fetch user info here if needed
  const { members, loading: membersLoading } = useMembers();
  const { memberships, loading: membershipsLoading } = useMemberships();
  const { payments, loading: paymentsLoading } = usePayments();

  // Basic calculations (you might want more sophisticated logic in hooks or utils)
  const totalMembers = members.length;
  const activeMembers = members.filter(member => member.isActive).length; // Assuming a member has an 'isActive' property

  // Filter memberships expiring soon (e.g., in the next 30 days)
  const expiringMemberships = memberships.filter(membership => {
    const expiryDate = new Date(membership.endDate); // Assuming membership has an 'endDate'
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
    return expiryDate <= thirtyDaysFromNow && expiryDate >= new Date();
  });

  // Get recent payments (e.g., the last 5)
  const recentPayments = payments.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5); // Assuming payments have a 'date' property

  const loading = membersLoading || membershipsLoading || paymentsLoading;

  if (loading) {
    return <div className="p-4">Cargando datos del dashboard...</div>;
  }

  return (
    <div className="p-4"> {/* Padding general */}
      <h1 className="text-2xl font-bold mb-4">Dashboard del Gimnasio</h1> {/* Título */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Aquí irán los componentes de estadísticas (DashboardStatsCards) */}
        {/* You can pass the calculated stats to DashboardStatsCards */}
        <DashboardStatsCards
          totalMembers={totalMembers}
          activeMembers={activeMembers}
          expiringMemberships={expiringMemberships.length}
          recentPaymentsCount={recentPayments.length} // Or total amount etc.
        />
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Pagos Recientes</h2>
          <ul>
            {recentPayments.map(payment => (
              <li key={payment.id}>{payment.member} - {payment.amount} - {new Date(payment.date).toLocaleDateString()}</li> // Adjust based on your payment object structure
            ))}
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Alertas de Membresía</h2>
          <ul>
            {expiringMemberships.map(membership => (
              <li key={membership.id}>{membership.member} - Vence en: {new Date(membership.endDate).toLocaleDateString()}</li> // Adjust based on your membership object structure
            ))}
          </ul>
        </div>
      </div>

      {/* Aquí podrías añadir espacio para gráficos u otros elementos */}
      <div className="bg-white p-4 rounded shadow mt-4">
        <h2 className="text-xl font-semibold">Gráficos/Otra Información</h2>
        <p>Placeholder para gráficos o secciones adicionales...</p>
      </div>
    </div>
  );
}

export default DashboardPage;