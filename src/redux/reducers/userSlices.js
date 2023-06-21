import { createReducer } from "@reduxjs/toolkit";
import clienteAxios from "../../../config/clienteAxios";
const autenticarUsuario = async () => {
	const token = localStorage.getItem("token");
	// Configuracion para la autorización de bearer token
	const config = {
		headers: {
			"Content-Type": "aplication/json",
			Authorization: `Bearer ${token}`,
		},
	};
	// Hacemos la peticion ya con la configuración
	try {
		const { data } = await clienteAxios("/usuarios/perfil", config);
		return data;
	} catch (error) {
		console.log(error.message);
	}
};

const initialState = {
	isAuthenticated: false,
	loading: true,
};
export const userReducer = createReducer(initialState, {
	LoadUserRequest: (state) => {
		state.loading = true;
	},
	LoadUserSuccess: (state, action) => {
		state.isAuthenticated = true;
		state.loading = false;
		state.user = action.payload;
	},
	LoadUserFail: (state, action) => {
		state.loading = false;
		state.error = action.payload;
		state.isAuthenticated = false;
	},
});
