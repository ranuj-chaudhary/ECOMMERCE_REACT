import { useEffect, useState } from 'react';
import './App.css';
import Router from './router/Router';
import { PublicRoutes } from './router/routes/PublicRoutes';
import { getRoutes } from './router/routes/index';

function App() {
  const [allRoutes, setAllRoutes] = useState([...PublicRoutes]);

  useEffect(() => {
    const route = getRoutes();
    if (route) {
      setAllRoutes((allRoutes) => [...allRoutes, route]);
    }
  }, []);

  return <Router allRoutes={allRoutes} />;
}

export default App;
