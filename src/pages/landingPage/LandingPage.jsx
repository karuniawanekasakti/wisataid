import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SimbolicImage from '../../assets/img/boyBeach.png';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Card, CardContent} from '@mui/material';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import CarouselImage from "../../components/CarouselImage/CarouselImage.jsx";
import ButtonGroup from "../../components/Button/ButtonGroup.jsx";
import DataCard from "../../utils/DataCard.jsx";
import './LandingPage.css';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 'auto',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

const sortedDataCard = [...DataCard].sort((a, b) => b.rating - a.rating);
const topRatedData = sortedDataCard.slice(0, 3);

export default function LandingPage() {
// Di dalam komponen fungsional
    const mainSectionRef = useRef(null);

    const [selectedCategory, setSelectedCategory] = useState('Alam');

    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
    };

    const filteredData = DataCard.filter((item) =>
      selectedCategory === 'Semua' ? true : item.kategori === selectedCategory
    ).slice(0, 6);

    const [index, setIndex] = useState(0);

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const randomPlace = DataCard[Math.floor(Math.random() * DataCard.length)];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => {
                if (prev === randomPlace.image.length - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, [currentImageIndex, randomPlace.image.length]);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prev) => {
            if (prev === 0) {
                return randomPlace.image.length - 1;
            }
            return prev - 1;
        });
    }

    const goToNextImage = () => {
        setCurrentImageIndex((prev) => {
            if (prev === randomPlace.image.length - 1) {
                return 0;
            }
            return prev + 1;
        });
    }

    return (
        <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '80px',
          minHeight: '100vh',
          bgcolor: 'none',
        }}
      >
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} textAlign={'center'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={SimbolicImage} alt="Boy at the Beach" sx={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
            </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <DemoPaper variant="string">
              <h1 className='sub'>Welcome to Wisata Id</h1>
              <Typography variant="body1" gutterBottom sx={{ textAlign: 'left', marginBottom: '25px', marginTop: '25px' }}>
                "Rencanakan liburan tak terlupakan Anda dengan mudah dan menyenangkan bersama Wisata Id. Mulailah petualangan Anda hari ini!"
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ textAlign: 'left' }}>
                Dengan koleksi destinasi wisata yang sangat beragam, kami mengundang Anda untuk menjelajahi keindahan alam, mengenal budaya baru, dan membuat kenangan tak terlupakan di setiap langkah perjalanan Anda.
              </Typography>
                <h3>
                    Check it Out!!!
                </h3>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      mainSectionRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }}
                    className='chekItOutLink'
                    color="action" sx={{ '&:hover': { color: 'primary.dark' } }}
                  >
                    <KeyboardArrowDownOutlinedIcon sx={{ fontSize: '3.5rem' }} />
                  </a>                
            </DemoPaper>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <DemoPaper variant="string">
              <Typography variant="h1" gutterBottom sx={{ textAlign: 'left', fontWeight: 'bold' }}>
                Trending Destination
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ textAlign: 'left' }}>
                Most popular choices for travellers from Indonesia
              </Typography>
            </DemoPaper>
          </Grid>
          <Grid item container spacing={2}>
            {topRatedData.map((item) => (
              <Grid item key={item.id} xs={12} sm={4} md={4} lg={4}>
                <Paper sx={{ borderRadius: '10px', backgroundColor: 'none', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                  <img src={item.image[0]} alt={item.title} style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                  <Typography variant="h6" sx={{ textAlign: 'center' }}>{item.title}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} lg={12}>
            <Paper elevation={0} sx={{ p: 4, mt: 4 }}>
                <Box  sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography  variant="h4" gutterBottom>
                        {randomPlace.title} <span
                            style={{ color: 'gray', fontSize: '1.2rem', fontStyle: 'italic' }}> {randomPlace.city}</span>
                    </Typography>
                </Box>
                <Box className='box' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    {randomPlace && randomPlace.image && randomPlace.image[currentImageIndex] && (<>
                        <img src={randomPlace.image[currentImageIndex]} alt={randomPlace.alt}
                            style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '20px' }} />
                        <CarouselImage className='carousel' steps={randomPlace.image.length}
                            activeStep={currentImageIndex}
                            handleNext={goToNextImage} handleBack={goToPreviousImage} />
                    </>)}
                </Box>
            </Paper>            
          </Grid>
        {/*Di bawah ini adalah filter data by kategori*/}
          <Grid item xs={12} sm={12} md={12} lg={12} style={{textAlign: 'center', marginTop: '15px'}}  ref={mainSectionRef} >
              <ButtonGroup onSelectCategory={handleCategorySelect}/>
          </Grid>
          <Grid item container textAlign={'center'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '100px' }}>
                {filteredData.map((item) => (
                  <Grid item 
                  key={item.id} style={{ width: '300px', margin: '10px' }}>
                    <Paper sx={{ borderRadius: '10px', backgroundColor: 'none', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                        <img src={item.image[0]} alt={item.title} style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                        <Typography variant="h6">{item.title}</Typography>
                    </Paper>
                  </Grid>
                ))}
          </Grid>                               
        </Grid>             
      </Container>
    </React.Fragment>
    );
};