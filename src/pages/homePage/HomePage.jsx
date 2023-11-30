// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Grid from '@mui/material/Grid';
import CardComponent from "../../components/Card/CardComponent.jsx";
import DataCard from "../../utils/DataCard.jsx";
import './HomePage.css'
import SelectPopuler from '../../components/Category/SelectPopuler.jsx';
// import SelectTags from "../../components/Tags/SelectTags.jsx";
const HomePage = () => {
    return (
        <div className='home-page-container'>
            <aside className='filter-sidebar'>
                <div className="filter-section">
                    <h2>Filter</h2>
                    {/* Checkbox lainnya */}
                </div>
                <div className="filter-section">
                    <SelectPopuler/>
                </div>
                {/* Opsi filter lainnya */}
            </aside>
        <div className='list'>
            <h1>Hasil pencarian wisata di : Yogyakarta</h1>
            <Grid container spacing={0} >
                {DataCard.map((data, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
                        <CardComponent
                            title={data.title}
                            image={data.image}
                            description={data.description}
                            city={data.city}
                            avatar={data.logo}
                            rating={data.rating}
                            kategori={data.kategori}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
        </div>
    )
}

export default HomePage;
