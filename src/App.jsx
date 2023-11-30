import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/welcome/Welcome'
import ListWisata from './pages/listWIsata/ListWisata'
import HomePage from './pages/homePage/HomePage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../src/components/Header/Header';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className='nav'>
          <Header/>
        </div>
      <Routes>
        <Route path="/" Component={Welcome} />
        <Route path="/list-wisata" Component={ListWisata} />
        <Route path="/home-page" Component={HomePage} />
      </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
