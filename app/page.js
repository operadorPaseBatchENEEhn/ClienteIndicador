import CoverParticles from "@/Components/CoverParticles";
import Container from "@/Components/Container";
import PageTransition from "@/Components/PageTransition";
import Introduction from "@/Components/Introduction";
export default function Home() {
  return (
   <Container>
   <PageTransition/>
   <div className="flex min-h-[100vh] h-full bg-no-repeat">
   <CoverParticles/>
   <Introduction/>
   </div>
   </Container>
  );
}
