// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Grid from '@mui/material/Grid';
import CardComponent from "../../components/Card/CardComponent.jsx";
import DataCard from "../../utils/DataCard.jsx";
import './HomePage.css'
// import SelectPopuler from '../../components/Category/SelectPopuler.jsx';
import SwipeableTemporaryDrawer from "../../components/DrawerFilter/DrawerFilter.jsx";
// import SelectTags from "../../components/Tags/SelectTags.jsx";
const HomePage = (props) => {
    // const [selectedCategory, setSelectedCategory] = React.useState('');
    // const handleCategoryChange = (kategori) => {
    //     setSelectedCategory(kategori);
    // };
    // const filteredData = selectedCategory
    //     ? DataCard.filter((data) => data.kategori === selectedCategory)
    //     : [...DataCard];

    return (
        <div className='home-page-container'>
            {/*<aside className='filter-sidebar'>*/}
            {/*    <div className="filter-section">*/}
            {/*        <h2>Filter</h2>*/}
            {/*        /!* Checkbox lainnya *!/*/}
            {/*    </div>*/}
            {/*    <div className="filter-section">*/}
            {/*        <SelectPopuler onCategoryChange={handleCategoryChange}*/}
            {/*        />*/}
            {/*        <SwipeableTemporaryDrawer />*/}
            {/*    </div>*/}
            {/*    /!* Opsi filter lainnya *!/*/}
            {/*</aside>*/}
            <div className='list'>
                <SwipeableTemporaryDrawer className='filter' kategori={props.kategori} />
                <h1>Pencarian: Yogyakarta</h1>
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
                                // to={{
                                //     pathname: `/detail/${data.id}`,
                                //     state: data,
                                // }}
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
