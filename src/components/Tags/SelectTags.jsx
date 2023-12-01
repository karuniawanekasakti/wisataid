/* eslint-disable */
// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function SelectTags(props){
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" style={{textAlign:'center', marginLeft:'80%'}}>Kategori</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                size={"small"}
                style={props.style}
            >
                <FormControlLabel value={props.kategori} control={<Radio />} label="Sejarah" />
                <FormControlLabel value={props.kategori} control={<Radio />} label="Budaya" />
                <FormControlLabel value={props.kategori} control={<Radio />} label="cahaya" />
            </RadioGroup>
        </FormControl>
    );
}
