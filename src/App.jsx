import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { useAuth } from './hooks/useAuth';
import Footer from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/components/Footer.jsx'; // Usar ruta absoluta

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen"> {/* Contenedor principal para layout */}
        <div className="flex-grow"> {/* Contenido que crece para empujar el footer */}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            {/* Opcional: Redirigir otras rutas a /dashboard si está autenticado, sino a / */}
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
    // Redirige al usuario a la página de login si no está autenticado
    return <Navigate to="/" replace />;
  }

  return children;
}

export default App;