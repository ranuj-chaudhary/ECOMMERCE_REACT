import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <p>
        Main Layout <Outlet />
      </p>
    </div>
  );
};

export default MainLayout;
