import {Routes, Route} from 'react-router-dom'

import Welcome from './pages/welcome/Welcome'
import ListWisata from './pages/listWisata/ListWisata'
import HomePage from './pages/homePage/HomePage';
import AboutUs from './pages/aboutUs/AboutUs';
import DetailPage from './pages/Detail/DetailPage';
import Login from './pages/HalamanLogin/login';
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
                    primary: {
                        main: mode === 'dark' ? '#1F3A5F' : '#3F51B5',
                    },
                    secondary: {
                        main: mode === 'dark' ? '#3D5A80' : '#2196F3',
                    },
                    text: {
                        primary: mode === 'dark' ? '#FFFFFF' : '#333333',
                        secondary: mode === 'dark' ? '#e0e0e0' : '#5c5c5c',
                    },
                    background: {
                        default: mode === 'dark' ? '#0F1C2E' : '#FFFFFF',
                        paper: mode === 'dark' ? '#1f2b3e' : '#f5f5f5',
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
            <CssBaseline
                style={{ marginRight: '0px', marginLeft: '0px'}}
            />
            {location.pathname !== '/login' && (
                <div className='nav'>
                    <Header className='navBar' toogleColorMode={toogleColorMode}/>
                </div>
            )}
            {
                loading ? (
                    <ClimbingBoxLoader
                        color={mode === 'light' ? '#3F51B5' : '#ffffff'}
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
                        <Route path="/login" Component={Login}/>
                        <Route path="/contribution" Component={Contribution}/>
                        <Route path="/AboutUs" Component={AboutUs}/>

                    </Routes>
                )
            }
        </ThemeProvider>
    )
}

export default App;