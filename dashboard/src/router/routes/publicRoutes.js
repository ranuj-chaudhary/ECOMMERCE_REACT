import { lazy } from "react";
const Login = lazy(() => import("../../views/auth/Login"));
const AdminRegisteration = lazy(() =>
  import("../../views/auth/AdminRegisteration")
);
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"));
const NotFound = lazy(() => import("../../views/pages/NotFound"));
const Home = lazy(() => import("../../views/pages/Home"));
const SellerRegistration = lazy(() =>
  import("../../views/auth/SellerRegistration")
);
const SellerLogin = lazy(() => import("../../views/auth/SellerLogin"));

export const PublicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin/register",
    element: <AdminRegisteration />,
  },
  {
    path: "/seller/register",
    element: <SellerRegistration />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/seller/login",
    element: <SellerLogin />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
