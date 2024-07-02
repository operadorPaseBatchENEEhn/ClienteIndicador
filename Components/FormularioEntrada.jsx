"use client";
const FormularioEntrada = ({title,p1,p2,date,value,funcion1,funcion2}) => {
  return (
    <div className="w-full h-[200px] flex flex-col gap-2 justify-center">
    <h1 className="text-2xl font-bold text-center text-blue-500">{title}</h1>
    <span className="text-xl text-green-500 font-bold text-center">{p1}</span>
    <form onSubmit={funcion2} className="w-full flex justify-between items-center h-[100px]">
    <span className="text-2xl text-secondary font-bold">{p2}</span>
    <input onChange={funcion1} type="text" name={value} id={value} placeholder="YYDDMM" className="md:w-[250px] md:py-3 text-black md:px-4 w-[100px] py-2 px-3"/>
    <input type="submit" value="Resumen Paso" className="md:py-3 md:px-4 md:w-[150px] bg-green-500 text-white font-bold text-sm hover:cursor-pointer py-2 px-3 w-[100px]" />
    </form>
    </div>
  )
}

export default FormularioEntrada