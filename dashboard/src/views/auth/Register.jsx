import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('form submitted');
  }
  return (
    <main className="bg-purple-300">
      <h1 className='text-center pt-4 text-4xl text-purple-800 font-bold'>Register Page</h1>
      <div className="min-w-screen min-h-screen  flex justify-center items-center">
        <div className="shadow-md shadow-purple-700 p-4 w-[350px] bg-purple-600 rounded-md  text-white m-0">
          <h2 className="text-2xl text-center font-bold">
            {' '}
            Create New Account
          </h2>
          <p className="text-sm my-2">Please Register Your Account</p>
          <form onSubmit={handleSubmit}>
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
            <div className='mt-2'>
              <p>Already have an account? <Link to="/login" className='underline cursor-pointer'>Sign in</Link></p>
            </div>
          </form>

        </div>
      </div>
    </main>
  );
};

export default Register;
