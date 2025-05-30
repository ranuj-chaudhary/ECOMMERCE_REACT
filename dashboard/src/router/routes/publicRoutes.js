import { lazy } from 'react';
const Login = lazy(() => import('../../views/auth/Login'));
const Register = lazy(() => import('../../views/auth/Register'));
const AdminLogin = lazy(() => import('../../views/auth/AdminLogin'));
const NotFound = lazy(() => import('../../views/pages/NotFound'));
const Home = lazy(() => import('../../views/pages/Home'));
const SellerRegistration = lazy(() => import('../../views/auth/SellerRegistration'));

export const PublicRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/seller-registration',
    element: <SellerRegistration />,
  },
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
