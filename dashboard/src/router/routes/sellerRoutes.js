import { lazy } from 'react';
import ProtectRoute from '../../views/auth/ProtectRoute';

const SellerDashboard = lazy(() =>
  import('../../views/seller/SellerDashboard')
);
const SellerAddProducts = lazy(() =>
  import('../../views/seller/SellerAddProducts')
);
const SellerAllProducts = lazy(() =>
  import('../../views/seller/SellerAllProducts')
);
const SellerDiscountProducts = lazy(() =>
  import('../../views/seller/SellerDiscountProducts')
);
const SellerOrders = lazy(() =>
  import('../../views/seller/SellerOrders')
);
const SellerPayments = lazy(() =>
  import('../../views/seller/SellerPayments')
);
const SellerChatCustomer = lazy(() =>
  import('../../views/seller/SellerChatCustomer')
);
const SellerChatSupport = lazy(() =>
  import('../../views/seller/SellerChatSupport')
);
const SellerProfile = lazy(() =>
  import('../../views/seller/SellerProfile')
);
export const SellerRoutes = [
  {
    path: '/seller/dashboard',
    element: (
    <SellerDashboard />
    ),
    role: "seller",
  },
  {
    path: '/seller/dashboard/add-product',
    element: <SellerAddProducts />,
    role: "seller"
  },
  {
    path: '/seller/dashboard/products',
    element: <SellerAllProducts />,
    role: "seller"
  },
  {
    path: '/seller/dashboard/discount-product',
    element: <SellerDiscountProducts />,
    role: "seller"
  },
  {
    path: '/seller/dashboard/orders',
    element: <SellerOrders />,
    role: "seller"
  },
  {
    path: '/seller/dashboard/payments',
    element: <SellerPayments />,
    role: "seller"
  },
  {
    path: '/seller/dashboard/chat-customer',
    element: <SellerChatCustomer />,
    role: "seller"
  },
  {
    path: '/seller/dashboard/chat-support',
    element: <SellerChatSupport />,
    role: "seller"
  },
  {
    path: '/seller/dashboard/profile',
    element: <SellerProfile />,
    role: "seller"
  },

];
