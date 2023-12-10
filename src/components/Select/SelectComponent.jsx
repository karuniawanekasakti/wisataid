/* eslint-disable react/prop-types */
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(1),
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
export default function SelectComponent(props) {
  return (
    <div>
      <FormControl sx={{ width: '500px' }} variant={props.variant} size={props.size}>
        <InputLabel htmlFor={props.htmlFor}>Pilih Kota Tujuanmu</InputLabel>
        <Select
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">{props.placeholder}</MenuItem>
          {props.menuItems.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}