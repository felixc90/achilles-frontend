import * as React from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from './components/Navbar'
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import theme from './styles/theme'


function App() {
    return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
         <Navbar/>
    </ThemeProvider>
    )
}

export default App;