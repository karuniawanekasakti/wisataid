/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ButtonComponent from "../Button/ButtonComponent.jsx";
import RatingComponent from "../Rating/RatingComponent.jsx";

export default function CardComponent(props) {
    return (
        <Card sx={{ maxWidth: 345}} style={{ width: '100%',boxShadow:'0 8px 16px rgba(0,0,0,0.4)'}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={props.avatar}>
                    </Avatar>
                }
                title={props.kota}
                subheader={props.kategori}
            />
            <CardMedia
                component="img"
                height="194"
                image={props.image}
                alt={props.title}
            />
            <CardContent style={{height:'280px'}}>
                <div style={{marginBottom: '10px'}}>
                    <Typography variant="caption" display="block">
                        <b>Rating</b>
                    </Typography>
                    <RatingComponent rating={Number(props.rating)}/>
                </div>
                <Typography gutterBottom variant="h5" style={{fontSize:'22px'}} component="div">
                    {props.nama_wisata}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                }} >
                    {props.deskripsi}
                </Typography>
                <div style={{marginTop:'20px', display: "flex", justifyContent: "end"}}>
                <ButtonComponent
                    text= "Lihat Detail"
                    size= "small"
                    to={`/detail/${props.id}`}
                    variant= "contained"
                />
                </div>
            </CardContent>
        </Card>
    );
}