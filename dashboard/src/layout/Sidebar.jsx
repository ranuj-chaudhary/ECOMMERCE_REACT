import React, { useEffect, useState } from 'react';
import Logo from '../views/components/Logo';
import Button from '../views/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNav } from '../navigation';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [allNavs, setAllNavs] = useState([]);
  const { role } = useSelector((state) => state.auth);
  const { pathname } = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    const navs = getAllNav(role);
    setAllNavs(navs);
  }, [role]);

  return (
    <>
      <SmallSideBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <aside
        className={`h-[100vh] w-64 bg-gray-200  p-5 
        transform ${
          isOpen ? 'translate-x-0 relative' : '-translate-x-full  fixed'
        } 
         transition-transform ease-linear duration-100 z-10 `}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-6 top-4 font-bold text-2xl"
        >
          ☰
        </Button>

        <div className="flex flex-col gap-4 mt-4">
          <Logo className="mt-4 w-full flex justify-center h-12" />
        </div>

        <ul>
          {allNavs.map((nav, i) => (
            <li key={nav.id}>
              <Link
                className={`${
                  pathname === n.path
                    ? 'bg-blue-600 shadow-indigo-500/50 text-white duration-500'
                    : 'text-[#030811] font-bold duration-200 '
                } px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 `}
                to={nav.path}
              >
                {nav.icon}
                {nav.title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className="flex gap-2 items-center hover:bg-gray-400 p-2"
            onClick={() => dispatch(logout_user())}
            >
              Logout
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

function SmallSideBar({ isOpen, setIsOpen }) {
  return (
    <aside
      className={`w-16 h-[100vh] ${
        !isOpen ? 'translate-x-0' : '-translate-x-full fixed'
      } left-0 top-0 p-4 bg-gray-200 transition-transform ease-linear duration-100`}
    >
      <Button
        className="font-bold  text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </Button>
    </aside>
  );
}

export default Sidebar;
