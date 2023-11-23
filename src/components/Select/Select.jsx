import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    fontSize: 20,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: 'poppins',
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      backgroundColor: theme.palette.background.default,
    },
  },
}));
export default function Select() {
  const [city, setcity] = React.useState('');
  const handleChange = (event) => {
    setcity(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ width: '500px' }} variant="standard" size='medium'>
        <InputLabel htmlFor="demo-customized-select-native">City</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={city}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="">Pilih Daerah tujuanmu</option>
          <option value={10}>Yogyakarta</option>
          <option value={20}>Malang</option>
          <option value={30}>Surabaya</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}