import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { useState } from 'react';
import { useResponsiveSidebarEffect } from './../hooks/useResponsiveSidebarEffect ';

const MainLayout = () => {
  const [isOpen, setShowSidebar] = useState(false);

  useResponsiveSidebarEffect(setShowSidebar, 640, 250);

  return (
    <div className="min-h-screen flex ">
      <Sidebar isOpen={isOpen} setIsOpen={setShowSidebar} />
      <div className="flex flex-col flex-1 ">
        <Header />
        <main className="h-[calc(100vh-64px)] overflow-y-auto p-6">
          {<Outlet />}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
