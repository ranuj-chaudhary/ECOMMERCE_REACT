import ProtectRoute from '../../views/auth/ProtectRoute';
import { lazy } from 'react';
const Dashboard = lazy(() => import('../../views/pages/Dashboard'));

const PrivateRoutes = [
  {
    path: '/admin/dashboard',
    element: (
      <ProtectRoute>
        <Dashboard />
      </ProtectRoute>
    ),
  },
];

export default PrivateRoutes;
