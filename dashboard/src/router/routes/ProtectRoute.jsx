import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ route, children }) => {
  const { role, userInfo } = useSelector((state) => state.auth);
  // if role exist
  if (role) {
    // if role rule exist
    if (route.role) {
      // if userInfo exist
      if (userInfo) {
        if (userInfo.role === route.role) {
          if (route.status) {
            // if status matches
            if (userInfo.status === route.status) {
              return <Suspense fallback={null}>{children}</Suspense>;
            } else {
              if (userInfo.status === "pending") {
                return <Navigate to={"/seller/account-pending"} replace />;
              } else {
                return <Navigate to={" /seller/account-deactive"} replace />;
              }
            }
          } else {
            if (route.visibility) {
              if (route.visibility.some((r) => r === userInfo.status)) {
                return <Suspense fallback={null}>{children}</Suspense>;
              } else {
                return <Navigate to={"/seller/account-pending"} replace />;
              }
            } else {
              // if no status than admin component will be visible
              return <Suspense fallback={null}>{children}</Suspense>;
            }
          }
        } else {
          return <Navigate to={"/unauthorised"} replace />;
        }
      } // userInfo
    } else {
      // if role.rule not exist
      if (route.ability === "seller") {
        return <Suspense fallback={null}>{children}</Suspense>;
      }
    }
  } else {
    // else role
    return <Navigate to={"/login"} replace />;
  } // role ends
};

export default ProtectRoute;
