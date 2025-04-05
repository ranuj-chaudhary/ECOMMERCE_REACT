import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex ">
      <Sidebar />
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
