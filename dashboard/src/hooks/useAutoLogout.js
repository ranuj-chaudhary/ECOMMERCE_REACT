import React from "react";
import { useDispatch } from "react-redux";
import { logout, resetUser } from "../store/Reducers/authReducer";
import { getToken, removeToken } from "../utils/utils";
const bufferMs = 5_000; // 5 seconds

// AUTO LOGOUT COMPONENT
const useAutoLogout = () => {
  const token = getToken();
  const [isLogout, setIsLogout] = React.useState(false);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (token?.expiryTime && typeof token.expiryTime === "number") {
      const remainingTime = token.expiryTime - Date.now() - bufferMs;
      if (remainingTime > 0) {
      }
      const timerId = setTimeout(() => {
        dispatch(logout());
        dispatch(resetUser());
        removeToken("token");
        setIsLogout(true);
      }, remainingTime);

      return () => {
        clearTimeout(timerId);
      };
    } else {
      dispatch(resetUser());
      removeToken("token");
      setIsLogout(true);
    }
  }, [token, dispatch]);

  return { isLogout };
};

export default useAutoLogout;
