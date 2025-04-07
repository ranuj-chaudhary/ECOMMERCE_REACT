import { lazy } from 'react';
import ProtectRoute from '../../views/auth/ProtectRoute';
const AdminDashBoard = lazy(() => import('../../views/admin/AdminDashBoard'));

export const AdminRoutes = [
  {
    path: '/admin/dashboard',
    element: (
      <ProtectRoute>
        <AdminDashBoard />
      </ProtectRoute>
    ),
    role: 'admin',
  },
];
