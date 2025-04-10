import React from 'react';
import Button from '../../views/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../store/Reducers/authReducer';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { resetUser } from '../../store/Reducers/authReducer';
const sidebarStyle = {
  mobileSidebar:
    'left-0 top-0 bg-gray-200 transition-transform ease-linear duration-100 w-16 h-[100vh] flex flex-col justify-center items-center ',
  list: 'relative px-[4px] py-[9px] text-2xl hover:scale(120%) rounded-sm flex justify-start font-bold items-center gap-[12px] hover:bg-blue-600 hover:text-white shadow-indigo-500/50 transition-all w-full mb-1  ',
  sidebar:
    'h-[100vh] w-64 bg-gray-200  p-5 transition-transform ease-linear duration-100 z-10 transform',
};

const MobileSidebar = ({ isOpen, setIsOpen, allNavs }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleLogout({ role, navigate }) {
    dispatch(logout({ role, navigate }));
    dispatch(resetUser());
  }

  return (
    <div
      className={`${!isOpen ? 'translate-x-0' : '-translate-x-full fixed'} ${
        sidebarStyle.mobileSidebar
      }`}
    >
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-6 top-4 font-bold text-2xl"
      >
        ☰
      </Button>

      <ul>
        {allNavs.map((nav, i) => (
          <li key={nav.id}>
            <Link
              className={`${
                pathname === nav.path
                  ? 'bg-blue-600 shadow-indigo-500/50 text-white duration-500'
                  : 'text-[#030811] font-bold duration-200'
              } ${sidebarStyle.list}`}
              to={nav.path}
            >
              <span>{nav.icon}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link
            className={` ${sidebarStyle.list}`}
            onClick={() => handleLogout({ role, navigate })}
          >
            <RiLogoutBoxFill />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileSidebar;
