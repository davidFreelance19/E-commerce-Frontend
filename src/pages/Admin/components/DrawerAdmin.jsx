import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi'
import Box from '@mui/material/Box';
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
import { Drawer, DrawerHeader, categoriasSection, AppBar } from '../../../static/data';


const DrawerAdmin = ({ children }) => {
    const { user, } = useSelector(state => state.user)
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const location = useLocation()
    
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

                <List className='h-[78vh] flex flex-col'>
                    {categoriasSection.map(enlace => (
                        <Link to={`/e-shop/dashboard/${user._id}/${enlace.link}`} key={enlace.id} className={`${location.pathname.includes(`${enlace.link}`) ? 'bg-gray-200' : ''}`}>
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
            <Box component="main" sx={{ flexGrow: 1, p: 3 }} className='p-0'>
                <DrawerHeader className='border-b-[1px]'>
                    <div className='flex justify-between w-[90%] max-w-[1240px] mx-auto my-0 items-center'>
                        <p className='font-semibold'>Bienvenido, {user.nombre}</p>
                        <Link to='/e-shop/home' className="font-semibold text-lg">Exclusive</Link>
                    </div>
                </DrawerHeader>

                {children}
            </Box>
        </Box>
    )
}

export default DrawerAdmin
