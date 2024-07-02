import React from 'react'
import PageTransition from '@/Components/PageTransition';
import Container from '@/Components/Container';
import SpinnerContainer2 from '@/Components/SpinnerContainer2';
const page = () => {
  return (
    <Container>
    <PageTransition/>
    <div className="w-full h-[500px] flex flex-col justify-center">
    <span className='text-2xl font-bold text-center text-secondary'>
    Cuando se haga la conexion a la BD se visualizara la vista de datos
    </span>
    <SpinnerContainer2/>
    </div>
    </Container>
  )
}

export default page