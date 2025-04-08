import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllNav } from '../../navigation';
import SidebarHeader from './SidebarHeader';
import MobileSidebar from './MobileSidebar';
import SidebarNav from './SidebarNav';

const sidebarStyle = {
  list: ' px-[12px] py-[9px] hover:translate-x-2 rounded-sm flex justify-start font-bold items-center gap-[12px] hover:bg-blue-600 hover:text-white shadow-indigo-500/50 transition-all w-full mb-1  ',
  sidebar:
    'h-[100vh] w-64 bg-gray-200  p-5 transition-transform ease-linear duration-100 z-10 transform',
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [allNavs, setAllNavs] = useState([]);
  const { role } = useSelector((state) => state.auth);

  useEffect(() => {
    const navs = getAllNav(role);
    setAllNavs(navs);
  }, [role]);

  return isOpen ? (
    <aside
      className={`${sidebarStyle.sidebar} ${
        isOpen ? 'translate-x-0 relative' : '-translate-x-full  fixed'
      } 
          `}
    >
      <SidebarHeader isOpen={isOpen} setIsOpen={setIsOpen} />

      <SidebarNav allNavs={allNavs} />
    </aside>
  ) : (
    <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
  );
};

export default Sidebar;
