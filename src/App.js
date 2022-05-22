import * as React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme'


function App() {
    return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar/>
        <Home/>
    </ThemeProvider>
    )
}

export default App;