import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../Routes';

const links = routes.filter(({ label }) => label !== null);

export default () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          App
        </Typography>

        <nav>
          {links.map(({ path, label }) => {
            return (
              <Link
                key={path}
                variant="button"
                color="text.primary"
                to={path}
                component={RouterLink}
                sx={{ my: 1, mx: 1.5 }}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </Toolbar>
    </AppBar>
  );
};
