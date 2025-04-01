import { lazy } from 'react';
const AdminDashBoard = lazy(() => import('../../views/admin/AdminDashBoard'));

export const AdminRoutes = [
  {
    path: '/admin/dashboard',
    element: <AdminDashBoard />,
    role: 'admin',
  },
];
