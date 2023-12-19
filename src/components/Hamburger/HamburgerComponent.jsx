import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import navLinks from "../../utils/NavLinks.jsx";
import Button from "@mui/material/Button";
import ButtonComponent from "../Button/ButtonComponent.jsx";

// const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function HamburgerComponent(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleLogout = () => {
        localStorage.removeItem('token');
        props.onLogout();
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                size='large'
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                sx={{
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '100%',
                        height:'40vh',
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="top"
                open={open}
            >
                <DrawerHeader >
                    <IconButton style={{ right:'90%'}} onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List sx={{flexGrow: 1, display: 'flex', flexDirection:'column',textAlign:'center', marginTop: '20px'}}>
                    {navLinks.map((link) => {
                        if (link.name === 'Add Wisata' && !props.isLoggedIn) {
                            return null;
                        }

                        return (
                            <Button
                                key={link.name}
                                href={link.path}
                                sx={{my: 1, color: 'white', display: 'block'}}
                                style={{color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#3F51B5',fontWeight:'bold'}}
                            >
                                {link.name}
                            </Button>
                        );
                    })}
                    <ButtonComponent
                        variant="default"
                        text={props.isLoggedIn ? 'Logout' : 'Login' }
                        size='medium'
                        style={{
                            color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#3F51B5',
                        }}
                        onClick={props.isLoggedIn ? handleLogout : null}
                        to={!props.isLoggedIn ? '/login' : '/'}
                    />
                </List>
                <Divider />
            </Drawer>
        </Box>
    );
}