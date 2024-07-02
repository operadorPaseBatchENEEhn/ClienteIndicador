"use client";
import UseGlobal from "@/Contexto/UseGlobal";
const Tabla = () => {
  const {ObjetoPostFacturacion} = UseGlobal();
  const {TotalSuministrosFacturados,ObservacionTotalSuministrosFacturados,
         Anomalias,ObservacionAnomalias,
         Emblasados,ObservacionEmbalasados,
         LecturasProcesadasITCDL,ObservacionLecturasProcesadasITCDL,
         ITERROR,ObservacionITERROR,
         CICLOSITERROR,ObservacionCICLOSITERROR,
         EmbalsadosITIFACT,ObservacionEmbalsadosITIFACT,
         ValidacionFUECICLO,ObservacionValidacionFUECICLO,
         PagosEmbalsados,ObservacionPagosEmbalsados} = ObjetoPostFacturacion;
  return (
  <table className='w-full h-full'>
  <tbody>
  <tr>
    <th className="border-[1px] text-center text-2xl bg-orange-500 text-white">PROCESOS</th>
    <th className="border-[1px] text-center text-2xl bg-orange-500 text-white">CANTIDAD</th>
    <th className="border-[1px] text-center text-2xl bg-orange-500 text-white">OBSER</th>
  </tr>
  <tr>
    <td className="text-center text-xl text-white border-[1px]">TOTAL SUMINISTROS FACTURADOS</td>
    <td className="text-center text-xl text-white border-[1px]">{TotalSuministrosFacturados}</td>
    <td className="text-center text-xl text-white border-[1px]">{ObservacionTotalSuministrosFacturados}</td>
  </tr>
  <tr>
  <td className="text-center text-xl text-white border-[1px]">ANOMALIAS</td>
  <td className="text-center text-xl text-white border-[1px]">{Anomalias}</td>
  <td className="text-center text-xl text-white border-[1px]">{ObservacionAnomalias}</td>
  </tr>
  <tr>
    <td className="text-center text-xl text-white border-[1px]">EMBALSADOS</td>
    <td className="text-center text-xl text-white border-[1px]">{Emblasados}</td>
    <td className="text-center text-xl text-white border-[1px]">{ObservacionEmbalasados}</td>
  </tr>
  <tr>
    <td className="text-center text-xl text-white border-[1px]">Lecturas Procesadas ITIDCL</td>
    <td className="text-center text-xl text-white border-[1px]">{LecturasProcesadasITCDL}</td>
    <td className="text-center text-xl text-white border-[1px]">{ObservacionLecturasProcesadasITCDL}</td>
  </tr>
  <tr>
    <td className="text-center text-xl text-white border-[1px]">ITIERRORL</td>
    <td className="text-center text-xl text-white border-[1px]">{ITERROR}</td>
    <td className="text-center text-xl text-white border-[1px]">{ObservacionITERROR}</td>
  </tr>
  <tr>
    <td className="text-center text-xl text-white border-[1px]">CICLOS_ERROR</td>
    <td className="text-center text-xl text-white border-[1px]">{CICLOSITERROR}</td>
    <td className="text-center text-xl text-white border-[1px]">{ObservacionCICLOSITERROR}</td>
  </tr>
  <tr>
    <td className="text-center text-xl text-white border-[1px]">Embalsados ITIFACT</td>
    <td className="text-center text-xl text-white border-[1px]">{EmbalsadosITIFACT}</td>
    <td className="text-center text-xl text-white border-[1px]">{ObservacionEmbalsadosITIFACT}</td>
  </tr>
  <tr>
    <td className="text-center text-xl text-white border-[1px]">Validacion FUECICLO</td>
    <td className="text-center text-xl text-white border-[1px]">{ValidacionFUECICLO}</td>
    <td className="text-center text-xl text-white border-[1px]">{ObservacionValidacionFUECICLO}</td>
  </tr>
  <tr>
    <td className="text-center text-xl text-white border-[1px]">Pagos Embalsados</td>
    <td className="text-center text-xl text-white border-[1px]">{PagosEmbalsados}</td>
    <td className="text-center text-xl text-white border-[1px]">{ObservacionPagosEmbalsados}</td>
  </tr>
  </tbody>
</table>
  )
}

export default Tabla