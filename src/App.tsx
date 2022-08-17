import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Routes from './Routes';
import theme from './theme';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
