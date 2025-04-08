import React from 'react';
import Button from '../../views/components/Button';
import Logo from '../../views/components/Logo';

const SidebarHeader = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-6 top-4 font-bold text-2xl"
      >
        ☰
      </Button>

      <Logo className="mt-4 w-full flex justify-center h-12" />
    </div>
  );
};

export default SidebarHeader;
