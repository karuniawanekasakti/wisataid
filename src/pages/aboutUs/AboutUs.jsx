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
import LanguageIcon from '@mui/icons-material/Language';
import './AboutUs.css';

  const teamMembers = [
    {
      id: 1,
      name: 'Karuniawan Ekasakti',
      role: 'Front-End Developer',
      university: 'Universitas Gadjah Mada',
      image: 'https://drive.google.com/uc?id=1wryo7xCdgGdY7Lla7bgV94w8Vts3YbmV',
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
      image: 'https://drive.google.com/uc?id=1s4qtA-oBm2vnc0PI-YTver1oWUAQtX8z',
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
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: 'transparent', marginTop: '17%', flexGrow: 1}}>
	       	<Grid container sx={{spacing: '2', minHeight: '160', marginLeft: '5%', marginRight: '5%',}}>
			        <Grid xs={12}>	       		
					       	<Typography variant="h4" gutterBottom sx={{textAlign:'left',}} fontWeight="bold">
					        	Tentang Kami
					        </Typography>
			        </Grid>		
			        <Grid xs={12}>	        
					       	<Typography variant="body1" gutterBottom sx={{textAlign:'left',}}>
					        	Wisata ID merupakan sebuah platfrom yang menyediakan informasi seputar pariwisata di Indonesia. Tentunya dengan berbagai fitur yang memudahkan pengguna untuk mencari wisata yang diinginkan. Anda bisa mencari wisata dengan klasifikasi wisata sesuai dengan yang anda minta berdasarkan rating, kategori maupun region lokasi wisata yang hendak dituju.
					        </Typography>
				    	</Grid>
			    </Grid>
			    <Grid container sx={{spacing: '2', minHeight: '160', marginLeft: '5%', marginRight: '5%', textAlign: 'center', marginTop:'20px'}}>
			        <Grid xs={12}>			        
					       	<Typography variant="h4" gutterBottom fontWeight="bold">
					        	Our Team Members
					        </Typography>
				    	</Grid>
			    </Grid>
          <Grid container sx={{ spacing: '2', minHeight: '160', marginLeft: '5%', marginRight: '5%', alignItems: 'center', justifyContent: 'center' }}>
             {teamMembers.map((person) => (
               <Grid key={person.id} xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
                 {/* Menggunakan URL dari Google Drive atau Internet */}
                 <Avatar src={person.image} sx={{ height: '270px', width: '270px', marginBottom: '20px' }} />
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
          </Grid>
	        <Grid container>
							<Grid>
								<Box>
						      <ul style={{ listStyleType: 'none', padding: 5 }}>
						        <li style={{ marginBottom: '15px' }}>
						          <Stack spacing={2} direction="row" alignItems="center">
						            <LocationOnIcon />
						            <Typography>Komplek Stella No. 78x, Bandung</Typography>
						          </Stack>
						        </li>
						        <li style={{ marginBottom: '15px' }}>
						          <Stack spacing={2} direction="row" alignItems="center">
						            <MailIcon />
						            <Typography>helpdesk@explorewisata.id</Typography>
						          </Stack>
						        </li>
						        <li style={{ marginBottom: '15px' }}>
						          <Stack spacing={2} direction="row" alignItems="center">
						            <LanguageIcon />
						            <Typography>wisata.id</Typography>
						          </Stack>
						        </li>
						      </ul>
						    </Box>
			        </Grid>	
	        </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default AboutUs;