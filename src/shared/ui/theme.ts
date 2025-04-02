import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#3445c5', // blue
      },
      secondary: {
        main: '#FFDE59', // yellow
      },
      info: {
        main: '#A1ABFF', // light blues
      },
      background: {
        default: '#F6FFFC', //bg-color: white
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });

export default theme;
