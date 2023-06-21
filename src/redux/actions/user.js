import { useDispatch } from "react-redux";
import { useEffect } from "react";
import clienteAxios from "../../../config/clienteAxios";

export const loadUser = () => async (dispatch) => {
	const token = localStorage.getItem("token");
	try {
		dispatch({
			type: "LoadUserRequest",
		});
		const config = {
			headers: {
				"Content-Type": "aplication/json",
				Authorization: `Bearer ${token}`,
			},
		};
		const { data } = await clienteAxios("/usuarios/perfil", config);
		dispatch({
			type: "LoadUserSuccess",
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: "LoadUserFail",
			payload: error.response.data.message,
		});
	}
};
