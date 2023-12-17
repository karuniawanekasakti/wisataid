import {Routes, Route} from 'react-router-dom'

import Welcome from './pages/welcome/Welcome'
import ListWisata from './pages/listWIsata/ListWisata'
import HomePage from './pages/homePage/HomePage';
import DetailPage from './pages/Detail/DetailPage';
import Contribution from './pages/Contribution/Contribution'


import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../src/components/Header/Header';
import React, {useState, useEffect} from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
    const [mode, setMode] = React.useState(localStorage.getItem('mode') || 'dark');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2700);
    }, []);
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
                        main: mode === 'light' ? '#000000' : '#ffffff', //tambah ini supaya tidak ribet atur warna button
                    },
                },
            }),
        [mode],
    );
    // const loaderColor = mode === 'dark' ? '#000000' : '#ffffff';
    // const backgroundColor = mode === 'dark' ? '#000000' : '#ffffff';
    //
    // if (loading) {
    //     document.body.style.backgroundColor = loaderColor;
    // } else {
    //     document.body.style.backgroundColor = backgroundColor;
    // }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className='nav'>
                <Header className='navBar' toogleColorMode={toogleColorMode}/>
            </div>
            {
                loading ? (
                    <ClimbingBoxLoader
                        color={mode === 'light' ? '#006aec' : '#ffffff'}
                        loading={loading}
                        size={20}
                        style={{width: '100%',height:'100vh', transform: 'translate(-50%, -50%)'}}
                    />
                ) : (
                    <Routes>
                        <Route path="/" Component={Welcome}/>
                        <Route path="/list-wisata/:city" Component={ListWisata}/>
                        <Route path="/home" Component={HomePage}/>
                        <Route path="/detail/:id" Component={DetailPage}/>
                        <Route path="/contribution" Component={Contribution}/>
                    </Routes>
                )
            }
        </ThemeProvider>
    )
}



export default App
