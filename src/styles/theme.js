import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    spacing: 8,
    palette: {
      primary: {
        main: '#0D698B',
      },
      background: {
        default: "#050533"
      },
      text: {
          primary: '#F2F1E8'
      }
    },
    // typography: {
    //     h1: {
    //         fontFamily: 'Archivo Black'
    //     },
    //     subtitle1: {
    //         fontFamily: 'Comfortaa'
    //     }
    // }
  });

export default theme;