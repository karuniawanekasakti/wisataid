import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Footer from '../../components/Footer/Footer.jsx';

import FormComponent from '../../components/Form2/FormComponent2';

import './AddWisata.css';

const Addwisata = () => {
  return (

    <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '80px',
          minHeight: '100vh',
        }}
        maxWidth={'xl'}
        disableGutters={true}
        // style={{backgroundColor: theme.palette.background.default}}
        >
          <Grid Container spacing={2}>
            <Grid item textAlign={'center'} marginBottom={'40px'}>
              <h1>Tambah Wisata</h1>
              <Typography variant="body1">
                Tambahkan informasi wisata baru agar orang lain bisa mengetahuinya.
              </Typography>
            </Grid>
            <Grid item marginBottom={'100px'}>
              <FormComponent/>
            </Grid>
            <Grid className='footer' marginTop={'30px'} marginRight={'0'} marginLeft={'0'}>
              <Footer/>       
            </Grid>       
          </Grid>
        </Container>
  )
}

export default Addwisata;