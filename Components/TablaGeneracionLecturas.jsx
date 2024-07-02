"use client";
import UseGlobal from "@/Contexto/UseGlobal";
import ImgClosed from "@/public/cerrar.svg";
import Image from "next/image";
const TablaGeneracionLecturas = () => {
    const {openModal,closedGetView} = UseGlobal();
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 text-white overflow-hidden z-50"> 
    <div onclick={closedGetView} className="absolute right-8 top-8 w-[2rem] h-[2rem] hover:cursor-pointer hover:bg-yellow/40">
    <Image src={ImgClosed} alt="Cerrar" width={20} height={20} />
    </div>
    <div className="`w-[40rem] m-w-[53rem] transition-all duration-300 ease-in 
                     opacity-0 mx-auto my-28 h-[400px] rounded-2xl
                    bg-white text-black relative left-auto top-20"></div>
    </div>
  )
}

export default TablaGeneracionLecturas