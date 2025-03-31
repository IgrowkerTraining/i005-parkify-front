import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './shared/ui/theme';
import { AppRouter } from './app/router';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppRouter />
  </ThemeProvider>
);

export default App;
