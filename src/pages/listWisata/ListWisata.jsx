import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardComponent from "../../components/Card/CardComponent.jsx";
import './ListWisata.css'
import ButtonComponent from "../../components/Button/ButtonComponent.jsx";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationNull from '../../components/NotificationNull/NotificationNull.jsx';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {useTheme} from '@mui/material/styles';

const HomePage = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [anchorEl, setAnchorEl] = useState({rating: null, kategori: null, kota: null});
    const BASE_URL = 'https://wisataid-api.my.id/wisata';
    const IMAGE_URL = `http://47.128.228.117:4000/images/`;
    const ratingOptions = [1, 2, 3, 4, 5];
    const kategoriOptions = Array.isArray(data) ? [...new Set(data.map(data => data.kategori))] : [];
    const kotaOptions = Array.isArray(data) ? [...new Set(data.map(data => data.kota))] : [];
    const [ratingButtonText, setRatingButtonText] = React.useState('Rating');
    const [kategoriButtonText, setKategoriButtonText] = React.useState('Kategori');
    const [cityButtonText, setCityButtonText] = React.useState('Kabupaten');

    const [ratingFilter, setRatingFilter] = useState(null);
    const [kategoriFilter, setKategoriFilter] = useState(null);
    const [cityFilter, setCityFilter] = useState(null);

    const {city: selectedCity} = useParams();
    const [cityData, setCityData] = useState([]);


    const [isLoading, setIsLoading] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        const getDataWista = async () => {
            setIsLoading(true);
            console.log('undraw')
            try {
                const response = await fetch(BASE_URL);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                setData(data.data);
                const cityData = data.data.filter(item => item.provinsi.toLowerCase() === selectedCity.toLowerCase());
                setCityData(cityData);
                setFilteredData(cityData);
                // setIsDataLoaded(true);
                console.log(data);
            } catch (error) {
                console.log(error);
            } finally {
                setTimeout(() => {
                setIsLoading(false);
                    console.log('undrawfingi');
                },2700);
            }
        };
        getDataWista();
    }, [selectedCity]);

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
        let newData = [...cityData];

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
    }, [ratingFilter, kategoriFilter, cityFilter, cityData]);

    const filterByRating = (rating) => {
        setRatingFilter(Number(rating));
        setRatingButtonText(`${rating} Star`);
    };

    const filters = [
        {name: 'Rating', action: filterByRating},
        {name: 'Kategori', action: filterByCategory},
        {name: 'City', action: filterByCity},
    ];

    // reset
    const resetFilters = async () => {
        setRatingFilter(null);
        setKategoriFilter(null);
        setCityFilter(null);
        setRatingButtonText('Rating');
        setKategoriButtonText('Kategori');
        setCityButtonText('Kabupaten');
        setFilteredData(cityData);

        try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            setData(data.data);
            const cityData = data.data.filter(item => item.provinsi.toLowerCase() === selectedCity.toLowerCase());
            setCityData(cityData);
            setFilteredData(cityData);
        } catch (error) {
            console.log(error);
        }
    };
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
                <h1 className='titleHome'>Pencarian: {selectedCity}</h1>
                <Box className='btnFilter' sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginBottom: '20px',
                    marginTop: '-45px',
                    minWidth: '100%'
                }}>
                    <ButtonComponent
                        // variant="outlined"
                        className='btnFilterr'
                        endIcon={<RestartAltIcon className='btnFilterrr' style={{fontSize: '2rem'}}/>}
                        // text="Reset"
                        // size='medium'
                        style={{
                            marginLeft: '-30px',
                            marginRight: '-10px',
                            backgroundColor: 'transparent'
                        }}
                        onClick={resetFilters}
                    />
                    {filters.map((filter, index) => (
                        <div key={index}>
                            <ButtonComponent
                                variant="outlined"
                                className='btnFilterr'
                                text={filter.name === 'Rating' ? ratingButtonText : (filter.name === 'Kategori' ? kategoriButtonText : cityButtonText)}
                                size='medium'
                                style={{
                                    marginLeft: 'auto',
                                    marginRight: '10px',
                                    color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#3F51B5'
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
                <Grid container spacing={2.5} key={isLoading ? 'loading' : 'loaded'}>
                    <TransitionGroup component={null}>
                        {isLoading ? (
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100vh',
                                width: '100%',
                            }}>
                                <ClimbingBoxLoader
                                    color={theme.palette.mode === 'light' ? '#006aec' : '#ffffff'}
                                    loading={isLoading}
                                    size={20}
                                />
                            </div>
                        ) : filteredData.length > 0 ? (
                            filteredData.map((data, index) => (
                                <CSSTransition key={index} timeout={80} classNames="item">
                                    <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <Box minWidth={300}>
                                            {renderCardComponent(data)}
                                        </Box>
                                    </Grid>
                                </CSSTransition>
                            ))
                        ) : !isLoading && filteredData.length === 0 ? (
                            <CSSTransition timeout={1500} classNames="item">
                                <Grid item xs={12}>
                                    <NotificationNull className='undrawNotif'/>
                                </Grid>
                            </CSSTransition>
                        ) : null}
                    </TransitionGroup>
                </Grid>
            </div>
        </div>
    )
}

export default HomePage;