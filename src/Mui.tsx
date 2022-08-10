import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { ReactNode } from 'react';

const theme = createTheme({});

export default ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
