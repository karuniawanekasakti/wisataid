// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardComponent from "../../components/Card/CardComponent.jsx";
// import DataCard from "../../utils/DataCard.jsx";
import './ListWisata.css'
import ButtonComponent from "../../components/Button/ButtonComponent.jsx";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationNull from '../../components/NotificationNull/NotificationNull.jsx';
import {useState, useEffect} from "react";

const HomePage = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [anchorEl, setAnchorEl] = useState({rating: null, kategori: null, kota: null});
    const BASE_URL = 'http://47.128.228.117:4000/wisata';
    const IMAGE_URL =  `http://47.128.228.117:4000/images/`;
    const ratingOptions = [1, 2, 3, 4, 5];
    const kategoriOptions = Array.isArray(data) ? [...new Set(data.map(data => data.kategori))] : [];
    const kotaOptions = Array.isArray(data) ? [...new Set(data.map(data => data.kota))] : [];
    const [ratingButtonText, setRatingButtonText] = React.useState('Rating');
    const [kategoriButtonText, setKategoriButtonText] = React.useState('Kategori');
    const [cityButtonText, setCityButtonText] = React.useState('Kabupaten');

    const [ratingFilter, setRatingFilter] = useState(null);
    const [kategoriFilter, setKategoriFilter] = useState(null);
    const [cityFilter, setCityFilter] = useState(null);

    useEffect(() => {
        const getDataWista = async () => {
            try {
                const response = await fetch(BASE_URL);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
            const data = await response.json();
            setData(data.data);
            setFilteredData(data.data);
            console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        getDataWista();
    }, []);

    const getOptions = (filterName) => {
        switch (filterName) {
            case 'Rating':
                return ratingOptions;
            case 'Kategori':
                return kategoriOptions;
            case 'City':
                return kotaOptions;
            default:
                return [];
        }
    };

    const handleOpen = (filterName, event) => {
        setAnchorEl(prevState => ({...prevState, [filterName]: event.currentTarget}));
    };

    const handleClose = (filterName) => {
        setAnchorEl(prevState => ({...prevState, [filterName]: null}));
    };
    const filterByCategory = (category) => {
        setKategoriFilter(category);
        setKategoriButtonText(category);
    };

    const filterByCity = (city) => {
        setCityFilter(city);
        setCityButtonText(city);
    };

    useEffect(() => {
        let newData = [...data];

        if (ratingFilter !== null) {
            newData = newData.filter(data => Math.floor(data.rating) === ratingFilter);
        }

        if (kategoriFilter !== null) {
            newData = newData.filter(data => data.kategori.toLowerCase() === kategoriFilter.toLowerCase());
        }

        if (cityFilter !== null) {
            newData = newData.filter(data => data.kota.toLowerCase() === cityFilter.toLowerCase());
        }

        setFilteredData(newData);
    }, [ratingFilter, kategoriFilter, cityFilter, data]);

    const filterByRating = (rating) => {
        setRatingFilter(Number(rating));
        setRatingButtonText(`${rating} Star`);
    };

    const filters = [
        {name: 'Rating', action: filterByRating},
        {name: 'Kategori', action: filterByCategory},
        {name: 'City', action: filterByCity},
    ];

    const renderCardComponent = (data) => {
        try {
            console.log(data);

            const imageUrl = `${IMAGE_URL}${data.foto_wisata}`;
            const avatarUrl = `${IMAGE_URL}${data.logo_daerah}`;

            return (
                <CardComponent
                    className='cardHome'
                    nama_wisata={data.nama_wisata}
                    image={imageUrl} // use imageUrl
                    deskripsi={data.deskripsi}
                    kota={data.kota}
                    avatar={avatarUrl} // use avatarUrl
                    rating={parseFloat(data.rating)}
                    kategori={data.kategori}
                    id={data.id ? data.id.toString() : ''}
                />
            );
        } catch (error) {
            console.log(error);
            return null;
        }
    };
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
                                    {renderCardComponent(data)}
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