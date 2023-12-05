/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function ButtonComponent(props) {

    return (
        <Link to={props.to}>
            <Button
                variant="contained"
                endIcon={props.endIcon}
                size={props.size}
                onClick={props.onClick}
                style={props.style}
                className={props.className}
            >
                <b>
                    {props.text}
                </b>
            </Button>
        </Link>
    );
}