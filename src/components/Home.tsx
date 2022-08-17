import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      hello App
      <br />
      <Button component={Link} to="/b" variant="contained">
        Go to B
      </Button>
    </div>
  );
};
