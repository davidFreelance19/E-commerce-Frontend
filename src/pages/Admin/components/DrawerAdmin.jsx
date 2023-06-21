import * as React from 'react';

import { styled, useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { BiLogOut } from 'react-icons/bi'
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { categoriasSection } from '../../../static/data';
import { Link } from 'react-router-dom';
const drawerWidth = 210;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const DrawerAdmin = () => {
    const { user, } = useSelector(state => state.user)
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    {
                        !open ? (

                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        ) : (

                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        )

                    }
                </DrawerHeader>

                <Divider />

                <List className='h-[78vh] flex flex-col gap-2'>
                    {categoriasSection.map(enlace => (
                        <Link to={`/e-shop/dashboard/${user._id}/${enlace.link}`} key={enlace.id}>
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 2 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {enlace.icon}
                                    </ListItemIcon>
                                    {
                                        open && (
                                            <ListItemText primary={enlace.name} sx={{ opacity: open ? 1 : 0 }} />

                                        )
                                    }
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                <div className='h-[10vh] flex items-center justify-center gap-4 hover:cursor-pointer'>
                    <img
                        src={`${import.meta.env.VITE_BACKEND_URL}/${user?.avatar}`} className="rounded-full w-[40px] h-[40px] hover:cursor-pointer"
                    />
                    {open &&
                        <p>Ir a perfil</p>}
                </div>
                <Divider />
                <div className='h-[8vh] flex items-center justify-center gap-4 hover:cursor-pointer'>
                    <BiLogOut size={25} />
                    {open &&
                        <p>Cerrar sesion</p>}
                </div>
            </Drawer>
        </Box>
    )
}

export default DrawerAdmin
