import { createTheme } from '@mui/material/styles';
import "@fontsource/lato";
import "@fontsource/lato/300.css"; 
import "@fontsource/lato/700.css"; 


//extender del Tipo Theme para evitar erroresde TypeScript
declare module "@mui/material/styles" {
  interface Palette {
    tertiary?: Palette["primary"];
    neutral?: Palette["primary"];
    black?: Palette["primary"];

  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
    neutral?: PaletteOptions["primary"];
    black?: PaletteOptions["primary"];

  }
}

export const theme = createTheme({
    palette: {
      primary: {
        main: '#3445c5', // blue
      },
      secondary: {
        main: '#FFDE59', // yellow
      },
      tertiary: {
        100: '#EBEDFF',
        500: '#A1ABFF', // light blue
        600: '#4D5EFF',
        800: '#0011AB'
      },
      black:{
        100: '#00120D'
      },
      background: {
        default: '#FFF', //bg-color: white
      },
      error: {
        main: '#CB1A14', //error
        light: 'rgba(203, 26, 20, 0.4)',
      },
      grey: {
        100: '#DFE2EF',
        200: '#BFC5CE',
        300: '#A3AAB8',
        400: '#838DA0',
        500: '#667185',
        600: '#525B6B',
      },
      neutral:{
        100: '#F6FFFC'
      }
    },
    typography: {
      fontFamily: 'Lato, sans-serif',
      h1: {
        fontSize: "24px", // Mobile
        "@media (min-width:768px)": { fontSize: "32px" }, // Tablet
        "@media (min-width:1440px)": { fontSize: "36px" }, // Desktop
      },
      h2: {
        fontSize: "20px", 
        "@media (min-width:768px)": { fontSize: "24px" }, 
        "@media (min-width:1440px)": { fontSize: "32px" }, 
      },
      h3: {
        fontSize: "18px", 
        "@media (min-width:768px)": { fontSize: "20px" }, 
        "@media (min-width:1440px)": { fontSize: "24px" }, 
      },
      body1: {
        fontSize: "16px", 
        "@media (min-width:768px)": { fontSize: "18px" }, 
      },
      body2: {
        fontSize: "12px", 
        "@media (min-width:768px)": { fontSize: "14px" }, 
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none", 
          },
        },
      },
    },
  });

export default theme;