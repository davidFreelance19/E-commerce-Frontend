import { AiOutlineShopping, AiOutlineMessage } from "react-icons/ai";
import { MdOutlineCancel, MdOutlineAddCircleOutline } from "react-icons/md";
import { BiCalendarPlus } from 'react-icons/bi'
import { BsCalendar3, BsShop } from 'react-icons/bs'
import { RiHeartAddLine } from 'react-icons/ri'
export const categoriasSection = [
	{
		id: 1,
		name: "Nuevo Producto",
		link: "nuevo-producto",
		icon: <MdOutlineAddCircleOutline size={25} />
	},
	{
		id: 2,
		name: "Mis Productos",
		link: "mis-productos",
		icon: <BsShop size={25} />
	},
	{
		id: 3,
		name: "Mis mensajes",
		link: "mensajes",
		icon: <AiOutlineMessage size={25} />
	},
	{
		id: 4,
		name: "Nuevo Evento",
		link: "nuevo-evento",
		icon: <BiCalendarPlus size={25} />,
	},
	{
		id: 5,
		name: "Eventos",
		link: "eventos",
		icon: <BsCalendar3 size={25} />,
	},
	{
		id: 6,
		name: "Mis ordenes",
		link: "ordenes",
		icon: <AiOutlineShopping size={25} />,
	},
	{
		id: 7,
		name: "Cancelaciones",
		link: "cancelaciones",
		icon: <MdOutlineCancel size={25} />,
	},
	{
		id: 8,
		name: "Lista de Deseos",
		link: "whish-list",
		icon: <RiHeartAddLine size={25} />
	},
];
