import * as React from 'react';
import SelectComponent from '../../components/Select/SelectComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';
import Stack from '@mui/material/Stack';

import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';


import HeroImage from '../../assets/img/background 1.png'
import './Welcome.css'

const Welcome = () => {
  const [selectedCity, setSelectedCity] = React.useState('');

  const cities = [
    { label: 'Yogyakarta', value: "Yogyakarta" },
    { label: 'Malang', value: "Malang" },
    { label: 'Surabaya', value: "Surabaya" },
    // Add more cities as needed
  ];

  return (
    <>
      <div className='header' >
        <div className='bg-hero' >
          <img src={HeroImage}/>
          <div className='inner'>
            <Stack spacing={1} direction={'column'}>
              <h1 className='sub'>Mau kemana hari ini?</h1>
              <SelectComponent
                id="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                htmlFor="city"
                variant="outlined"
                size="medium"
                label="City"
                placeholder="Pilih Kota tujuanmu"
                menuItems={cities}
              />
              <div className='button'>
                <ButtonComponent text='Cari' endIcon={<KeyboardArrowRightRoundedIcon fontSize='small'/>} size='medium' variant='contained' to={`/list-wisata/${selectedCity}`} />
              </div>
              <a href="/home">Skip</a>
            </Stack>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome;