"use client";
const FormularioDurantePase = ({BotomTitulo,texto,valor,funcion}) => {
  return (
    <div className="w-full flex justify-center items-center h-[180px] border-b-2">
    <div className="w-[35%] flex justify-center items-center h-full">
    <button onClick={funcion}  className="bg-blue-600 text-white px-5 py-3 w-[200px] text-xs hover:cursor-pointer" >
    {BotomTitulo}
    </button>
    </div>
    <div className="flex flex-col gap-2 justify-center w-[65%] items-center h-full">
    <span className="text-white text-xl text-center font-bold mt-3">{texto}</span>
    <div className="flex w-full justify-center items-center gap-5">
    <span className="text-xl font-bold text-blue-500 text-center">Cantidad:</span>
    <span className="text-xl font-bold text-blue-500 text-center">{valor}</span>
    </div>
    </div>
    </div>
  )
}

export default FormularioDurantePase;