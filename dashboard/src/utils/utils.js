export const clearCookies = () => {
  document.cookie.split(';').forEach((cookie) => {
    document.cookie = `${cookie
      .split('=')[0]
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
