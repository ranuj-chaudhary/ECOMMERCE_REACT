import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { admin_login } from '../../store/Reducers/authReducer';
import { useDispatch } from 'react-redux';

const AdminLogin = () => {
  const dispatch = useDispatch()

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state))
    
  };
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
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
            <div className="flex flex-col gap-1 mb-4 ">
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                type="email"
                placeholder="Ranuj Choudhary"
                id="email"
                required
                value={state.email}
                onChange={inputHandle}
                name="email"
                className="p-2 placeholder:text-gray-500 rounded-md text-purple-900 border-none focus:outline-2 focus:outline-purple-900"
              />
            </div>
            <div className="flex flex-col gap-1  mb-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="%&#$@345dgc%*"
                id="password"
                value={state.password}
                onChange={inputHandle}
                name="password"
                required
                className="p-2 placeholder:text-gray-500 rounded-md text-purple-900 border-none focus:outline-2 focus:outline-purple-900"
              />
            </div>

            <div className="">
              <button  className="font-bold w-full bg-gray-100 text-purple-700 rounded-md p-2 focus:scale-95 transition-transform duration-200">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AdminLogin;
