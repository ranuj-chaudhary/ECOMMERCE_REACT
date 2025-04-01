export const clearCookies = () => {
    document.cookie.split(';').forEach((cookie) => {
      document.cookie = `${cookie.split('=')[0].trim()}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    });
  };