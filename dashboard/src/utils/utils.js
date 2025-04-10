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


export const  handleAxiosError = (error, rejectWithValue) => {
  if (error.response) {
    // HTTP Errors (4xx, 5xx)
    console.error(`HTTP Error ${error.response.status}:`, error.response.data);

    return rejectWithValue({
      message: error.response.data.message || 'Server error',
    });
  } else if (error.request) {
    console.error('Network error: No response received.');
    // Network Errors (No response)
    return rejectWithValue({
      message: 'Network error. Please check your connection.',
    });
  } else {
    console.error('Unexpected error:', error.message);
    // Other Errors (e.g., syntax errors)
    return rejectWithValue({ message: 'Unexpected error occurred' });
  }
}