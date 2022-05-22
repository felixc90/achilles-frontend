import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    spacing: 8,
    palette: {
      primary: {
        main: '#B24A3B',
      },
      background: {
        default: "#222222"
      },
      text: {
          primary: '#FFFFFF'
      }
    },
    typography: {
        h1: {
            fontFamily: 'Archivo Black'
        },
        subtitle1: {
            fontFamily: 'Comfortaa'
        }
    }
  });

export default theme;