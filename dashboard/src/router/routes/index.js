import MainLayout from '../../layout/MainLayout';
import { PrivateRoutes } from './PrivateRoutes';

export const getRoutes = () => {
  return [
    {
      path: '/',
      element: <MainLayout />,
      children: [...PrivateRoutes],
    },
  ];
};
