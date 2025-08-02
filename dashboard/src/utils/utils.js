import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

// utils
export const clearCookies = () => {
  document.cookie.split(";").forEach((cookie) => {
    document.cookie = `${cookie
      .split("=")[0]
      .trim()}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  });
};

export const throttle = function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const handleAxiosError = (error, rejectWithValue) => {
  if (error.response) {
    // HTTP Errors (4xx, 5xx)
    console.error(`HTTP Error ${error.response.status}:`, error.response.data);

    return rejectWithValue({
      message: error.response.data.message || "Server error",
    });
  } else if (error.request) {
    console.error("Network error: No response received.");
    // Network Errors (No response)
    return rejectWithValue({
      message: "Network error. Please check your connection.",
    });
  } else {
    console.error("Unexpected error:", error.message);
    // Other Errors (e.g., syntax errors)
    return rejectWithValue({ message: "Unexpected error occurred" });
  }
};

export const saveToken = (token) => {
  const decoded = jwtDecode(token);
  const expiryTime = decoded.exp * 1000;
  localStorage.setItem("token", JSON.stringify({ expiryTime: expiryTime }));
};

export const getToken = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export const removeToken = (key) => {
  localStorage.removeItem(key);
};

export const returnRole = (token) => {
  if (token) {
    const decoded = jwtDecode(token);
    const expiryTime = decoded.exp * 1000;
    const currentTime = new Date(Date.now());

    if (currentTime <= expiryTime) {
      return decoded.role;
    } else {
      removeToken("token");
      return "";
    }
  } else {
    return "";
  }
};

export const successToast = (successMessage, toastDuration) => {
  setTimeout(() => {
    toast.success(successMessage || "", {
      duration: toastDuration, // Toast will disappear after 2 seconds
    });
  });
};
export const errorToast = (errorMessage, toastDuration) => {
  setTimeout(() => {
    toast.error(errorMessage || "", {
      duration: toastDuration, // Toast will disappear after 2 seconds
    });
  });
};
