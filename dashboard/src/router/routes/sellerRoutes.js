import { lazy } from 'react';
import ProtectRoute from '../../views/auth/ProtectRoute';
const SellerDashboard = lazy(() =>
  import('../../views/seller/SellerDashboard')
);
export const SellerRoutes = [
  {
    path: '/seller/dashboard',
    element: (
      <ProtectRoute>
        <SellerDashboard />
      </ProtectRoute>
    ),

    ability: ['seller', 'admin'],
  },
];
