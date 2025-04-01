import { lazy } from 'react';
const Home = lazy(() => import('../../views/pages/Home'));

export const SellerRoutes = [
  {
    path: '/',
    element: <Home />,
    ability: ['seller' , 'admin']
  },
];

