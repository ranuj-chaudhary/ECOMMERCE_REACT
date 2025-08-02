import { useSelector } from "react-redux";

const useAuthentication = () => {
  const { role } = useSelector((state) => state.auth);
  let isAuthenticated = false;
  if (role === "seller" || role === "admin") isAuthenticated = true;

  return { isAuthenticated };
};

export default useAuthentication;
