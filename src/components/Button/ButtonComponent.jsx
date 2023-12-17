import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonComponent(props) {
    const ButtonContent = (
        <Button
            variant={props.variant}
            endIcon={props.endIcon}
            size={props.size}
            onClick={props.onClick}
            style={{...props.style}}
            fullWidth={props.fullWidth}
            type={props.type}
            className={props.className}
        >
            <b>
                {props.text}
            </b>
        </Button>
    );

    return props.to ? (
        <Link to={props.to}>
            {ButtonContent}
        </Link>
    ) : (
        ButtonContent
    );
}