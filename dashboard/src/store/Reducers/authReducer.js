import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';
import { jwtDecode } from 'jwt-decode';

// handling asynchronising actions
const initialState = {
  successMessage: '',
  errorMessage: '',
  loader: false,
  token: localStorage.getItem('accessToken') || null,
  userInfo: '',
  role: returnRole(localStorage.getItem('accessToken')),
};

export const admin_login = createAsyncThunk(
  'auth/login',
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post('/auth/login', info, {
        withCredentials: true,
      });
      localStorage.setItem('accessToken', data.token);
      const localTime = new Date().toLocaleString();
      return fulfillWithValue(data, { fetchedAt: localTime });
    } catch (error) {
      return handleAxiosError(error, rejectWithValue);
    }
  }
);
export const get_user_info = createAsyncThunk(
  'auth/get_user_info',
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get('/auth/get_user', {
        withCredentials: true,
      });

      const localTime = new Date().toLocaleString();
      return fulfillWithValue(data, { fetchedAt: localTime });
    } catch (error) {
      return handleAxiosError(error, rejectWithValue);
    }
  }
);
export const logout_user = createAsyncThunk(
  'auth/logout_user',
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get('/auth/logout', {
        withCredentials: true,
      });

      const localTime = new Date().toLocaleString();
      return fulfillWithValue(data, { fetchedAt: localTime });
    } catch (error) {
      return handleAxiosError(error, rejectWithValue);
    }
  }
);

function handleAxiosError(error, rejectWithValue) {
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

function returnRole(token) {
  if (token) {
    const decoded = jwtDecode(token);
    const expiryTime = decoded.exp * 1000;
    const currentTime = new Date(Date.now());
    console.log(decoded);
    if (currentTime <= expiryTime) {
      return decoded.role;
    } else {
      localStorage.removeItem('accessToken');
      return '';
    }
  } else {
    return '';
  }
}

export const admin_register = createAsyncThunk(
  'auth/register',
  async (user) => {
    try {
      const { data } = await api.post('/auth/register', user, {
        withCredentials: true,
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
    messageClear: (state, _) => {
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(admin_login.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(admin_login.fulfilled, (state, action) => {
        if (!action.payload && action.payload.status === 'error') {
          state.errorMessage = action.payload.message;
        } else {
          state.errorMessage = '';
          state.successMessage = action.payload.message;
          state.token = action.payload.token;
          state.role = returnRole(state.token);
        }
        state.loader = false;
      })
      .addCase(admin_login.rejected, (state, action) => {
        state.loader = false;
        if (action.payload?.status === 401) {
          state.errorMessage = 'Unauthorized. Please log in again.';
        } else if (action.payload?.status === 404) {
          state.errorMessage = 'User not found.';
        } else {
          state.errorMessage = action.payload.message || 'An error occurred.';
        }
      })
      .addCase(admin_register.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(get_user_info.fulfilled, (state, action) => {
        if (action.payload.status === 'error') {
          state.errorMessage = action.payload.message;
        } else {
          state.userInfo = action.payload;
        }
        state.loader = false;
      })
      .addCase(admin_register.fulfilled, (state, action) => {
        if (action.payload.status === 'error') {
          state.errorMessage = action.payload.message;
        } else {
          state.successMessage = action.payload.message;
        }
        state.loader = false;
      })
      .addCase(admin_register.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.loader = false;
      }),
});

const authReducer = authSlice.reducer;
const { logout, messageClear } = authSlice.actions;

export { logout, messageClear };
export default authReducer;
