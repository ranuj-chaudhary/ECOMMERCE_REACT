import { lazy } from 'react';

const SellerDashboard = lazy(() =>
  import('../../views/seller/SellerDashboard')
);
export const SellerRoutes = [
  {
    path: '/seller/dashboard',
    element: <SellerDashboard />,
    ability: ['seller', 'admin'],
  },
];
