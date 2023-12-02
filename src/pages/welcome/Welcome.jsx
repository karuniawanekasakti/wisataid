import SelectComponent from '../../components/Select/SelectComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';
import Stack from '@mui/material/Stack';

import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';


import HeroImage from '../../assets/img/background 1.png'
import './Welcome.css'

const Welcome = () => {
  return (
    <>
      <div className='header' >
        <div className='bg-hero' >
          <img src={HeroImage}/>
          <div className='inner'>
            <Stack spacing={1} direction={'column'}>

              <h1>Mau kemana hari ini?</h1>
              <SelectComponent/>
              <div className='button'>
                <ButtonComponent text='Cari' endIcon={<KeyboardArrowRightRoundedIcon fontSize='small'/>} size='large'/>
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