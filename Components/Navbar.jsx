"use client";
import { itemsNavbar } from "@/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TransitionComponent from "./TransitionComponent";
const Navbar = () => {
    const router = usePathname();
  return (
    <TransitionComponent position='right' className='fixed z-40 flex flex-col items-center justify-center w-full mt-auto bottom-10'>
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm" >
        {
            itemsNavbar.map((items)=>{
                return <div key={items.id} 
                       className={`px-3 py-2 transition duration-150 
                                   rounded-full cursor-pointer
                                   hover:bg-secondary ${router === items.link && `bg-secondary`}`}>
                       <Link href={items.link}>
                       {items.icon}
                       </Link>
                      </div>
            })
        }
        </div>
      </nav>
    </TransitionComponent>
  )
}

export default Navbar;
