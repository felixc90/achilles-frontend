import * as React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Features } from './components/Features'
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme'


function App() {
    return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar/>
        <Home/>
        <About/>
        <Features/>
    </ThemeProvider>
    )
}

export default App;