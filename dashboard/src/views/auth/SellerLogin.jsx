import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { errorToast, successToast } from "../../utils/utils";
import { messageClear, seller_login } from "../../store/Reducers/authReducer";
import Button from "../../components/Button";
const SellerLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { role, errorMessage, loader, successMessage } = useSelector(
    (state) => state.auth
  );

  const submit = (e) => {
    e.preventDefault();
    dispatch(seller_login(state));
  };

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (role) {
      setTimeout(() => {
        successToast(successMessage, 1200);

        // Navigate after showing the toast
        setTimeout(() => {
          if (role === "seller") {
            navigate("/seller/dashboard", { replace: true });
          }
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

  return (
    <main className="bg-purple-300">
      <h1 className="text-center pt-4 text-4xl text-purple-800 font-bold">
        Seller Login Page
      </h1>
      <div className="min-w-screen min-h-screen  flex justify-center items-center">
        <div className="shadow-md shadow-purple-700 p-4 w-[350px] bg-purple-600 rounded-md  text-white m-0">
          <form onSubmit={submit}>
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
                autoComplete="email"
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
                autoComplete="current-password"
                required
                className="p-2 placeholder:text-gray-500 rounded-md text-purple-900 border-none focus:outline-2 focus:outline-purple-900"
              />
            </div>

            <p className="text-red-700">{errorMessage ? errorMessage : ""}</p>

            <div className="">
              <Button
                type="submit"
                className="font-bold w-full bg-gray-100 text-purple-700 rounded-md p-2 active:scale-95 "
                loading={loader}
                spinner={true}
                disabled={loader}
              >
                Login
              </Button>
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
          <div className="devider flex justify-between items-center gap-1 my-4">
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

export default SellerLogin;
