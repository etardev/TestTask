import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Toaster } from 'react-hot-toast';
import { useRoutes } from 'react-router-dom';
import ScrollToTop from './app/components/ScrollToTop';
import routes from './app/routes/index';
import { themeWithLanguage } from './app/theme';

const App = (): JSX.Element => {
  let renderRoutes = useRoutes(routes);
  const language = 'en';

  return (
    <>
      <ThemeProvider theme={themeWithLanguage(language)}>
        <CssBaseline />
        <ScrollToTop />
        {renderRoutes}
      </ThemeProvider>
      <Toaster />
    </>
  );
};

export default App;
