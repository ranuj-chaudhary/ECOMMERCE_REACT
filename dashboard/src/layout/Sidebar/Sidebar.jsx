import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllNav } from '../../navigation';
import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarNav';

const sidebarStyle = {
  list: ' px-[12px] py-[9px] hover:translate-x-2 rounded-sm flex justify-start font-bold items-center gap-[12px] hover:bg-blue-600 hover:text-white shadow-indigo-500/50 transition-all w-full mb-1  ',
  sidebar:
    'h-[100vh] bg-gray-200 p-4 sm:relative sm:w-64 transition-transform ease-linear duration-100 z-10 transform fixed',
};

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [allNavs, setAllNavs] = useState([]);
  const { role } = useSelector((state) => state.auth);

  useEffect(() => {
    const navs = getAllNav(role);
    setAllNavs(navs);
  }, [role]);

  return isOpen ? (
    <aside
      className={`${sidebarStyle.sidebar} ${
        isOpen ? 'translate-x-0   w-2/3' : '-translate-x-full  '
      } 
          `}
    >
      <SidebarHeader isOpen={isOpen} setIsOpen={setIsOpen} />

      <SidebarNav allNavs={allNavs} />
    </aside>
  ) : null;
};

export default Sidebar;
