import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import { debounce } from '@mui/material/utils';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const fetchData = debounce(async (input, callback) => {
    const response = await fetch(`http://47.128.228.117:4000/wisata?search=${input}`);
    const data = await response.json();
    callback(data.data);
}, 400);

export default function SearchComponent(props) {
    const BASE_IMAGE = 'http://47.128.228.117:4000/images/';
    const theme = useTheme();
    const navigate = useNavigate();
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);

    React.useEffect(() => {
        let active = true;

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fetchData(inputValue, (results) => {
            if (active) {
                let newOptions = [];

                if (value) {
                    newOptions = [value];
                }

                if (results) {
                    newOptions = [...newOptions, ...results];
                }

                setOptions(newOptions);
            }
        });

        return () => {
            active = false;
        };
    }, [value, inputValue]);
    return (
        <Autocomplete
            id="custom-search-demo"
            className={props.className}
            sx={{
                width: 300,
                '& .MuiOutlinedInput-root': {
                    borderRadius: '80px',
                    // backgroundColor: 'transparent',
                },
            }}
            getOptionLabel={(option) => option.nama_wisata}
            filterOptions={(options, params) => {
                const filtered = options.filter((option) =>
                    option.nama_wisata.toLowerCase().includes(params.inputValue.toLowerCase()) ||
                    option.provinsi.toLowerCase().includes(params.inputValue.toLowerCase()) ||
                    option.kota.toLowerCase().includes(params.inputValue.toLowerCase())
                );
                return filtered;
            }}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            onChange={(event, newValue) => {
                setOptions(newValue ? [newValue, ...options] : options);
                setValue(newValue);
                navigate(`/detail/${newValue.id}`);
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search"
                    fullWidth
                    InputProps={{
                        ...params.InputProps,
                        style: { borderRadius: '20px' },
                    }}
                    sx={{ backgroundColor: theme.palette.background.paper, borderRadius: '20px' }}
                />
            )}
            renderOption={(props, option) => {
                const img = `${BASE_IMAGE}${option.foto_wisata}`;
                return (
                    <li {...props}>
                        <Grid container>
                            <Grid item xs={12} sm={3} md={2}>
                                <img src={img} alt={option.nama_wisata} style={{borderRadius: '50%'}} width="50"
                                     height="50"/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={8}>
                                <div style={{marginLeft: '20px'}}>
                                    <Typography variant="body2" style={{fontSize: '1rem',fontWeight:'bold'}}>
                                        {option.nama_wisata}
                                    </Typography>
                                    <Typography variant="body2" style={{fontSize: '13px', fontStyle: 'italic'}}>
                                        {option.kota} {option.provinsi}
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </li>
                );
            }}
        />
    );
}