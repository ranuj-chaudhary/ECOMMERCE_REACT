import React, { useEffect, useState } from 'react';
import { admin_login, messageClear } from '../../store/Reducers/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import InputField from './../components/InputField';
import Button from '../components/Button';

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const { userInfo, errorMessage, loading, successMessage } = useSelector(
    (state) => state.auth
  );

  const submit = (e) => {
    console.log(e);
    e.preventDefault();
    dispatch(admin_login(state));
  };

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (userInfo.role.includes('admin') && successMessage) {
      setTimeout(() => {
        toast.success(successMessage, {
          duration: 2000, // Toast will disappear after 2 seconds
        });

        // Navigate after showing the toast
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 1000);
      }, 500);
    }
  }, [userInfo.role, successMessage, navigate]);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, { duration: 2000 });
      dispatch(messageClear());
    }
  }, [errorMessage, dispatch]);

  return (
    <main className="bg-purple-300">
      <h1 className="text-center pt-4 text-4xl text-purple-800 font-bold">
        Admin Login Page
      </h1>
      <div className="min-w-screen min-h-screen  flex justify-center items-center">
        <div className="shadow-md shadow-purple-700 p-4 w-[350px] bg-purple-600 rounded-md  text-white m-0">
          <form onSubmit={submit}>
            <div className="font-bold text-2xl mb-4 flex justify-center">
              <img
                src="/images/logo.png"
                alt=""
                className="object-cover aspect-auto"
              />
            </div>
            <InputField
              label={'Email'}
              type="email"
              placeholder="Ranuj Choudhary"
              id="email"
              required
              value={state.email}
              onChange={inputHandle}
              name="email"
              className="p-2 placeholder:text-gray-500 rounded-md text-purple-900 border-none focus:outline-2 focus:outline-purple-900"
            />
            <InputField
              label={'password'}
              type="password"
              placeholder="%&#$@345dgc%*"
              id="password"
              value={state.password}
              onChange={inputHandle}
              name="password"
              required
              className="p-2 placeholder:text-gray-500 rounded-md text-purple-900 border-none focus:outline-2 focus:outline-purple-900"
            />
            <Button
              type="submit"
              className="flex justify-center items-center gap-2 font-bold w-full bg-gray-100 text-purple-700 rounded-md p-2 active:scale-95 transition-all duration-200"
              loading={loading}
              spinner={true}
              disabled={loading}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
      <Toaster />
    </main>
  );
};

export default AdminLogin;
