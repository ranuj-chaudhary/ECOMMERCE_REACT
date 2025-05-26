import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const { role } = useSelector((state) => state.auth);

  if (role === undefined || role === null) {
    // Optional: Show loading or just return nothing until role is known
    return null;
  }

  if (role === "admin") {
    return role === "admin" ? children : <Navigate to="/admin/login" replace />;
  } else if (role === "seller") {
    return role === "seller" ? children : <Navigate to="/login" replace />;
  }
};

export default ProtectRoute;
