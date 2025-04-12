import React from 'react';
import Button from '../../views/components/Button';
import Logo from '../../views/components/Logo';

const SidebarHeader = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex justify-between items-center">
      <Logo className="flex justify-center mt-4 h-12" />
      <Button onClick={() => setIsOpen(!isOpen)} className="text-3xl font-bold">
        ☰
      </Button>
    </div>
  );
};

export default SidebarHeader;
