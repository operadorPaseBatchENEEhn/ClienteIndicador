"use client"
import { TypeAnimation } from 'react-type-animation';
const Typed = () => {
  return (
    <span className='text-secondary font-bold text-xl text-center'>
    <TypeAnimation 
    sequence={[
        "(YYMMDD)",
        3000,
        "Año",
        3000,
        "Mes",
        3000,
        "Dia",
        3000
    ]}
    wrapper='span'
    speed={50}
    repeat={Infinity}
    />
    </span>
  )
}

export default Typed; 