import { lazy } from "react";

const SellerDashboard = lazy(() =>
  import("../../views/seller/SellerDashboard")
);
const SellerAddProducts = lazy(() =>
  import("../../views/seller/SellerAddProducts")
);
const SellerAllProducts = lazy(() =>
  import("../../views/seller/SellerAllProducts")
);
const SellerDiscountProducts = lazy(() =>
  import("../../views/seller/SellerDiscountProducts")
);
const SellerOrders = lazy(() => import("../../views/seller/SellerOrders"));
const SellerPayments = lazy(() => import("../../views/seller/SellerPayments"));
const SellerChatCustomer = lazy(() =>
  import("../../views/seller/SellerChatCustomer")
);
const SellerChatSupport = lazy(() =>
  import("../../views/seller/SellerChatSupport")
);
const SellerProfile = lazy(() => import("../../views/seller/SellerProfile"));
const EditProduct = lazy(() => import("../../views/seller/EditProduct"));
const SellerOrdersDetails = lazy(() =>
  import("../../views/seller/SellerOrdersDetails")
);
const Pending = lazy(() => import("../../views/Pending"));
const Deactive = lazy(() => import("../../views/Deactive"));

export const SellerRoutes = [
  {
    path: "/seller/account-pending",
    element: <Pending />,
    ability: "seller",
  },
  {
    path: "/seller/account-deactive",
    element: <Deactive />,
    ability: "seller",
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/add-product",
    element: <SellerAddProducts />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/edit-product/:productId",
    element: <EditProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/products",
    element: <SellerAllProducts />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/discount-product",
    element: <SellerDiscountProducts />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/orders",
    element: <SellerOrders />,
    role: "seller",
    visibility: ["active", "deactive"],
  },
  {
    path: "/seller/dashboard/orders/details/:orderId",
    element: <SellerOrdersDetails />,
    role: "seller",
    visibility: ["active", "deactive"],
    status: "active",
  },
  {
    path: "/seller/dashboard/payments",
    element: <SellerPayments />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-customer",
    element: <SellerChatCustomer />,
    role: "seller",
    visibility: ["active", "deactive", "pending"],
  },
  {
    path: "/seller/dashboard/chat-support",
    element: <SellerChatSupport />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/profile",
    element: <SellerProfile />,
    role: "seller",
    visibility: ["active", "deactive", "pending"],
  },
];
