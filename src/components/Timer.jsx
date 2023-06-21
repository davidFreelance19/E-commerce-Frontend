import { useState } from "react"
import { timeSince } from "../helpers/tiempoSice"
const Timer = ({ heroSection }) => {
    const [diasSection, setDias] = useState(0)
    const [horasSection, setHoras] = useState(0)
    const [minutosSection, setMinutos] = useState(0)
    const [segundosSection, setSegundos] = useState(0)

    setInterval(() => {
        const { minutes, hours, seconds, days } = timeSince('July 25, 2023')
        setDias(days)
        setHoras(hours)
        setMinutos(minutes)
        setSegundos(seconds)
    }, [1000]);
    return (
        <div className={`${heroSection ? '' : "justify-center"} flex items-center`}>
            <div className={`${heroSection ? 'w-[90px]' : 'mx-auto '} border-r-red-300 border-r-[1px] flex items-center justify-center  w-[110px]`}>
                <p className="text-center">Días:<span className="block font-bold text-2xl">{diasSection}</span></p>
            </div>
            <div className={`${heroSection ? 'w-[90px] shadow-2xl' : 'mx-auto '} border-r-red-300 border-r-[1px] flex items-center justify-center  w-[110px]`}>
                <p className="text-center">Horas:<span className="block font-bold text-2xl">{horasSection}</span></p>
            </div>
            <div className={`${heroSection ? 'w-[90px]' : 'mx-auto '} border-r-red-300 border-r-[1px] flex items-center justify-center  w-[110px]`}>
                <p className="text-center">Minutos:<span className="block font-bold text-2xl">{minutosSection}</span></p>
            </div>
            <div className={`${heroSection ? 'w-[90px]' : 'mx-auto '} border-r-red-300 border-r-[1px] flex items-center justify-center  w-[110px]`}>
                <p className="text-center">Segundos:<span className="block font-bold text-2xl">{segundosSection}</span></p>
            </div>
        </div>
    )
}

export default Timer
