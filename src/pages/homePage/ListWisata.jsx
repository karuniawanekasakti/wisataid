import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardComponent from "../../components/Card/CardComponent.jsx";
import './ListWisata.css'
import ButtonComponent from "../../components/Button/ButtonComponent.jsx";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationNull from '../../components/NotificationNull/NotificationNull.jsx';
import {useEffect, useState} from "react";

const ListWisata = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [anchorEl, setAnchorEl] = useState({rating: null, kategori: null, kota: null});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/wisata');
                if (!response.ok) {
                    const errorMessage = await response.text(); // Ambil pesan kesalahan dari respons server
                    throw new Error(`Server Error: ${errorMessage}`);
                }
                const jsonData = await response.json();
                console.log('API response:', jsonData); // Cetak respons API ke konsol
                setData(jsonData);
                setFilteredData(jsonData);
            } catch (error) {
                console.error(error.message); // Cetak pesan kesalahan ke konsol
            }
        };

        fetchData();
    }, []);

    const ratingOptions = [1, 2, 3, 4, 5];
    const kategoriOptions = Array.isArray(data) ? [...new Set(data.map(data => data.kategori))] : [];
    const kotaOptions = Array.isArray(data) ? [...new Set(data.map(data => data.kota))] : [];

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
        const newData = data.filter(data => data.kategori.toLowerCase() === category.toLowerCase());
        setFilteredData(newData);
    };

    const filterByKota = (kota) => {
        const newData = data.filter(data => data.kota.toLowerCase() === kota.toLowerCase());
        setFilteredData(newData);
    };

    const filterByRating = (rating) => {
        const ratingNumber = Number(rating);
        const newData = data.filter(data => data.rating === ratingNumber);
        setFilteredData(newData);
    };

    const filters = [
        {name: 'Rating', action: filterByRating},
        {name: 'Kategori', action: filterByCategory},
        {name: 'City', action: filterByKota},
    ];

    const renderCardComponent = (data) => {
        try {
            // Cetak data ke konsol untuk debugging
            console.log(data);

            return (
                <CardComponent
                    className='cardHome'
                    nama_wisata={data.nama_wisata}
                    foto_wisata={data.url_foto}
                    deskripsi={data.deskripsi}
                    kota={data.kota}
                    logo_daerah={data.url_logo}
                    rating={data.rating}
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
                                className='btnFilterr'
                                text={filter.name}
                                size='medium'
                                style={{
                                    color: 'white',
                                    backgroundColor: '#2979ff',
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
                    {/* Hapus baris ini: <h1>${filteredData}</h1> */}
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

export default ListWisata;