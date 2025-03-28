import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { admin_register } from '../../store/Reducers/authReducer';

const Register = () => {
  const dispatch = useDispatch();
  const { successMessage, errorMessage } = useSelector((state) => state.auth);
  console.log(successMessage, errorMessage);
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    image: 'admin.png',
    role: 'admin',
  });

  const submit = (e) => {
    // prevent page reloading
    e.preventDefault();
    dispatch(admin_register(state));
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
        Register Page
      </h1>
      <div className="min-w-screen min-h-screen  flex justify-center items-center">
        <div className="shadow-md shadow-purple-700 p-4 w-[350px] bg-purple-600 rounded-md  text-white m-0">
          <h2 className="text-2xl text-center font-bold">Create New Account</h2>
          <p className="text-sm my-2">Please Register Your Account</p>
          <form onSubmit={submit} className="my-2">
            <div className="flex flex-col gap-1 mb-4 ">
              <label htmlFor="name" className="">
                Name
              </label>
              <input
                type="text"
                placeholder="Ranuj Choudhary"
                id="name"
                onChange={inputHandle}
                value={state.name}
                required
                className="p-2 placeholder:text-gray-500 rounded-md text-purple-900 border-none focus:outline-2 focus:outline-purple-900"
                name="name"
              />
            </div>
            <div className="flex flex-col gap-1 mb-4 ">
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                type="email"
                placeholder="ranujchoudhary@gmail.com"
                id="email"
                name="email"
                onChange={inputHandle}
                value={state.email}
                required
                className="p-2 placeholder:text-gray-500 rounded-md text-purple-900 border-none focus:outline-2 focus:outline-purple-900"
              />
            </div>
            <div className="flex flex-col gap-1  mb-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="%&#$@345dgc%*"
                id="password"
                name="password"
                onChange={inputHandle}
                value={state.password}
                required
                className="p-2 placeholder:text-gray-500 rounded-md text-purple-900 border-none focus:outline-2 focus:outline-purple-900"
              />
            </div>
            <div className="flex gap-2  mb-4 items-center">
              <input
                type="checkbox"
                placeholder="%&#$@345dgc%*"
                id="checkbox"
                className="peer h-5 w-5 cursor-pointer transition-all rounded-md shadow hover:shadow-md border border-slate-300 checked:bg-amber-600 checked:border-amber-600"
                required
              />
              <label htmlFor="checkbox" className="hover:cursor-pointer">
                I agree to privacy policy and terms
              </label>
            </div>
            <div className="">
              <button className="font-bold w-full bg-gray-100 text-purple-700 rounded-md p-2 focus:scale-95 transition-transform duration-200">
                Sign up
              </button>
            </div>
            <div className="mt-2">
              <p>
                Already have an account?{' '}
                <Link to="/login" className="underline cursor-pointer">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
          <div className="devider flex justify-between items-center gap-1 mt-4">
            <div className="h-[1px] flex-1 bg-black inline-block ">
              <span className="h-[1px] flex-1 bg-black inline-block "></span>
            </div>
            <span>Or</span>
            <span className="h-[1px] flex-1 bg-black inline-block "></span>
          </div>
          <div className="flex gap-4">
            <div className="p-2 bg-orange-700  cursor-pointer active:scale-95 active:shadow-md  transition-all duration-300 shadow-lg   hover:shadow-orange-700/50 flex-1 flex justify-center items-center overflow-hidden">
              <span>
                <FaGoogle />
              </span>
            </div>
            <div className="p-2 bg-blue-700  cursor-pointer  active:scale-95 active:shadow-md transition-all duration-300 shadow-lg hover:shadow-blue-700/50 flex-1 flex justify-center items-center overflow-hidden">
              <span>
                <FaFacebook />
              </span>
            </div>
            <span></span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
