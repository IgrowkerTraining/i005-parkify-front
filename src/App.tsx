import "@fontsource/lato";
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './shared/ui/theme';
import { router } from './app/router';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { MapView } from "./features/maps/components/MapView";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
    <MapView />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      theme="colored"
    />
  </ThemeProvider>
);

export default App;
