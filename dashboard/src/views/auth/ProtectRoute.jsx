import React from 'react';
import { useSelector } from 'react-redux';
import jwt from 'jsonwebtoken';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const token = JSON.parse(localStorage.getItem('token'));
  const decoded = jwt.verify(token, secretKey);
  
  const isAuthenticated = userInfo.role.includes('admin') === true;

  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default ProtectRoute;
