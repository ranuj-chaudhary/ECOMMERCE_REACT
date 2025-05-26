import { lazy } from "react";
import ProtectRoute from "../../views/auth/ProtectRoute";

const AdminDashboard = lazy(() =>
  import("../../views/admin/AdminDashboard/AdminDashboard")
);
const Orders = lazy(() => import("../../views/admin/Orders"));
const Category = lazy(() => import("../../views/admin/Category"));
const Sellers = lazy(() => import("../../views/admin/Sellers"));
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"));
const DeactiveSellers = lazy(() => import("../../views/admin/DeactiveSellers"));
const SellerRequest = lazy(() => import("../../views/admin/SellerRequest"));
const SellerDetails = lazy(() => import("../../views/admin/SellerDetails"));
const ChatSeller = lazy(() => import("../../views/admin/ChatSeller"));
const OrderDetails = lazy(() => import("../../views/admin/OrderDetails"));

export const AdminRoutes = [
  {
    path: "/admin/dashboard",
    element: (
      <ProtectRoute>
        {" "}
        <AdminDashboard />{" "}
      </ProtectRoute>
    ),
    role: "admin",
  },
  {
    path: "admin/dashboard/orders",
    element: (
      <ProtectRoute>
        {" "}
        <Orders />
      </ProtectRoute>
    ),
    role: "admin",
  },
  {
    path: "admin/dashboard/category",
    element: (
      <ProtectRoute>
        {" "}
        <Category />
      </ProtectRoute>
    ),
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers",
    element: (
      <ProtectRoute>
        {" "}
        <Sellers />
      </ProtectRoute>
    ),
    role: "admin",
  },
  {
    path: "admin/dashboard/payment-request",
    element: (
      <ProtectRoute>
        {" "}
        <PaymentRequest />
      </ProtectRoute>
    ),
    role: "admin",
  },
  {
    path: "admin/dashboard/deactive-sellers",
    element: (
      <ProtectRoute>
        {" "}
        <DeactiveSellers />
      </ProtectRoute>
    ),
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers-request",
    element: (
      <ProtectRoute>
        {" "}
        <SellerRequest />
      </ProtectRoute>
    ),
    role: "admin",
  },
  {
    path: "admin/dashboard/seller/details/:sellerId",
    element: (
      <ProtectRoute>
        {" "}
        <SellerDetails />
      </ProtectRoute>
    ),
    role: "admin",
  },
  {
    path: "admin/dashboard/chat-sellers",
    element: (
      <ProtectRoute>
        {" "}
        <ChatSeller />
      </ProtectRoute>
    ),
    role: "admin",
  },
  {
    path: "admin/dashboard/chat-sellers/:sellerId",
    element: (
      <ProtectRoute>
        {" "}
        <ChatSeller />
      </ProtectRoute>
    ),
    role: "admin",
  },
  {
    path: "admin/dashboard/order/details/:orderId",
    element: (
      <ProtectRoute>
        {" "}
        <OrderDetails />
      </ProtectRoute>
    ),
    role: "admin",
  },
];
