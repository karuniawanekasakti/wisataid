import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/material/Button';
import Footer from '../../components/Footer/Footer.jsx';


import './AboutUs.css';

const teamMembers = [
    {
        id: 1,
        name: 'Karuniawan Ekasakti',
        role: 'Front-End Developer',
        university: 'Universitas Gadjah Mada',
        image: 'https://drive.google.com/uc?id=1cHBtuSD7vEsjDBQYYlM8J6Rp8Ok17sXS',
    },
    {
        id: 2,
        name: 'Farhan Maulana Pangestu',
        role: 'Front-End Developer',
        university: 'Universitas Alma Ata',
        image: 'https://drive.google.com/uc?id=1KdD0lLUqBJu40iJ430HdKL2lUupGSVlB',
    },
    {
        id: 3,
        name: 'Ridwan Maulana',
        role: 'Front-End Developer',
        university: 'Universitas Alma Ata',
        image: 'https://drive.google.com/uc?id=1dkc0DusIOqXZPqClSOB73p9lcPhJBsrQ',
    },
    {
        id: 4,
        name: 'Yahya Khaliman Indrayana',
        role: 'Back-End-End Developer',
        university: 'Universitas Amikom Surakarta',
        image: 'https://drive.google.com/uc?id=1wryo7xCdgGdY7Lla7bgV94w8Vts3YbmV',
    },
    {
        id: 5,
        name: 'Hana Amanda',
        role: 'UI/UX Designer',
        university: 'Universitas Teknologi Digital Indonesia',
        image: 'https://drive.google.com/uc?id=1A61FO7NFxR5fXbqVN78PSuKVMB9y2Vuc',
    }
];


const AboutUs = () => {

    const [activeSlide, setActiveSlide] = React.useState(0);

    const nextSlide = () => {
        setActiveSlide((prevIndex) => (prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setActiveSlide((prevIndex) => (prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1));
    };


    return (
        <React.Fragment>
            <CssBaseline/>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '80px',
                    minHeight: '100vh',
                }}
                maxWidth={'xl'}
                disableGutters={true}
            >
                <Box sx={{bgcolor: 'transparent', marginTop: '70px', flexGrow: 1}} className='box-konten1'>
                    <Grid container sx={{spacing: '2', minHeight: '160', marginLeft: '5%', marginRight: '5%',}}>
                        <Grid xs={12}>
                            <Typography variant="h4" gutterBottom sx={{textAlign: 'left',}} fontWeight="bold">
                                Tentang Kami
                            </Typography>
                        </Grid>
                        <Grid xs={12} marginTop="15px">
                            <Typography variant="body1" gutterBottom sx={{textAlign: 'left',}}>
                                Wisata ID merupakan sebuah platfrom yang menyediakan informasi seputar pariwisata di
                                Indonesia. Tentunya dengan berbagai fitur yang memudahkan pengguna untuk mencari wisata
                                yang diinginkan. Anda bisa mencari wisata dengan klasifikasi wisata sesuai dengan yang
                                anda minta berdasarkan rating, kategori maupun region lokasi wisata yang hendak dituju.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{
                        spacing: '2',
                        minHeight: '160',
                        marginLeft: '5%',
                        marginRight: '5%',
                        textAlign: 'left',
                        marginTop: '20px'
                    }}>
                        <Grid xs={12}>
                            <Typography variant="h4" gutterBottom fontWeight="bold">
                                Our Team Members
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{
                        spacing: '2',
                        minHeight: '160',
                        marginLeft: '5%',
                        marginRight: '5%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div className="carousel-container">
                            <div className="carousel-wrapper" style={{transform: `translateX(-${activeSlide * 100}%)`}}>
                                {teamMembers.map((person) => (
                                    <Grid key={person.id} xs={12} className="carousel-item" sx={{
                                        padding: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        marginTop: '20px',
                                        marginBottom: '20px',
                                        marginLeft: '0.1px'
                                    }}>
                                        <Avatar src={person.image}
                                                sx={{height: '250px', width: '250px', marginBottom: '20px'}}/>
                                        <Typography variant="h6" gutterBottom fontWeight="bold">
                                            {person.name}
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            {person.role}
                                        </Typography>
                                        <Typography variant="caption" gutterBottom>
                                            {person.university}
                                        </Typography>
                                    </Grid>
                                ))}
                            </div>
                            <div style={{textAlign: 'center'}} className="two-button">
                                <Button>
                                    <KeyboardArrowLeft onClick={prevSlide} color="action" style={{fontSize: '3rem'}}
                                                       sx={{'&:hover': {color: 'primary.dark'}}}/>
                                </Button>
                                <Button>
                                    <KeyboardArrowRight onClick={nextSlide} color="action" style={{fontSize: '3rem'}}
                                                        sx={{'&:hover': {color: 'primary.dark'}}}/>
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid container sx={{
                        spacing: '2',
                        minHeight: '160',
                        marginLeft: '5%',
                        marginRight: '5%',
                        justifyContent: 'left',
                        textAlign: 'left',
                        marginBottom: '25px',
                        marginTop: '30px'
                    }}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Box>
                                <ul style={{listStyleType: 'none', padding: 5}}>
                                    <li style={{display: 'inline-block', marginRight: '15px'}}>
                                        <Stack spacing={2} direction="row" alignItems="center">
                                            <LocationOnIcon/>
                                            <Typography>Daerah Istimewa Yogyakarta</Typography>
                                        </Stack>
                                    </li>
                                    <li style={{display: 'inline-block', marginRight: '15px'}}>
                                        <Stack spacing={2} direction="row" alignItems="center">
                                            <MailIcon/>
                                            <Typography>helpdesk@explorewisata.id</Typography>
                                        </Stack>
                                    </li>
                                    <li style={{display: 'inline-block', marginRight: '15px'}}>
                                        <Stack spacing={2} direction="row" alignItems="center">
                                            <LanguageIcon/>
                                            <Typography>wisata.id</Typography>
                                        </Stack>
                                    </li>
                                </ul>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container sx={{
                        spacing: '2',
                        minHeight: '160',
                        marginLeft: '5%',
                        marginRight: '5%',
                        justifyContent: 'left',
                        marginBottom: '100px',
                        textAlign: 'left'
                    }}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography variant="caption" gutterBottom>
                                POWERED BY:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <img src="https://drive.google.com/uc?id=1exBksZYF3eBnl1_Ho-Ifzw5-3hZLkLD_" alt=""
                                 style={{
                                     maxHeight: '50px',
                                     width: 'auto',
                                     display: 'inline-block',
                                     marginRight: '10px'
                                 }}
                            />
                            <img src="https://drive.google.com/uc?id=1FAPeB66r5M2Z0HnBrGoPvOn41VjzWv6q" alt=""
                                 style={{maxHeight: '50px', width: 'auto', display: 'inline-block', marginLeft: '10px'}}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Grid className='footer' marginRight={'0'} marginLeft={'0'}>
                    <Footer/>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default AboutUs;