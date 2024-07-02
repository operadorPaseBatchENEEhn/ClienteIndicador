"use client";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import LogoEnee from "@/public/logo enee distribucion svg.svg";
import TransitionComponent from './TransitionComponent';
const Introduction = () => {
  return (
    <TransitionComponent className='z-20 w-full' position='right'>
    <div className="z-20 flex flex-col items-center justify-center gap-1 h-full p-8 py-10 md:py-0">
    <Image src={LogoEnee} priority width="700" height="450" alt='Enee Logo'/>
    <div className="flex flex-col justify-center max-w-md">
    <h2 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
     Pase Batch InCMS, <br />
    <TypeAnimation 
    sequence={[
        "Revision antes del pase",
        3000,
        "Post Facturacion",
        3000,
        "Generacion de lecturas",
        3000]}
    wrapper='span'
    speed={50}
    repeat={Infinity}
    className='font-bold text-secondary'
    />            
    </h2>
    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8 text-justify">
     Visualizacion indicadores del proceso recepcion y facturacion de pagos. 
    </p>
    </div>
    </div>
    </TransitionComponent>
  )
}

export default Introduction;