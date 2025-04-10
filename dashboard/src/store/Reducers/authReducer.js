import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';
import { jwtDecode } from 'jwt-decode';
import { handleAxiosError } from '../../utils/utils';

export const admin_login = createAsyncThunk(
  'auth/login',
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post('/login', info, {
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
      const { data } = await api.get('/get_user', {
        withCredentials: true,
      });

      const localTime = new Date().toLocaleString();
      return fulfillWithValue(data, { fetchedAt: localTime });
    } catch (error) {
      return handleAxiosError(error, rejectWithValue);
    }
  }
);
export const logout = createAsyncThunk(
  'auth/logout',
  async ({ role, navigate }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get('/logout', {
        withCredentials: true,
      });

      localStorage.removeItem('accessToken');

      if (role === 'admin') {
        navigate(`/admin/login?message=${data.message}`, { replace: true });
      } else {
        navigate(`/login?message=${data.message}`, { replace: true });
      }

      const localTime = new Date().toLocaleString();
      return fulfillWithValue(data, { fetchedAt: localTime });
    } catch (error) {
      return handleAxiosError(error, rejectWithValue);
    }
  }
);

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

function returnRole(token) {
  if (token) {
    const decoded = jwtDecode(token);
    const expiryTime = decoded.exp * 1000;
    const currentTime = new Date(Date.now());
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

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    token: localStorage.getItem('accessToken') || null,
    userInfo: '',
    role: returnRole(localStorage.getItem('accessToken')),
  },
  reducers: {
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
      .addCase(logout.fulfilled, (state, action) => {
        if (action.payload.status === 'error') {
          state.errorMessage = action.payload.message;
        } else {
          state.successMessage = action.payload.message;
          state.token = '';
          state.role = action.payload.role;
          state.userInfo = {};
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
const { messageClear } = authSlice.actions;

export { messageClear };
export default authReducer;
