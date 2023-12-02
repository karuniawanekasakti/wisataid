import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectPopuler(props) {
    const [kategori, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
        // eslint-disable-next-line react/prop-types
        props.onChange(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Kategori </InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={kategori}
                label="Populer"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {/* eslint-disable-next-line react/prop-types */}
                <MenuItem value={props.kategori}>Sejarah</MenuItem>
                {/* eslint-disable-next-line react/prop-types */}
                <MenuItem value={props.kategori}>Budaya</MenuItem>
                {/* eslint-disable-next-line react/prop-types */}
                <MenuItem value={props.kategori}>Cahaya</MenuItem>
                {/* eslint-disable-next-line react/prop-types */}
                <MenuItem value={props.kategori}>Cafe</MenuItem>
                {/*<MenuItem value={30}>Thirty</MenuItem>*/}
            </Select>
        </FormControl>
    );
}
