"use client";
import UseGlobal from "@/Contexto/UseGlobal";
import ConLecturas1 from "./ConLecturas1";
import ConLecturas2 from "./ConLecturas2";
const VistaGeneracionLecturas = ({titulo,funcion}) => {
    const {inicio,mostarprimero,openView} = UseGlobal();
  return (
    <main className="w-full mx-auto flex flex-col gap-3">
    <h1 className="text-center text-blue-500 font-bold mt-5 text-2xl">
    Generacion de lecturas.
    </h1>
    <div className="flex w-full items-center h-[120px]">
    <div className="w-[30%] flex justify-center items-center">
    <button onClick={mostarprimero} className="py-5 px-6 text-white font-bold bg-green-500 hover:cursor-pointer hover:opacity-20">
    Actualizar durante el pase
    </button>
    </div>
    <div className="w-[60%]">
    <p className="text-xl text-green-400 text-justify">
    Esta pantalla muestra el avance de la generacion del medio dia. Cuando termina el pase mandara un pase 
    con los ultimos datos Cuando se genera el viernes revisarlos 3 a 2 dias que se generan el viernes.
    </p>
    </div>
    </div>
    {inicio && <ConLecturas1/>}
    <ConLecturas2/>
    </main>
  )
}

export default VistaGeneracionLecturas