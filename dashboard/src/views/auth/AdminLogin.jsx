import React, { useEffect, useState } from 'react';
import { admin_login, messageClear } from '../../store/Reducers/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import InputField from './../components/InputField';
import Button from '../components/Button';
import Logo from '../components/Logo';
import { errorToast, successToast } from '../../utils/utils';

const AdminLogin = () => {
  const [searchParams] = useSearchParams();
  const logoutMessage = searchParams.get('message');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const { role, errorMessage, loader, successMessage } = useSelector(
    (state) => state.auth
  );

  const submit = (e) => {
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
    if (role === 'admin') {
      setTimeout(() => {
        successToast(successMessage, 1200);

        // Navigate after showing the toast
        setTimeout(() => {
          navigate('/admin/dashboard', { replace: true });
        }, 1800);
      }, 0);
    }
  }, [role, successMessage, navigate]);

  useEffect(() => {
    if (errorMessage) {
      errorToast(errorMessage, 1200);
      setTimeout(() => {
        dispatch(messageClear());
      }, 2000);
    }
  }, [errorMessage, dispatch]);

  useEffect(() => {
    if (logoutMessage) {
      setTimeout(() => {
        successToast(logoutMessage || 'logout successfull', 2000);
      }, 1000);
    }
  }, [logoutMessage]);

  return (
    <main className="bg-purple-300">
      <h1 className="text-center pt-4 text-4xl text-purple-800 font-bold">
        Admin Login Page
      </h1>
      <div className="min-w-screen min-h-screen  flex justify-center items-center">
        <div className="shadow-md shadow-purple-700 p-4 w-[350px] bg-purple-600 rounded-md  text-white m-0">
          <form onSubmit={submit}>
            <Logo className="font-bold text-2xl mb-4 flex justify-center" />
            <InputField
              label={'Email'}
              type="email"
              placeholder="Ranuj Choudhary"
              id="email"
              required
              value={state.email}
              onChange={inputHandle}
              name="email"
              autoComplete="email"
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
              autocomplete="current-password"
              className="p-2 placeholder:text-gray-500 rounded-md text-purple-900 border-none focus:outline-2 focus:outline-purple-900"
            />
            <Button
              type="submit"
              className="flex justify-center items-center gap-2 font-bold w-full bg-gray-100 text-purple-700 rounded-md p-2 active:scale-95 transition-all duration-200"
              loading={loader}
              spinner={true}
              disabled={loader}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AdminLogin;
