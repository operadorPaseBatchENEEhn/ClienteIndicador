"use client";
import UseGlobal from "@/Contexto/UseGlobal";
import { Con2AntesPaseNoche } from "./Con2AntesPaseNoche";
const Con1AntesPaseNoche = () => {
    const {GetDatosAntesPaseNoche} = UseGlobal();
    const HandleSubmit = (e)=>{
        e.preventDefault();}
  return (
    <div className="w-full  md:flex md:flex-col gap-3">
    <h1 className="text-center uppercase text-2xl text-blue-500 font-bold">
    Revision antes del pase
    </h1>
    <form onSubmit={HandleSubmit} className="flex w-full gap-3 justify-center items-center mb-2">
    <span className="text-secondary text-xl font-bold">
    Introduzca fecha del Pase Batch YYMMDD
    </span>
    <input type="text" name="FechaPagos" placeholder="Fecha de pagos" className="px-3 py-2 w-76 text-black " onChange={GetDatosAntesPaseNoche} />
    <input type="submit" value="Revision" className="py-3 px-4 bg-green-500 text-white text-sm hover:cursor-pointer" />
    </form>
    <Con2AntesPaseNoche/>
    </div>
  )
}

export default Con1AntesPaseNoche