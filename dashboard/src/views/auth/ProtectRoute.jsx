import React from 'react';
import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const isAuthenticated = userInfo.role === 'admin';

  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default ProtectRoute;
