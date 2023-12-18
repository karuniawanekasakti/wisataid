// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter, GitHub} from "@mui/icons-material";
import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
export default function Footer(props) {

  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? '#1f2b3e' : '#3F51B5',
        color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#FFFFFF',
        paddingBottom: '20px'
      }}
      className={props.className}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6"  gutterBottom>
              Programming Tools:
            </Typography>
            <Typography variant="body1"  gutterBottom>
              Javascript
            </Typography>
            <Typography variant="body1"  gutterBottom>
              ReactJS
            </Typography>
            <Typography variant="body1"  gutterBottom>
              Express JS
            </Typography>
            <Typography variant="body1"  gutterBottom>
              Mysql
            </Typography>
            <Typography variant="body1"  gutterBottom>
              NodeJS
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6"  gutterBottom>
              Powered by:
            </Typography>
            <Typography variant="body1">
              Dicoding Academy (PT Precentologics)
            </Typography>
            <Typography variant="body1">
              Kampus Merdeka
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6"  gutterBottom>
              Follow Us
            </Typography>
            <Link
              href="https://github.com/karuniawanekasakti/wisataid" 
              color="inherit">
              <Facebook />
            </Link>
              <Link 
              href="https://github.com/karuniawanekasakti/wisataid"
              color="inherit"
              sx={{ pl: 1 }}
              >
              <GitHub />
            </Link>
            <Link
              href="https://github.com/karuniawanekasakti/wisataid"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link 
              href="https://github.com/karuniawanekasakti/wisataid"
              color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
