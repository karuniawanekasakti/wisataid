// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardComponent from "../../components/Card/CardComponent.jsx";
import DataCard from "../../utils/DataCard.jsx";
import './HomePage.css'
import SwipeableTemporaryDrawer from "../../components/DrawerFilter/DrawerFilter.jsx";
const HomePage = (props) => {
    return (
        <div className='home-page-container'>
            <div className='list'>
                <Box className='btnFilter' sx={{ display: 'flex', alignItems: 'center' }}>
                    <SwipeableTemporaryDrawer className='filter' kategori={props.kategori} />
                    <h1>Pencarian: Yogyakarta</h1>
                </Box>
                <Grid container spacing={2.5}>
                    {DataCard.map((data, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <CardComponent
                                title={data.title}
                                image={data.image}
                                description={data.description}
                                city={data.city}
                                avatar={data.logo}
                                rating={data.rating}
                                kategori={data.kategori}
                                id={data.id}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default HomePage;
