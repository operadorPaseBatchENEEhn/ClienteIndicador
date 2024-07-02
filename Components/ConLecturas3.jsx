"use client";
import UseGlobal from "@/Contexto/UseGlobal";
import { useRouter } from "next/navigation";
const ConLecturas3 = () => {
    const {datosGeneracionLectura,FechaGeneracionlecturas,GetFechaGeneracionlecturas,openGetView} = UseGlobal();
    const {SuministrosEnviadosLeerMasivo,
           SuministrosEnviadosLeerAltosConsumidores,
           Total} = datosGeneracionLectura;
    const {fecha} = FechaGeneracionlecturas
    const router = useRouter();
    const navegar = ()=>{
      router.push("/TablaGeneracion");
    }
    const GeneracionLecturas = (e)=>{
    e.preventDefault();
    navegar();
    }
  return (
   <form className="w-full flex flex-col gap-5 justify-center" onSubmit={GeneracionLecturas}> 
   <input type="text" name="fecha" id="fecha" className="px-3 py-2 w-80 text-black inline-block mx-auto" placeholder="YYMMDD" onChange={GetFechaGeneracionlecturas}/>
   <span className="text-blue-600 font-bold text-xl text-center">{SuministrosEnviadosLeerMasivo}</span>
   <span className="text-blue-600 font-bold text-xl text-center">{SuministrosEnviadosLeerAltosConsumidores}</span>
   <span className="text-red-700 font-bold text-2xl text-center">{Total}</span>
   <input type="submit" value="Resumen Pase" className="p-x3 py-3 bg-green-700 text-white font-bold w-60 inline-block mx-auto hover:cursor-pointer" />
   </form>
  )
}

export default ConLecturas3