import { createTheme } from '@mui/material';

export default createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
  },
});
