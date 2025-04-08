import MainLayout from '../../layout/MainLayout';
import { PrivateRoutes } from './PrivateRoutes';
import ErrorFallback from '../../views/pages/ErrorBoundary';
export const getRoutes = () => {
  return {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorFallback />,
    children: [...PrivateRoutes],
  };
};
