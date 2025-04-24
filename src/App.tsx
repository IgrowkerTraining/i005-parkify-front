import "@fontsource/lato";
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './shared/ui/theme';
import { router } from './app/router';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import GlobalModal from "./shared/ui/components/GlobalModal";

// import { useMockAvailabilityUpdates } from './features/parkings/hooks/useMockAvailabilityUpdates' // para simular cambios sin backend

const App = () => {

  //useMockAvailabilityUpdates() // para simular cambios sin backend

  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
    <GlobalModal />
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
};

export default App;
