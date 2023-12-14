import {Routes, Route} from 'react-router-dom'
import Welcome from './pages/welcome/Welcome'
// import ListWisata from './pages/listWIsata/ListWisata'
import ListWisata from './pages/homePage/ListWisata.jsx';
import LandingPage from './pages/landingPage/LandingPage.jsx';
import DetailPage from './pages/Detail/DetailPage';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../src/components/Header/Header';
import React from 'react';


function App() {
    const [mode, setMode] = React.useState(localStorage.getItem('mode') || 'dark');

    // const toogleColorMode = () => {
    //     setMode(mode === 'dark' ? 'light' : 'dark');
    //     console.log(mode)
    // }
    const toogleColorMode = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        localStorage.setItem('mode', newMode);
        setMode(newMode);
    };
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    button: {
                        main: mode === 'light' ? '#ffffff' : '#000000', //tambah ini supaya tidak ribet atur warna button
                    },
                },
            }),
        [mode],
    );

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className='nav'>
                    <Header className='navBar' toogleColorMode={toogleColorMode}/>
                </div>
                <Routes>
                    <Route path="/" Component={Welcome}/>
                    {/*<Route path="/list-wisata" Component={ListWisata}/>*/}
                    <Route path="/list-wisata" Component={ListWisata}/>
                    <Route path="/LandingPage" Component={LandingPage}/>
                    <Route path="/detail/:id" Component={DetailPage}/>
                </Routes>
            </ThemeProvider>
        </>
    )
}

export default App
