import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';
import { handleAxiosError, removeToken } from '../../utils/utils';
import { saveToken, getToken, returnRole } from '../../utils/utils';

// ASYNC THUNK
export const admin_login = createAsyncThunk(
  'auth/login',
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post('/login', info, {
        withCredentials: true,
      });
      // Save Token
      saveToken(data.token);
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
      // 1) call logout api
      const { data } = await api.get('/logout', {
        withCredentials: true,
      });

      // 2) remove token
      removeToken('token');

      if (role === 'admin') {
        navigate(`/admin/login?message=${data.message}`);
      } else {
        navigate(`/login?message=${data.message}`);
      }

      return fulfillWithValue(data, { fetchedAt: new Date().toLocaleString() });
    } catch (error) {
      return handleAxiosError(error, rejectWithValue);
    }
  }
);

export const admin_register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post('/auth/register', user, {
        withCredentials: true,
      });
      return fulfillWithValue(data, { fetchedAt: new Date().toLocaleString() });
    } catch (error) {
      console.error(error);
      return handleAxiosError(error, rejectWithValue);
    }
  }
);

const initialState = {
  successMessage: '',
  errorMessage: '',
  loader: false,
  userInfo: '',
  role: returnRole(getToken('authToken')),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = '';
    },
    resetUser: () => initialState,
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
          state.role = returnRole(action.payload.token);
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
      .addCase(get_user_info.fulfilled, (state, action) => {
        if (action.payload.status === 'error') {
          state.errorMessage = action.payload.message;
        } else {
          state.userInfo = action.payload;
        }
        state.loader = false;
      })
      .addCase(admin_register.pending, (state, action) => {
        state.loader = true;
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
const { resetUser, messageClear } = authSlice.actions;

export { resetUser, messageClear };
export default authReducer;
