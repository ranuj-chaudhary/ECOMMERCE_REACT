import React from 'react';
import Button from '../../views/components/Button';

const sidebarStyle = {
  mobileSidebar:
    'text-black w-8 h-8 bg-gray-200 transition-transform ease-linear duration-100  flex flex-col justify-center items-center',
};

const MobileSidebar = ({ setIsOpen, isOpen }) => {
  return !isOpen ? (
    <div className={` ${sidebarStyle.mobileSidebar}`}>
      <Button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="text-2xl font-bold"
      >
        ☰
      </Button>
    </div>
  ) : null;
};

export default MobileSidebar;
