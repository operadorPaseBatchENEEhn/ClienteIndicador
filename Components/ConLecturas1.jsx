"use global";
import UseGlobal from '@/Contexto/UseGlobal'
import SpinnerContainer from './SpinnerContainer';
import TransitionComponent from './TransitionComponent';
const ConLecturas1 = () => {
    const {time1,setTime1} = UseGlobal();
    setTimeout(()=>{
    setTime1(false);
    },2500)
  return (
    <div className='w-[50%] mx-auto flex justify-center items-center'>
    <TransitionComponent position="right" className='w-full h-[80px] flex gap-1 items-center justify-center'>
    <h2 className='text-center text-white font-bold ' >
     Se visualizara el indicador DBD cuando se haga la conexion
    </h2>
    <SpinnerContainer/>
    </TransitionComponent>
    </div>
  )
}

export default ConLecturas1