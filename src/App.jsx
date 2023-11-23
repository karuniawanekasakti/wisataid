import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/welcome/Welcome'
import ListWisata from './pages/listWIsata/ListWisata'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
      <Routes>
        <Route path="/" Component={Welcome} />
        <Route path="/list-wisata" Component={ListWisata} />
      </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
