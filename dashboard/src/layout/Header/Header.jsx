import React from "react";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import MobileSidebar from "../Sidebar/MobileSidebar";

const Header = ({ setIsOpen, isOpen }) => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <header className="flex gap-4 justify-between items-center p-2 w-full text-white bg-gray-800">
      <MobileSidebar setIsOpen={setIsOpen} isOpen={isOpen} />
      <input
        className="flex-1 px-4 py-2 rounded border border-gray-300 appearance-none lg:flex-none md:w-2/3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        placeholder="Enter order to search"
        name="search"
      />
      <Profile userInfo={userInfo} />
    </header>
  );
};

export default Header;
