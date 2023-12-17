import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AllertMessage(props) {
    const configSnackBar = {
        vertical: 'top',
        horizontal: 'right',
    };
    const {vertical, horizontal} = configSnackBar;
    return (
        <Snackbar
            open={props.open}
            autoHideDuration={4000}
            onClose={props.onClose}
            anchorOrigin={{vertical, horizontal}}
            key={vertical + horizontal}
        >
            <Alert onClose={props.onClose}
                   severity={props.severity}
                   sx={{width: '100%'}}>
                {props.label}
            </Alert>
        </Snackbar>
    )
}

