import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
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
    fontFamily: 'Roboto',
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      backgroundColor: theme.palette.background.default,
    },
  },
}));
export default function SelectComponent() {
  const [city, setcity] = React.useState('');
  const handleChange = (event) => {
    setcity(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ width: '500px' }} variant="standard" size='medium'>
        <InputLabel htmlFor="demo-customized-select-native">City</InputLabel>
        <Select
          id="demo-customized-select-native"
          value={city}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
            <MenuItem value="">Pilih Daerah tujuanmu</MenuItem>
            <MenuItem value={10}>Yogyakarta</MenuItem>
            <MenuItem value={20}>Malang</MenuItem>
            <MenuItem value={30}>Surabaya</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}