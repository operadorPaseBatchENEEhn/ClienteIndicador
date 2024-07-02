import PageTransition from "@/Components/PageTransition";
import Container from "@/Components/Container";
import CoverParticles from "@/Components/CoverParticles";
import Con1AntesPaseNoche from "@/Components/Con1AntesPaseNoche";
import TransitionComponent from "@/Components/TransitionComponent";
const page = () => {
  return (
    <Container>
    <PageTransition/>
    <CoverParticles/>
    <TransitionComponent position='bottom' className='w-full'>
    <Con1AntesPaseNoche/>
    </TransitionComponent>
    </Container>
  )
}

export default page;