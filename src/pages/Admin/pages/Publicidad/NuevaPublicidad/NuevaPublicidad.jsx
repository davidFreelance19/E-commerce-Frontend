import { useEffect } from "react"
import usePublicidad from "../hooks/usePublicidad"
import HeadingAdmin from "../../../components/HeadingAdmin"
import NuevaPublicidadForms from "../components/NuevaPublicidadForms"
const NuevaPublicidad = () => {

  const { setName, setDescripcion, setColorHEX, setImgHero, setImgLogo } = usePublicidad()
  useEffect(()=>{
    setName('')
    setColorHEX('000')
    setDescripcion('')
    setImgHero([])
    setImgLogo([])
  }, [])
  return (
    <div>
      <HeadingAdmin heading='Genera una nueva publicidad y comienza a recbir más dinero' />
      <NuevaPublicidadForms />
    </div>
  )
}

export default NuevaPublicidad
