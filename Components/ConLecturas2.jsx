"use client";
import ConLecturas3 from "./ConLecturas3";
import Typed from "./Typed";
const ConLecturas2 = () => {
  return (
    <div className="flex w-full  md:flex ">
    <div className="w-[50%] flex flex-col gap-10 justify-center">
    <span className="text-secondary font-bold text-xl text-center">
    Introduzca la fecha de Lectura Programada {''} <Typed/>
    </span>
    <span className="text-blue-500 font-bold text-[15px] text-center ">
    Suministros enviados a leer Masivo 
    </span>
    <span className="text-blue-500 font-bold text-[15px] text-center">
    Suministros enviados a leer Altos Consumidores
    </span>
    <span className="text-secondary font-bold text-[15px] text-center">
    Total:
    </span>
    </div>
    <div className="w-[50%] mt-4">
    <ConLecturas3/>
    </div>
    </div>
  )
}

export default ConLecturas2