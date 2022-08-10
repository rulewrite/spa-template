import { Route, Routes } from 'react-router-dom';
import App from './components/App';
import Bpage from './components/Bpage';

export default () => {
  return (
    <Routes>
      <Route path="/b" element={<Bpage />}></Route>
      <Route path="/" element={<App />}></Route>
    </Routes>
  );
};
