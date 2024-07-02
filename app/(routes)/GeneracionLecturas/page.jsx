import Container from "@/Components/Container";
import PageTransition from "@/Components/PageTransition";
import VistaGeneracionLecturas from "@/Components/VistaGeneracionLecturas";
import CoverParticles from "@/Components/CoverParticles";
const page = () => {
  return (
    <Container>
    <PageTransition/>
    <CoverParticles/>
    <VistaGeneracionLecturas/>
    </Container>
  )
}

export default page