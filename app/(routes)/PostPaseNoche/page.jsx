"use client";
import Container from "@/Components/Container";
import PageTransition from "@/Components/PageTransition";
import UseGlobal from "@/Contexto/UseGlobal";
import TransitionComponent from "@/Components/TransitionComponent";
import CoverParticles from "@/Components/CoverParticles";
import FormularioEntrada from "@/Components/FormularioEntrada";
import Tabla from "@/Components/Tabla";
//import Item1 from "@/Components/Item1";
//import Item from "@/Components/Item";
const page = () => {
  const {ObjetoPostFacturacionform,GetObjetoPostFacturacionform} = UseGlobal();
  const {FechaPostFacturacion} = ObjetoPostFacturacionform;
  return (
    <Container>
    <PageTransition/>
    <CoverParticles/>
    <TransitionComponent position='bottom' className="w-full h-full flex flex-col gap-3">
    <FormularioEntrada title='POST FACTURACION' 
                       p1='Pantalla Muestra lo Facturado despues de Pase Batch'
                       p2='Introduzca la fecha del PASE BATCH (YYMMDD)'
                       value='FechaPostFacturacion'
                       funcion1={GetObjetoPostFacturacionform}
                       />
    <div className="w-full">
    <Tabla/>
    </div>
    </TransitionComponent>
    </Container>
  )
}

export default page