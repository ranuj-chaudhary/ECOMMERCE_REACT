import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../store/Reducers/authReducer';
import { RiLogoutBoxFill } from 'react-icons/ri';

const sidebarStyle = {
  list: ' px-[12px] py-[9px] hover:translate-x-2 rounded-sm flex justify-start font-bold items-center gap-[12px] hover:bg-blue-600 hover:text-white shadow-indigo-500/50 transition-all w-full mb-1  ',
  sidebar:
    'h-[100vh] w-64 bg-gray-200  p-5 transition-transform ease-linear duration-100 z-10 transform',
};

const SidebarNav = ({ allNavs }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <ul>
      {allNavs.map((nav, i) => (
        <li key={nav.id}>
          <Link
            className={`${
              pathname === nav.path
                ? 'bg-blue-600 shadow-indigo-500/50 text-white duration-500'
                : 'text-[#030811] font-bold duration-200 '
            } ${sidebarStyle.list}`}
            to={nav.path}
          >
            {nav.icon}
            {nav.title}
          </Link>
        </li>
      ))}
      <li>
        <Link
          className={` ${sidebarStyle.list}`}
          onClick={() => dispatch(logout({ role, navigate }))}
        >
          <RiLogoutBoxFill />
          Logout
        </Link>
      </li>
    </ul>
  );
};

export default SidebarNav;
