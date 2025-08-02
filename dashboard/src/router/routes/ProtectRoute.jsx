import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectRoute = ({ route, children }) => {
  const { role, userInfo } = useSelector((state) => state.auth);
  if (role) {
    if (userInfo.role === route.role) {
      return <Suspense fallback={null}>{children}</Suspense>;
    }
  } else {
    return <Navigate to={"/"} replace />;
  }
};

export default ProtectRoute;
