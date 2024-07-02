"use client";
import TransitionComponent from './TransitionComponent'
import Link from "next/link";
import { socialNetworks } from '@/data';
const Header = () => {
  return (
    <TransitionComponent position='bottom' className='absolute z-40 inline-block w-full top-5 md:top-10'>
    <header className="container justify-between max-w-6xl mx-auto md:flex">
    <Link href="/">
    <h1 className="my-3 text-4xl font-bold text-center md:text-left">
      Pase Batch {''}
    <span className="text-red-600">
      InCMS
    </span>
        </h1>
      </Link>
      <div className="flex items-center justify-center gap-7">
       {
        socialNetworks.map(({id,logo,src})=>{
            return <Link key={id} href={src} target="_blank" className='transition-all duration-300 hover:text-red-600'>
                   {logo}
                  </Link>
        })
       }
      </div>
    </header>
    </TransitionComponent>
  )
}

export default Header