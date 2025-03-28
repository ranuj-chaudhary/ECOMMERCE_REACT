import { useState } from 'react';
import './App.css';
import Router from './router/Router';
import PublicRoutes from './router/routes/PublicRoutes';
import PrivateRoutes from './router/routes/ProtectRoutes';
function App() {
  const [allRoutes, setAllRoutes] = useState([...PublicRoutes, ...PrivateRoutes]);

  return <Router allRoutes={allRoutes} />;
}

export default App;
 