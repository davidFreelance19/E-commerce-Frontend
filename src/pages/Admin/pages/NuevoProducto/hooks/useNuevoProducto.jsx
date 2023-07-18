import { useContext } from "react";
import NuevoProductoContext from "../context/NuevoProductoProvider";
const useNuevoProducto = () => {
    return useContext(NuevoProductoContext);
};
export default useNuevoProducto;