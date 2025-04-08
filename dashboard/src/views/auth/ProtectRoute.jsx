import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ children }) => {
  const { role } = useSelector((state) => state.auth);

  if (role === undefined || role === null) {
    // Optional: Show loading or just return nothing until role is known
    return null;
  }

  return role === 'admin' ? children : <Navigate to="/admin/login" replace />;
};

export default ProtectRoute;
