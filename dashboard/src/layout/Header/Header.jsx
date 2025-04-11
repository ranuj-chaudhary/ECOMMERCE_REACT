import React from 'react';
import SearchInput from './SearchInput';
import Profile from './Profile';
import { useSelector } from 'react-redux';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <header className="h-16 flex justify-between items-center bg-gray-800 text-white p-4">
      <SearchInput />
      <Profile userInfo={userInfo} />
    </header>
  );
};

export default Header;
