import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SimbolicImage from '../../assets/img/boyBeach.png';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Card, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import { useState, useEffect, useRef } from 'react';
import CarouselImage from '../../components/CarouselImage/CarouselImage.jsx';
import ButtonGroup from '../../components/Button/ButtonGroup.jsx';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 'auto',
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

const IMAGE_URL = 'http://47.128.228.117:4000/images/';

export default function HomePage() {
  const mainSectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('Alam');
  const [apiData, setApiData] = useState([]);
  const [index, setIndex] = useState(0);

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  useEffect(() => {
// ...
        const fetchData = async () => {
          try {
            const response = await fetch('http://47.128.228.117:4000/wisata');
            if (!response.ok) {
              const errorMessage = await response.text();
              throw new Error(`Server Error: ${errorMessage}`);
            }
            const jsonData = await response.json();
            
            // Tambahkan ini untuk melihat respons di konsol
            console.log('API response:', jsonData);

            if (Array.isArray(jsonData.data)) {
              setApiData(jsonData.data);  // Menggunakan setApiData
            } else {
              throw new Error('Invalid API response format');
            }
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        };
        // ...


    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        if (prev === (apiData.length > 0 ? apiData[index].foto_wisata.length - 1 : 0)) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex, index, apiData]);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => {
      if (prev === 0) {
        return (apiData.length > 0 ? apiData[index].foto_wisata.length - 1 : 0);
      }
      return prev - 1;
    });
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => {
      if (prev === (apiData.length > 0 ? apiData[index].foto_wisata.length - 1 : 0)) {
        return 0;
      }
      return prev + 1;
    });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = apiData.filter((item) =>
    selectedCategory === 'Semua' ? true : item.kategori === selectedCategory
  ).slice(0, 6);

  const randomPlace = apiData.length > 0 ? apiData[Math.floor(Math.random() * apiData.length)] : {};
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
            <img src={SimbolicImage} alt="Boy at the Beach" sx={{ maxWidth: '100%' }} height={'350px'} />
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
                >
                <KeyboardArrowDownOutlinedIcon sx={{ fontSize: '3.5rem', color: 'action',
                  '&:hover': { color: 'primary.dark', backgroundColor: 'rgba(135, 206, 235, 0.3)' } }} />
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
          <Grid item container spacing={2} textAlign={'center'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {apiData.slice(0, 3).map((item) => (
              <Grid item key={item.id} xs={12} sm={4} md={4} lg={4}>
                <Paper sx={{ borderRadius: '10px', backgroundColor: 'none', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', margin: '10px' }}>
                  <img src={item.foto_wisata && `${IMAGE_URL}${item.foto_wisata}`} alt={item.nama_wisata} style={{ width: '100%', height: '200px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                  <Typography variant="h6" sx={{ textAlign: 'center' }}>{item.nama_wisata}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} lg={12}>
            <Paper elevation={0} sx={{ p: 4, mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                      {randomPlace.nama_wisata} <span
                        style={{ color: 'gray', fontSize: '1.2rem', fontStyle: 'italic' }}> {randomPlace.kota}</span>
                    </Typography>
                </Box>
                <Box className='box' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                {randomPlace && randomPlace.foto_wisata && randomPlace.foto_wisata[currentImageIndex] && (
                  <>
                    <img
                      src={`${IMAGE_URL}${randomPlace.foto_wisata}`}
                      alt={randomPlace.nama_wisata}
                      style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '20px' }}
                    />
                    <CarouselImage
                      className='carousel'
                      steps={randomPlace.foto_wisata.length}
                      activeStep={currentImageIndex}
                      handleNext={goToNextImage}
                      handleBack={goToPreviousImage}
                    />
                  </>
                )}
                 </Box>
            </Paper>
          </Grid>
          {/* Di bawah ini adalah filter data by kategori */}
          <Grid item xs={12} sm={12} md={12} lg={12} style={{ textAlign: 'center', marginTop: '15px' }} ref={mainSectionRef} >
            <ButtonGroup onSelectCategory={handleCategorySelect} />
          </Grid>
          <Grid item container textAlign={'center'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '100px' }}>
            {filteredData.map((item) => (
              <Grid item key={item.id} style={{ width: '300px', margin: '10px' }}>
                <Paper sx={{ borderRadius: '10px', backgroundColor: 'none', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                  <img src={`${IMAGE_URL}${item.foto_wisata}`} alt={item.nama_wisata} style={{ width: '100%', maxHeight: '130px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                  <Typography variant="h6">{item.nama_wisata}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

