/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';


export default function ButtonComponent(props) {
const theme = useTheme();
    return (
        <Link to={props.to}>
            <Button
                variant="contained"
                endIcon={props.endIcon}
                size={props.size}
                onClick={props.onClick}
                style={{...props.style, color: theme.palette.button.main, backgroundColor: theme.palette.mode === 'dark' ? 'white' : '#2979ff'}} // ku kasih perubahan sedikit untuk buttonnya
                className={props.className}
            >
                <b>
                    {props.text}
                </b>
            </Button>
        </Link>
    );
}