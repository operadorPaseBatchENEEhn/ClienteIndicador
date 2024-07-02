"use client";
const Item = ({title,item1,item2,item3,item4,item5,item6,item7,item8,item9}) => {
  return (
    <div className='w-[30%] gap-2 flex flex-col justify-center items-center h-[500px]'>
    <span className='text-center font-bold text-white py-4 bg-orange-500 px-6 inline-block w-full text-2xl'>{title}</span>
    <span className='text-white text-sm text-center font-bold py-1 '>{item1}</span>
    <span className='text-white text-sm text-center font-bold py-1'>{item2}</span>
    <span className='text-white text-sm text-center font-bold py-1'>{item3}</span>
    <span className='text-white text-sm text-center font-bold py-1'>{item4}</span>
    <span className='text-white text-sm text-center font-bold py-1'>{item5}</span>
    <span className='text-white text-sm text-center font-bold py-1'>{item6}</span>
    <span className='text-white text-sm text-center font-bold py-1'>{item7}</span>
    <span className='text-white text-sm text-center font-bold py-1'>{item8}</span>
    <span className='text-white text-sm text-center font-bold py-1'>{item9}</span>
    </div>
  )
}

export default Item;