jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import AdminDashboardPage from './pages/Admin/AdminDashboardPage';
import MemberDashboardPage from './pages/Member/MemberDashboardPage'; // Corrected path
import { useAuth } from './hooks/useAuth';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
              <Route path="/member/dashboard" element={<MemberDashboardPage />} />
            </Route>

            {/* Redirect authenticated users from root or other paths to their dashboard */}
            <Route path="/" element={<HomeRedirect />} />

            {/* Catch-all route for non-existent paths, redirects to login */}
            <Route path="*" element={<Navigate to="/login" replace />} />

          </Routes>
        </div>
        {/* <Footer /> */}{/* Footer can be added here if needed */}
      </div>
    </BrowserRouter>
  );
}

// Component to handle redirection based on authentication and role
function HomeRedirect() {
  const { user } = useAuth();

  if (user) {
    // If authenticated, redirect to the appropriate dashboard
    return user.role === 'admin' ? <Navigate to="/admin/dashboard" replace /> : <Navigate to="/member/dashboard" replace />;
  } else {
    // If not authenticated, redirect to login
    return <Navigate to="/login" replace />;
  }
}

// Component to protect routes
function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // If not authenticated, redirect to login
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the children (the protected route component)
  return children;
}

export default App;