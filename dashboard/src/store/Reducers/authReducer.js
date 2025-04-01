import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

// handling asynchronising actions
const initialState = {
  successMessage: '',
  errorMessage: '',
  loading: false,
  token: localStorage.getItem('token') || null,
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || {
    role: 'guest',
    name: '',
    email: '',
  },
};

export const admin_login = createAsyncThunk(
  'auth/login',
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post('/auth/login', info, {
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
        state.loading = true;
      })
      .addCase(admin_login.fulfilled, (state, action) => {
        if (!action.payload && action.payload.status === 'error') {
          state.errorMessage = action.payload.message;
        } else {
          state.errorMessage = '';
          state.successMessage = action.payload.message;
          state.token = action.payload.token;
          // state.userInfo = { ...action.payload.user };
          // update local storage
          // localStorage.setItem('userInfo', JSON.stringify(state.userInfo));

          localStorage.setItem(
            'token',
            JSON.stringify({ token: action.payload.token })
          );
        }
        state.loading = false;
      })
      .addCase(admin_login.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.status === 401) {
          state.errorMessage = 'Unauthorized. Please log in again.';
        } else if (action.payload?.status === 404) {
          state.errorMessage = 'User not found.';
        } else {
          state.errorMessage = action.payload.message || 'An error occurred.';
        }
      })
      .addCase(admin_register.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(admin_register.fulfilled, (state, action) => {
        if (action.payload.status === 'error') {
          state.errorMessage = action.payload.message;
        } else {
          state.successMessage = action.payload.message;
        }
        state.loading = false;
      })
      .addCase(admin_register.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.loading = false;
      }),
});

const authReducer = authSlice.reducer;
const { logout, messageClear } = authSlice.actions;

export { logout, messageClear };
export default authReducer;
