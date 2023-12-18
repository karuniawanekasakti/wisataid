// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import {useParams} from "react-router-dom";
import {Box, Typography, Container, Paper} from "@mui/material";
import './DetailPage.css';
import RatingComponent from "../../components/Rating/RatingComponent.jsx";
import Grid from "@mui/material/Grid";
import ButtonComponent from "../../components/Button/ButtonComponent.jsx";
import {useEffect, useState} from "react";
import {useTheme} from "@mui/material/styles";
import Footer from '../../components/Footer/Footer.jsx';


export default function DetailPage() {
    const [data, setData] = useState(null);
    const BASE_URL = 'http://47.128.153.249:4000/wisata';
    const BASE_IMAGE = 'http://47.128.153.249:4000/images/';

    const theme = useTheme();
    const {id} = useParams();

    useEffect(() => {
        const getDataWista = async () => {
            try {
                const response = await fetch(`${BASE_URL}/${id}`);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                setData(data.data[0]); // set data to data.data[0] because data is an array
            } catch (error) {
                console.log(error);
            }
        };
        getDataWista();
    }, [id]);

    if (!data) {
        return <div>Not Found</div>;
    }

    const img = (`${BASE_IMAGE}${data.foto_wisata}`);
    return (
        <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '15px',
          minHeight: '100vh',
        }}
        maxWidth={'xl'}
        disableGutters={true}
        style={{backgroundColor: theme.palette.background.default}}
        >
            <Paper elevation={0} sx={{p: 4, mt: 4}} style={{backgroundColor: theme.palette.background.default}} maxWidth={'md'}>
                <Box sx={{marginTop: 2,}}>
                    <ButtonComponent
                        className='myButton'
                        data-testid="back-button"
                        text='Kembali'
                        size="small"
                        to={`/list-wisata/${data.provinsi}`}
                        variant="outlined"
                        style={{color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#3F51B5'}}
                    />
                </Box>
                <Box className='btnTitle' sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography className='titleDetail' variant="h4" gutterBottom>
                        {data.nama_wisata}
                        <span
                            style={{color: 'gray', fontSize: '1.2rem', fontStyle: 'italic'}}> {data.kota}
                        </span>
                    </Typography>
                </Box>
                <Box className='box' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
                    <img src={img} alt={data.nama_wisata}
                         style={{width: '100%', height: '500px', objectFit: 'cover', borderRadius: '20px'}}/>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                        <Typography variant="subtitle2" color="text.secondary">
                            <p>{data.provinsi}</p>
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            Kategori: <i>{data.kategori}</i>
                        </Typography>
                        <RatingComponent rating={Number(data.rating)}/>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography style={{marginTop: '15px'}} variant="body1">{data.deskripsi}</Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className='mapIcon'>
                                <iframe
                                    src={`https://maps.google.com/maps?q=${data.latitude},${data.longtitude}&z=15&output=embed`}
                                    width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            <Grid className='footer' marginTop={'30px'} marginRight={'0'} marginLeft={'0'}>
              <Footer/>       
            </Grid>                    
        </Container>
    )
}