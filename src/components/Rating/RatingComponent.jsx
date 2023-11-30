import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingComponent(props) {
    return (
        <Stack spacing={1}>
            {/* eslint-disable-next-line react/prop-types */}
            <Rating name="half-rating-read" size='small' value={props.rating} precision={0.5} readOnly />

        </Stack>
    );
}
