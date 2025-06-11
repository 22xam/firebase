import { useContext } from 'react';
import { AuthContext } from '/home/runner/work/Gym-Management-PWA/Gym-Management-PWA/src/context/AuthContext.jsx';

export const useAuth = () => {
  return useContext(AuthContext);
};
