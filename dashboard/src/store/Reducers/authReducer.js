import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';
// handling asynchronising actions

export const admin_login = createAsyncThunk(
  'auth/admin_login',
  async (info) => {
    console.log(info);
    try {
      // const { data } = await api.post('/admin-login', info, {
      //   withCredentials: true,
      // });
      // console.log(data);
    } catch (err) {}
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loading: false,
    userInfo: {},
  },
  reducers: {},
  extraReducers: (bulder) =>
    bulder
      .addCase(admin_login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(admin_login.fulfilled, (state, action) => {
        state.userInfo = { ...action.user };
        state.loading = false;
      })
      .addCase(admin_login.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      }),
});

const authReducer = authSlice.reducer;

export default authReducer;
