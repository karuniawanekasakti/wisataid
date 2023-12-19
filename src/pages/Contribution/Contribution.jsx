  /* eslint-disable no-unused-vars */
  // eslint-disable-next-line no-unused-vars
  import { useState } from "react";
  import Stack from '@mui/material/Stack';
  import FormComponent from '../../components/Form/FormComponent';
  import Typography from "@mui/material/Typography";
  import Container from '@mui/material/Container';
  import Grid from "@mui/material/Grid";
  import Footer from '../../components/Footer/Footer.jsx';
  // import './Contribution.css'

  const Contribution = () => {

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
            <Grid item xs={12} sm={6} textAlign={'center'} marginBottom={'40px'}>
              <h1>Contribution</h1>
              <Typography variant="body1">
                Kirimkan informasi destinasi wisata baru kepada kami agar orang lain bisa mengetahuinya.
              </Typography>
            </Grid>
            <Grid item marginBottom={'100px'}>
              <FormComponent style={{width:'100%'}}/>
            </Grid>
            <Grid className='footer' marginTop={'30px'} marginRight={'0'} marginLeft={'0'}>
              <Footer/>       
            </Grid>       
          </Grid>
        </Container>
      )
  }

  export default Contribution;
