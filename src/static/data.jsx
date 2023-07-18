import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { AiOutlineShopping, AiOutlineMessage } from "react-icons/ai";
import { MdOutlineCancel, MdOutlineAddCircleOutline, MdOutlineVideogameAsset, MdOutlineSmartToy, MdOutlineWysiwyg } from "react-icons/md";
import { BiCalendarPlus, BiFridge } from 'react-icons/bi'
import { BsCalendar3, BsShop, BsHeartPulse, BsWindowPlus, } from 'react-icons/bs'
import { RiHeartAddLine } from 'react-icons/ri'
import { ImDisplay } from 'react-icons/im'
import { FiSmartphone } from 'react-icons/fi'
import { LuLampCeiling, LuDog, LuLayoutDashboard } from 'react-icons/lu'

export const categoriasProductos = [
	{ name: "Woman’s Fashion" },
	{ name: "Men’s Fashion" },
	{ name: 'Electrónicos' },
	{ name: 'Computadoras y Tablets' },
	{ name: 'Celulares' },
	{ name: 'Mascotas y accesorios' },
	{ name: 'Hogar, Cocina y Jardín' },
	{ name: 'Videojuegos' },
	{ name: 'Salud y Belleza' },
	{ name: 'Juegos y juguetes' }
];
export const categoriasProductosMain = [
	{
		name: "Woman’s Fashion",
		icon:
			<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#000000" viewBox="0 0 256 256"><path d="M214.7,209.7a1.89,1.89,0,0,0-.11-.25l-45.48-96.86,20.5-32.18a1.74,1.74,0,0,0,.11-.18,16,16,0,0,0,0-16.46c-.09-.16-.2-.32-.3-.47L168,32.7V8a8,8,0,0,0-16,0V32.42L146.74,39a24,24,0,0,1-37.48,0L104,32.42V8A8,8,0,0,0,88,8V32.7L66.58,63.3c-.1.15-.21.31-.3.47a16,16,0,0,0,0,16.46,1.74,1.74,0,0,0,.11.18l20.5,32.18L41.41,209.45a1.89,1.89,0,0,0-.11.25A16,16,0,0,0,56,232H200a16,16,0,0,0,14.71-22.3ZM80,72,96.43,48.57l.33.42a40,40,0,0,0,62.48,0l.33-.42L176,72l-20.38,32H100.39ZM56,216l45.07-96h53.84L200,216Z"></path></svg>
	},
	{
		name: "Men’s Fashion",
		icon:
			<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#000000" viewBox="0 0 256 256"><path d="M223.88,214l-22-176A16,16,0,0,0,186,24H70A16,16,0,0,0,54.12,38l-22,176A16,16,0,0,0,48,232H88.69a16,16,0,0,0,15.51-12.06l23.8-92,23.79,91.94A16,16,0,0,0,167.31,232H208a16,16,0,0,0,15.88-18ZM192.9,95.2A32.13,32.13,0,0,1,169,72h21ZM186,40l2,16H68l2-16ZM66,72H87A32.13,32.13,0,0,1,63.1,95.2ZM88.69,216H48L61,111.73A48.08,48.08,0,0,0,103.32,72H120V95Zm78.6-.06L136,95V72h16.68A48.08,48.08,0,0,0,195,111.73L208,216Z"></path></svg>
	},
	{ name: 'Electrónicos', icon: <LuLampCeiling size={45} /> },
	{ name: 'Computadoras y Tablets', icon: <ImDisplay size={45} /> },
	{ name: 'Celulares', icon: <FiSmartphone size={45} /> },
	{ name: 'Mascotas y accesorios', icon: <LuDog size={45} /> },
	{ name: 'Hogar, Cocina y Jardín', icon: <BiFridge size={45} /> },
	{ name: 'Videojuegos', icon: <MdOutlineVideogameAsset size={45} /> },
	{ name: 'Salud y Belleza', icon: <BsHeartPulse size={45} /> },
	{ name: 'Juegos y juguetes', icon: <MdOutlineSmartToy size={45} /> }
];
export const categoriasSection = [
	{
		id: 0,
		name: 'Mi dashboard',
		icon: <LuLayoutDashboard size={25}/>,
		link: 'home'
	}, 
	{
		id: 1,
		name: "Nuevo Producto",
		link: "product/nuevo-producto",
		icon: <MdOutlineAddCircleOutline size={25} />
	},
	{
		id: 2,
		name: "Mis Productos",
		link: "product/mis-productos",
		icon: <BsShop size={25} />
	},
	{
		id: 4,
		name: "Nueva Publicidad",
		link: "publicidad/nuevo-publicidad",
		icon: <BsWindowPlus size={25} />,
	},
	{
		id: 5,
		name: "Publicidad",
		link: "publicidad/mi-publicidad",
		icon: <MdOutlineWysiwyg size={25} />,
	},
	{
		id: 6,
		name: "Nuevo evento",
		link: "eventos/nuevo-evento",
		icon: <BiCalendarPlus size={25} />,
	},
	{
		id: 7,
		name: "Eventos",
		link: "eventos/mis-eventos",
		icon: <BsCalendar3 size={25} />,
	},
	{
		id: 3,
		name: "Mis mensajes",
		link: "mensajes",
		icon: <AiOutlineMessage size={25} />
	},
	{
		id: 8,
		name: "Mis ordenes",
		link: "ordenes",
		icon: <AiOutlineShopping size={25} />,
	},
	{
		id: 9,
		name: "Cancelaciones",
		link: "cancelaciones",
		icon: <MdOutlineCancel size={25} />,
	},
	{
		id: 10,
		name: "Lista de Deseos",
		link: "whish-list",
		icon: <RiHeartAddLine size={25} />
	},
];

const drawerWidth = 210;
export const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

export const closedMixin = (theme) => ({
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

export const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));


export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
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

export const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));