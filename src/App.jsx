import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import RegisterPage from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/pages/Auth/RegisterPage.jsx';
import AdminDashboardPage from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/pages/Admin/AdminDashboardPage.jsx';
import MemberDashboardPage from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/pages/Member/MemberDashboardPage.jsx';
import { useAuth } from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/hooks/useAuth.js';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen"> {/* Contenedor principal para layout */}
        <div className="flex-grow"> {/* Contenido que crece para empujar el footer */}
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/member/dashboard"
              element={
                <ProtectedRoute>
                  <MemberDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" replace />} />
            {/* Handle other unknown paths */}
            <Route path="*" element={<ProtectedRoute><Navigate to="/login" replace /></ProtectedRoute>} />
          </Routes>
        </div>
        {/* <Footer /> */}{/* El footer se renderiza al final - comentado para simplificar el diff */}
      </div>
    </BrowserRouter>
  );
}

// Componente auxiliar para proteger la ruta
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const currentLocation = window.location.pathname;

  if (!user) {
    // Redirige al usuario a la página de login si no está autenticado
    return <Navigate to="/login" replace />;
  }

  // User is authenticated, check role and intended path
  if (user.role === 'admin' && currentLocation !== '/admin/dashboard') {
    return <Navigate to="/admin/dashboard" replace />;
  }

  if (user.role === 'member' && currentLocation !== '/member/dashboard') {
    return <Navigate to="/member/dashboard" replace />;
  }

  // If authenticated and on the correct path, render the children
  return children;
}

export default App;
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer /> {/* El footer se renderiza al final */}
      </div>
    </BrowserRouter>
  );
}

// Componente auxiliar para proteger la ruta
function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // Redirige al usuario a la página de login si no está autenticado, usando replace para no mantener el historial
    return <Navigate to="/" replace />;
  }

  return children;
}

export default App;