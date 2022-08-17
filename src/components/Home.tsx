import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import countState from '../state/count';

export default () => {
  const [count, setCount] = useRecoilState(countState);
  const incrementByOne = () => setCount(count + 1);

  return (
    <div>
      hello App
      <br />
      <Button component={Link} to="/b" variant="contained">
        Go to B
      </Button>
      <Button onClick={incrementByOne} variant="contained">
        increment
      </Button>
    </div>
  );
};
