import {AdminRoutes} from './AdminRoutes';
import {SellerRoutes} from './SellerRoutes';

export const PrivateRoutes = [...AdminRoutes, ...SellerRoutes];
