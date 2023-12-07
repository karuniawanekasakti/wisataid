// eslint-disable-next-line no-unused-vars
import * as React from 'react';
// import { useLocation } from "react-router-dom";
import {useParams} from "react-router-dom";
import DataCard from "../../utils/DataCard.jsx";
import {Box, Typography, Container, Paper} from "@mui/material";
// import Button from "@mui/material/Button";
import CarouselImage from "../../components/CarouselImage/CarouselImage.jsx";
import './DetailPage.css';
import RatingComponent from "../../components/Rating/RatingComponent.jsx";
import Grid from "@mui/material/Grid";
import ButtonComponent from "../../components/Button/ButtonComponent.jsx";
// import MapComponent from '../../components/Map/MapComponent.jsx';
import ReplyIcon from '@mui/icons-material/Reply';

export default function DetailPage() {
    const {id} = useParams();
    const data = DataCard.find((data) => data.id === Number(id));

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => {
                if (prev === data.image.length - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, [currentImageIndex, data.image.length]);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prev) => {
            if (prev === 0) {
                return data.image.length - 1;
            }
            return prev - 1;
        });
    }

    const goToNextImage = () => {
        setCurrentImageIndex((prev) => {
            if (prev === data.image.length - 1) {
                return 0;
            }
            return prev + 1;
        });
    }

    if (!data) {
        return <div>Not Found</div>;
    }

    return (<Container maxWidth="100%">
        <Paper elevation={0} sx={{p: 4, mt: 4}}>
            <Box className='btnTitle' sx={{display: 'flex', alignItems: 'center'}}>
                <ButtonComponent
                    className='myButton'
                    data-testid="back-button"
                    endIcon={<ReplyIcon/>}
                    size="small"
                    to={`/home`}
                />
                <Typography className='titleDetail' variant="h4" gutterBottom>
                    {data.title} <span
                    style={{color: 'gray', fontSize: '1.2rem', fontStyle: 'italic'}}> {data.city}</span>
                </Typography>
            </Box>
            <Box className='box' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
                {data && data.image && data.image[currentImageIndex] && (<>
                    <img src={data.image[currentImageIndex]} alt={data.alt}
                         style={{width: '100%', height: '500px', objectFit: 'cover', borderRadius: '20px'}}/>
                    <CarouselImage className='carousel' steps={data.image.length} activeStep={currentImageIndex}
                                   handleNext={goToNextImage} handleBack={goToPreviousImage}/>
                </>)}

                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                    <Typography variant="subtitle2" color="text.secondary">
                        Kategori: <i>{data.kategori}</i>
                    </Typography>
                    <RatingComponent rating={data.rating}/>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography style={{marginTop: '15px'}} variant="body1">{data.description}</Typography>
                        <Typography style={{marginTop: '15px'}} variant="body1">{data.description}</Typography>
                        <Typography style={{marginTop: '15px'}} variant="body1">{data.description}</Typography>
                        <Typography style={{marginTop: '15px'}} variant="body1">{data.description}</Typography>
                        <Typography style={{marginTop: '15px'}} variant="body1">{data.description}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* Tempatkan komponen peta Anda di sini */}
                        {/*<MapComponent lat={data.lat} lng={data.lng}/>*/}
                        <div className='mapIcon'>
                            <iframe
                                src={data.maps}
                                width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    </Container>)
}