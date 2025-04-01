import { useEffect, useState } from 'react';
import './App.css';
import Router from './router/Router';
import { PublicRoutes } from './router/routes/PublicRoutes';
import { getRoutes } from './router/routes/index';

function App() {
  const [allRoutes, setAllRoutes] = useState([...PublicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes((allRoutes) => [...allRoutes, ...routes]);
  }, []);

  return <Router allRoutes={allRoutes} />;
}

export default App;
