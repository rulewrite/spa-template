import { Route, Routes } from 'react-router-dom';
import Bpage from './components/Bpage';
import Home from './components/Home';

export const routes = [
  {
    path: '/b',
    Component: Bpage,
    label: 'B PAGE',
  },
  {
    path: '/',
    Component: Home,
    label: null,
  },
];

export default () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}
    </Routes>
  );
};
