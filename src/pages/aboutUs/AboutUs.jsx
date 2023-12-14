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
				      <Grid xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop:'20px', marginBottom:'20px' }}>
				        <Avatar src="/src/assets/img/personalProfile/eka.jpeg" sx={{ height: '270px', width: '270px', marginBottom: '20px' }} />
				        <Typography variant="h6" gutterBottom fontWeight="bold">
				          Karuniawan Ekasakti
				        </Typography>
				        <Typography variant="body1" gutterBottom>
				          Front-End Developer
				        </Typography>
				        <Typography variant="caption" gutterBottom>
				          Universitas Gadjah Mada
				        </Typography>
				      </Grid>
				      <Grid xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop:'20px', marginBottom:'20px' }}>
				        <Avatar src="/src/assets/img/personalProfile/farhan.jpeg" sx={{ height: '270px', width: '270px', marginBottom: '20px' }} />
				        <Typography variant="h6" gutterBottom fontWeight="bold">
				          Farhan Maulana Pangestu
				        </Typography>
				        <Typography variant="body1" gutterBottom>
				          Front-End Developer
				        </Typography>
				        <Typography variant="caption" gutterBottom>
				          Universitas Alma Ata
				        </Typography>
				      </Grid>
				      <Grid xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop:'20px', marginBottom:'20px' }}>
				        <Avatar src="/src/assets/img/personalProfile/ridwan.jpeg" sx={{ height: '270px', width: '270px', marginBottom: '20px' }} />
				        <Typography variant="h6" gutterBottom fontWeight="bold">
				          Ridwan Maulana
				        </Typography>
				        <Typography variant="body1" gutterBottom>
				          Front-End Developer
				        </Typography>
				        <Typography variant="caption" gutterBottom>
				          Universitas Alma Ata
				        </Typography>
				      </Grid>
				      <Grid xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop:'20px', marginBottom:'20px' }}>
				        <Avatar src="/src/assets/img/personalProfile/yahya.jpeg" sx={{ height: '270px', width: '270px', marginBottom: '20px' }} />
				        <Typography variant="h6" gutterBottom fontWeight="bold">
				          Yahya Khaliman Indrayana
				        </Typography>
				        <Typography variant="body1" gutterBottom>
				          Back-End Developer
				        </Typography>
				        <Typography variant="caption" gutterBottom>
				          Universitas Amikom Surakarta
				        </Typography>
				      </Grid>
				      <Grid xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop:'20px', marginBottom:'20px' }}>
				        <Avatar src="/src/assets/img/personalProfile/hana.jpeg" sx={{ height: '270px', width: '270px', marginBottom: '20px' }} />
				        <Typography variant="h6" gutterBottom fontWeight="bold">
				          Hana Amanda
				        </Typography>
				        <Typography variant="body1" gutterBottom>
				          UI UX Designer
				        </Typography>
				        <Typography variant="caption" gutterBottom>
				          Universitas Teknologi Digital Indonesia
				        </Typography>
				      </Grid>
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