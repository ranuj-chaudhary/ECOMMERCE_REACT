import { useEffect, useState } from 'react';
import './App.css';
import Router from './router/Router';
import { PublicRoutes } from './router/routes/PublicRoutes';
import { getRoutes } from './router/routes/index';
import { useDispatch, useSelector } from 'react-redux';
import { get_user_info } from './store/Reducers/authReducer';
function App() {
  const [allRoutes, setAllRoutes] = useState([...PublicRoutes]);
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);


  useEffect(() => {
    const route = getRoutes();
    if (route) {
      setAllRoutes((allRoutes) => [...allRoutes, route]);
    }
  }, []);

  useEffect(() => {
    dispatch(get_user_info());
  }, [role, dispatch]);

  return <Router allRoutes={allRoutes} />;
}

export default App;
