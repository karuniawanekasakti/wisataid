/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';


export default function ButtonComponent(props) {
  
  return (
      <Button
          variant="contained"
          endIcon={props.endIcon}
          size={props.size}
          onClick={props.onClick}
          style={props.style}
      >
        <b>
          {props.text}
        </b>
      </Button>
  );
}