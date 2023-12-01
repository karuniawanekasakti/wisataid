import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/welcome/Welcome'
import ListWisata from './pages/listWIsata/ListWisata'
import HomePage from './pages/homePage/HomePage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../src/components/Header/Header';
import React from 'react';


function App() {
const [mode, setMode] = React.useState('dark');

  const toogleColorMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
    console.log(mode)
  }
  
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='nav'>
            <Header className='navBar' toogleColorMode={toogleColorMode}/>
          </div>
        <Routes>
          <Route path="/" Component={Welcome} />
          <Route path="/list-wisata" Component={ListWisata} />
          <Route path="/home" Component={HomePage} />
        </Routes>
        </ThemeProvider>
    </>
  )
}

export default App
