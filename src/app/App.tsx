import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './Header';
import Routes from './Routes';
import theme from './theme';

export default () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
};
