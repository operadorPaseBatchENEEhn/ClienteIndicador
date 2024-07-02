"use client";
import UseGlobal from "@/Contexto/UseGlobal";
export const Con2AntesPaseNoche = () => {
    const {ObjetoAntesPaseNoche} = UseGlobal();
    const {CompradorArtivo,CantidadConceptos,CantidadLecturasPagas,
           CantidadPagos,FechaLecturasRealCicloMax,FechaRealRecepcionMax,
           FechaLecturaReal,AnomaliasBlanco} = ObjetoAntesPaseNoche;
  return (
    <div className="w-full flex justify-center gap-2">
    <div className="flex flex-col gap-2 justify-center w-[50%]">
    <span className="bg-red-500 text-2xl text-white text-center px-6 py-2">
    Proceso
    </span>
    <span className="text-xl text-white text-center py-2 px-6">
    Comprador Activo
    </span>
    <span className="text-xl text-white text-center py-2 px-6">
    Cantidad de conceptos
    </span>
    <span className="text-xl text-white text-center py-2 px-6">
    Cantidad de lecturas a procesar
    </span>
    <span className="text-xl text-white text-center py-2 px-6">
    Cabtidad de pagos
    </span>
    <span className="text-xl text-white text-center py-2 px-6">
    Fecha Lecturas Real Ciclo Maximo
    </span>
    <span className="text-xl text-white text-center py-2 px-6">
    Fecha Real Recepcion Maxima
    </span>
    <span className="text-xl text-white text-center py-2 px-6">
    Gecha Lcetura real
    </span>
    <span className="text-xl text-white text-center py-2 px-6">
    Animalias en Blanco
    </span>
    </div>
    <div className="flex flex-col gap-2 justify-center  w-[50%]">
    <span className="bg-red-500 text-2xl text-white text-center px-6 py-2">
    CANTIDAD
    </span>
    <span className="text-xl text-white text-center py-2 px-6">
    {CompradorArtivo}
    </span>
    <span className="text-xl text-white text-center py-2 px-6">
    {CantidadConceptos}
    </span>
    <span className="text-xl text-white text-center py-2 px-6">
    {CantidadLecturasPagas}
    </span>
    <span className="text-xl text-white text-center py-2 px-6">
    {CantidadPagos}
    </span>
    <span className="text-xl text-white text-center py-2 px-6">
    {FechaLecturasRealCicloMax}
    </span>
    <span className="text-xl text-white text-center py-2 px-6">
    {FechaRealRecepcionMax}
    </span>
    <span className="text-xl text-white text-center py-2 px-6">
    {FechaLecturaReal}
    </span>
    <span className="text-xl text-white text-center py-2 px-6">
    {AnomaliasBlanco}
    </span>
    </div>
    </div>
  )
}
