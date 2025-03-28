import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';
// handling asynchronising actions

export const admin_login = createAsyncThunk('auth/login', async (info) => {
  try {
    const { data } = await api.post('/auth/login', info, {
      withCredentials: true,
    });
    return data;
  } catch (err) {
    console.error(err);
    return err.response.data;
  }
});

export const admin_register = createAsyncThunk(
  'auth/register',
  async (user) => {
    try {
      const { data } = await api.post('/auth/register', user, {
        withCredentials: true,
      });
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loading: false,
    token: localStorage.getItem('token') || null,
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {
      role: 'guest',
      name: '',
      email: '',
    },
  },
  reducers: {},
  extraReducers: (bulder) =>
    bulder
      .addCase(admin_login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(admin_login.fulfilled, (state, action) => {
        if (action.payload.status === 'error') {
          state.errorMessage = action.payload.message;
        } else {
          state.successMessage = action.payload.message;
          state.userInfo = { ...action.payload.user };
          state.token = action.payload.token;
          // update local storage

          localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
          localStorage.setItem(
            'token',
            JSON.stringify({ token: action.payload.token })
          );
        }
        state.loading = false;
      })
      .addCase(admin_login.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
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
        state.error = action.error.message;
        state.loading = false;
      }),
});

const authReducer = authSlice.reducer;

export default authReducer;
