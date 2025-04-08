import React from 'react';
import Button from '../../views/components/Button';
const sidebarStyle = {
  mobileSidebar:
    'left-0 top-0 p-4 bg-gray-200 transition-transform ease-linear duration-100 ',
};
const MobileSidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`w-16 h-[100vh] ${
        !isOpen ? 'translate-x-0' : '-translate-x-full fixed'
      } ${sidebarStyle.mobileSidebar}`}
    >
      <Button
        className="font-bold  text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </Button>
    </div>
  );
};

export default MobileSidebar;
