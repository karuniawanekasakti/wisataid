/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import * as React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {styled, alpha} from '@mui/material/styles';
// import SearchIcon from '@mui/icons-material/Search';
import navLinks from "../../utils/NavLinks";
import './Header.css';
import Logo from '../../assets/img/WISATA_ID__5_-removebg-preview.png';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ButtonComponent from "../Button/ButtonComponent.jsx";

import {useTheme} from '@mui/material/styles';
import HamburgerComponent from "../Hamburger/HamburgerComponent.jsx";
import SearchComponent from "../SearchBar/SearchComponent.jsx";
import {Link} from "react-router-dom";

const Header = (props) => {
    const theme = useTheme();

    const handleLogout = () => {
        localStorage.removeItem('token');
        props.onLogout();
    }
    const Search = styled('div')(({theme}) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({theme}) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    return (
        <AppBar position="static" color="primary" className='appBar'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <div className="logo">
                            <img src={Logo} title='WisataId'/>
                        </div>
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <HamburgerComponent/>
                        <Link
                            to="/"
                            style={{cursor:'pointer'}}
                        >
                            <div className="logoHp">
                                <img src={Logo} title='WisataId'/>
                            </div>
                        </Link>
                    </Box>
                    {/*<Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>*/}
                    {/*    {navLinks.map((link) => (*/}
                    {/*        <Button*/}
                    {/*            key={link.name}*/}
                    {/*            href={link.path}*/}
                    {/*            sx={{my: 1, color: 'white', display: 'block'}}*/}
                    {/*        >*/}
                    {/*            {link.name}*/}
                    {/*        </Button>*/}
                    {/*    ))}*/}
                    {/*</Box>*/}
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {navLinks.map((link) => {
                            if (link.name === 'Add Wisata' && !props.isLoggedIn) {
                                return null;
                            }

                            return (
                                <Button
                                    key={link.name}
                                    href={link.path}
                                    sx={{my: 1, color: 'white', display: 'block'}}
                                >
                                    {link.name}
                                </Button>
                            );
                        })}
                    </Box>
                    <IconButton sx={{ml: 1}} onClick={props.toogleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                    </IconButton>
                    <Box>
                        <Search style={{backgroundColor: 'transparent', width: '100%'}}>
                            <SearchIconWrapper>
                                {/*<SearchIcon/>*/}
                            </SearchIconWrapper>
                            <SearchComponent className='searchInput'/>
                        </Search>
                    </Box>
                    <ButtonComponent
                        variant="outlined"
                        text={props.isLoggedIn ? 'Logout' : 'Login' }
                        size='medium'
                        className='logButton hide-on-mobile'
                        style={{
                            marginLeft: 'auto',
                            marginRight: '10px',
                            color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#FFFFFF'
                        }}
                        onClick={props.isLoggedIn ? handleLogout : null}
                        to={!props.isLoggedIn ? '/login' : '/'}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;