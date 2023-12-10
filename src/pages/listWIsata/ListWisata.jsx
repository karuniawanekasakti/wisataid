// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardComponent from "../../components/Card/CardComponent.jsx";
import DataCard from "../../utils/DataCard.jsx";
import './ListWisata.css'
import ButtonComponent from "../../components/Button/ButtonComponent.jsx";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationNull from '../../components/NotificationNull/NotificationNull.jsx';

const HomePage = () => {
    const [filteredData, setFilteredData] = React.useState(DataCard);
    // eslint-disable-next-line no-unused-vars
    const [filterValue, setFilterValue] = React.useState('');
    const [anchorEl, setAnchorEl] = React.useState({Rating: null, Kategori: null, City: null});
    const [ratingButtonText, setRatingButtonText] = React.useState('Rating');
    const [kategoriButtonText, setKategoriButtonText] = React.useState('Kategori');
    const [cityButtonText, setCityButtonText] = React.useState('City');

    const ratingOptions = [1, 2, 3, 4, 5];
    const kategoriOptions = [...new Set(DataCard.map(data => data.kategori))];
    const cityOptions = [...new Set(DataCard.map(data => data.city))];

    const getOptions = (filterName) => {
        switch (filterName) {
            case 'Rating':
                return ratingOptions;
            case 'Kategori':
                return kategoriOptions;
            case 'City':
                return cityOptions;
            default:
                return [];
        }
    };

    const handleOpen = (filterName, event) => {
        setFilterValue('');
        setAnchorEl(prevState => ({...prevState, [filterName]: event.currentTarget}));
    };

    const handleClose = (filterName) => {
        setAnchorEl(prevState => ({...prevState, [filterName]: null}));
    };
    const filterByCategory = (category) => {
        const newData = DataCard.filter(data => data.kategori.toLowerCase() === category.toLowerCase());
        setFilteredData(newData);
        setKategoriButtonText(category);
    };

    const filterByCity = (city) => {
        const newData = DataCard.filter(data => data.city.toLowerCase() === city.toLowerCase());
        setFilteredData(newData);
        setCityButtonText(city);
    };

    const filterByRating = (rating) => {
        const ratingNumber = Number(rating);
        const newData = DataCard.filter(data => data.rating === ratingNumber);
        setFilteredData(newData);
        setRatingButtonText(`${rating} Star`);
    };

    const filters = [
        {name: 'Rating', action: filterByRating},
        {name: 'Kategori', action: filterByCategory},
        {name: 'City', action: filterByCity},
    ];
    return (
        <div className='home-page-container'>
            <div className='list'>
                <h1 className='titleHome'>Pencarian: Yogyakarta</h1>
                <Box className='btnFilter' sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginBottom: '20px',
                    marginTop: '-45px',
                    minWidth: '100%'
                }}>
                    {filters.map((filter, index) => (
                        <div key={index}>
                            <ButtonComponent
                                variant="outlined" 
                                className='btnFilterr'
                                text={filter.name === 'Rating' ? ratingButtonText : (filter.name === 'Kategori' ? kategoriButtonText : cityButtonText)}
                                size='medium'
                                style={{
                                    marginLeft: 'auto',
                                    marginRight: '10px'
                                }}
                                onClick={(event) => handleOpen(filter.name, event)}
                            />
                            <Menu
                                id={`simple-menu-${index}`}
                                anchorEl={anchorEl[filter.name]}
                                keepMounted
                                open={Boolean(anchorEl[filter.name])}
                                onClose={() => handleClose(filter.name)}
                            >
                                {getOptions(filter.name).map((option, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={() => {
                                            handleClose(filter.name);
                                            filter.action(option);
                                        }}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    ))}
                </Box>
                <Grid container spacing={2.5}>
                    {filteredData.length > 0 ? (
                        filteredData.map((data, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                <Box minWidth={300}>
                                    <CardComponent
                                        className='cardHome'
                                        title={data.title}
                                        image={data.image}
                                        description={data.description}
                                        city={data.city}
                                        avatar={data.logo}
                                        rating={data.rating}
                                        kategori={data.kategori}
                                        id={data.id}
                                    />
                                </Box>
                            </Grid>
                        ))
                    ) : (
                        <Grid item xs={12}>
                            <NotificationNull className='undrawNotif'/>
                        </Grid>
                    )}
                </Grid>
            </div>
        </div>
    )
}

export default HomePage;