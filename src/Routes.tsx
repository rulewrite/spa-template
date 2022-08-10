import { Route, Routes } from 'react-router-dom';
import App from './components/App';
import Bpage from './components/Bpage';

export const routes = [
  {
    path: '/b',
    Component: Bpage,
    label: 'B PAGE',
  },
  {
    path: '/',
    Component: App,
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
