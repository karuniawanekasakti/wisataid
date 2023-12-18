import * as React from 'react';
import SelectComponent from '../../components/Select/SelectComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';
import Stack from '@mui/material/Stack';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';


import HeroImage from '../../assets/img/background 1.png'
import './Welcome.css'
import { useEffect } from 'react';


const Welcome = () => {
  const BASE_URL = 'https://wisataid-api.my.id/wisata';
  const [selectedCity, setSelectedCity] = React.useState('');
  const [city, setCity] = React.useState([]);

  useEffect(()=> {
    const getWisataCity = async () => {
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        // Filter out duplicate provinces and map to the format needed for SelectComponent
        const provinces = [...new Set(data.data.map(item => item.provinsi))].map(province => ({
          label: province,
          value: province,
        }));
        setCity(provinces);
        // console.log(data);
      } catch (error) {
        // console.log(error);
      }
    };
    getWisataCity();
  }, []);

  return (
    <>
      <div className='header'>
        <div className='bg-hero'>
          <img src={HeroImage} alt="Hero Image" />
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
                placeholder="Pilih Provinsimu"
                menuItems={Array.isArray(city) ? city.map((item) => ({
                  label: item.label,
                  value: item.value,
                })) : []}
              />
              <div className='button'>
                <ButtonComponent
                  text='Cari'
                  endIcon={<KeyboardArrowRightRoundedIcon fontSize='small' />}
                  size='medium'
                  variant='contained'
                  to={`/list-wisata/${selectedCity}`}
                />
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