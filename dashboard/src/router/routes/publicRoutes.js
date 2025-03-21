import { lazy } from 'react';
const Login = lazy(() => import('../../views/auth/Login'));
const Register = lazy(() => import('../../views/auth/Register'));
const Home = lazy(() => import('../../views/pages/Home'));
const AdminLogin = lazy(() => import('../../views/auth/AdminLogin'));
const NotFound = lazy(() => import('../../views/pages/NotFound'));

const PublicRoutes = [
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
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default PublicRoutes;
