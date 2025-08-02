import MainLayout from "../../layout/MainLayout";
import { PrivateRoutes } from "./PrivateRoutes";
import ProtectRoute from "./ProtectRoute";
import ErrorFallback from "../../views/pages/ErrorBoundary";
export const getRoutes = () => {
  PrivateRoutes.map((route) => {
    route.element = <ProtectRoute route={route}>{route.element}</ProtectRoute>;
  });

  return {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorFallback />,
    children: [...PrivateRoutes],
  };
};
