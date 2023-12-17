// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function TextInput(props) {
    return (
        <TextField id={props.id}
                   label={props.label}
                   variant={props.variant}
                   fullWidth={props.fullWidth}
                   required={props.required}
                   margin={props.margin}
                   type={props.type}
                   name={props.name}
                   autoFocus={props.autoFocus}
                   autoComplete={props.autoComplete}

        />
    );
}