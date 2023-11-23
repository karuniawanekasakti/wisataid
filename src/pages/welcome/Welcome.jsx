import Header from '../../components/Header/Header';
import Select from '../../components/Select/Select';
import ButtonComponent from '../../components/Button/ButtonComponent';
import Stack from '@mui/material/Stack';

import SearchIcon from '@mui/icons-material/Search';


import HeroImage from '../../assets/img/background 1.png'
import './welcome.css'

const Welcome = () => {
  return (
    <>
      <div className='header'>
        <div className='nav'>
          <Header/>
        </div>
        <div className='bg-hero'>
          <img src={HeroImage}/>
          <div className='inner'>
            <Stack spacing={1} direction={'column'}>

              <h1>Mau kemana hari ini?</h1>
              <Select/>
              <div className='button'>
                <ButtonComponent text='Cari' endIcon={<SearchIcon/>} size='large'/>
              </div>
              <a href="#">Skip</a>
            </Stack>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome;