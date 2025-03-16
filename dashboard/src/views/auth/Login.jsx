import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <main className="bg-purple-300">
      <h1 className="text-center pt-4 text-4xl text-purple-800 font-bold">
        Login Page
      </h1>
      <div className="min-w-screen min-h-screen  flex justify-center items-center">
        <div className="shadow-md shadow-purple-700 p-4 w-[350px] bg-purple-600 rounded-md  text-white m-0">
          <form onSubmit={handleSubmit}>
            <h2 className="font-bold text-2xl mb-4 text-center">
              Login Your Account
            </h2>
            <div className="flex flex-col gap-1 mb-4 ">
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                type="email"
                placeholder="Ranuj Choudhary"
                id="email"
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
                required
                className="p-2 placeholder:text-gray-500 rounded-md text-purple-900 border-none focus:outline-2 focus:outline-purple-900"
              />
            </div>

            <div className="">
              <button className="font-bold w-full bg-gray-100 text-purple-700 rounded-md p-2 focus:scale-95 transition-transform duration-200">
                Login
              </button>
            </div>
            <div className="flex gap-2  mb-4 items-center">
              <p
                htmlFor="checkbox"
                className="hover:cursor-pointer mt-2 flex gap-2"
              >
                Don't have account?
                <Link to="/register" className="underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
