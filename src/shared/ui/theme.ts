import { createTheme } from '@mui/material/styles';
import { red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
      primary: {
        main: '#3445c5', // blue
      },
      secondary: {
        main: '#FFDE59', // yellow
      },
      info: {
        main: '#A1ABFF', // light blue
      },
      background: {
        default: '#F6FFFC', //bg-color: white
      },
      error: {
        main: red.A400, //error
    }
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });

export default theme;
