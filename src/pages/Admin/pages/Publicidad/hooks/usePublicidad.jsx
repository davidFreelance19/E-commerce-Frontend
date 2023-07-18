import { useContext } from "react";
import PublicidadContext from "../context/PublicidadProvider";

const usePublicidad = () => {
    return (
        useContext(PublicidadContext)
    )
}

export default usePublicidad
