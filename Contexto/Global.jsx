"use client";
import {createContext,useState,useEffect} from 'react'
export const Stade = createContext();
const Global = ({children}) => {
const [inicio,setInicio] = useState(false);
const mostarprimero = ()=>{
  setInicio(!inicio);
}
const [time1,setTime1] = useState(true);
const [datosGeneracionLectura,setDatosGeneracionLectura] = useState({
  SuministrosEnviadosLeerMasivo: 0,
  SuministrosEnviadosLeerAltosConsumidores: 0,
  Total: 0
})
const [FechaGeneracionlecturas,setFechaGeneracionlecturas] = useState({
  fecha:""
});
const GetFechaGeneracionlecturas = (e)=>{
  setFechaGeneracionlecturas({
    ...FechaGeneracionlecturas,
    [e.target.name]:e.target.value
  })
};
const [openView,setOpenView] = useState(false);
const [openModal,setOpenModal] = useState(false);
const openGetView = ()=>{
  setOpenView(true);
  setTimeout(()=>{
    setOpenModal(true);
  },1000)
  }
const closedGetView = ()=>{
  setOpenView(false);
      setTimeout(()=>{
        setOpenModal(false);
      },500)
  }
const [DatosAntesPaseNoche,setDatosAntesPaseNoche] = useState({
  FechaPaseBatch: ''
});
const GetDatosAntesPaseNoche = (e)=>{
  setDatosAntesPaseNoche({
    ...DatosAntesPaseNoche,
    [e.target.name]:e.target.value
  })
};
const [ObjetoAntesPaseNoche,setObjetoAntesPaseNoche] = useState({
  CompradorArtivo: 'N/A',
  CantidadConceptos: '0',
  CantidadLecturasPagas: '0',
  CantidadPagos: '0',
  FechaLecturasRealCicloMax: '0',
  FechaRealRecepcionMax:'0',
  FechaLecturaReal:'0',
  AnomaliasBlanco:'0'});
 const GetObjetoAntesPaseNoche = (e)=>{
  setObjetoAntesPaseNoche({
    ...ObjetoAntesPaseNoche,
    [e.target.name]:e.target.value})
  };
  const [ObjetoProgramasPase,setObjetoProgramasPase] = useState({
    cbc1400: 0,
    lecb500: 0,
    FACB001: 0
  });
  const [ObjetoPostFacturacionform,setObjetoPostFacturacionform] = useState({
    FechaPostFacturacion:''
  })
  const GetObjetoPostFacturacionform = (e)=>{
    setObjetoPostFacturacionform({
      ...ObjetoPostFacturacionform,
      [e.target.name]:e.target.value})
  };
  const [ObjetoPostFacturacion,setObjetoPostFacturacion] = useState({
    TotalSuministrosFacturados: 0,
    ObservacionTotalSuministrosFacturados: '0',
    Anomalias: 0,
    ObservacionAnomalias: '0',
    Emblasados:0,
    ObservacionEmbalasados: '0',
    LecturasProcesadasITCDL:0,
    ObservacionLecturasProcesadasITCDL:0,
    ITERROR:0,
    ObservacionITERROR:0,
    CICLOSITERROR:0,
    ObservacionCICLOSITERROR:0,
    EmbalsadosITIFACT:0,
    ObservacionEmbalsadosITIFACT:0,
    ValidacionFUECICLO:0,
    ObservacionValidacionFUECICLO:0,
    PagosEmbalsados:0,
    ObservacionPagosEmbalsados:0
  });
  return (
    <Stade.Provider value={{
        inicio,mostarprimero,
        time1,setTime1,
        datosGeneracionLectura,
        FechaGeneracionlecturas,
        GetFechaGeneracionlecturas,
        openView,openModal,
        openGetView,closedGetView,
        DatosAntesPaseNoche,GetDatosAntesPaseNoche,
        ObjetoAntesPaseNoche,GetObjetoAntesPaseNoche,
        ObjetoProgramasPase,setObjetoProgramasPase,
        ObjetoPostFacturacion,setObjetoPostFacturacion,
        ObjetoPostFacturacionform,GetObjetoPostFacturacionform
    }}>
    {children}
    </Stade.Provider>  
  )
}

export default Global;