"use client";
import {motion,AnimatePresence} from 'framer-motion';
import { transitionVariantsPage } from '@/Utils/MotionTransition';
const PageTransition = () => {
  return (
    <AnimatePresence mode='wait'>
    <div>
    <motion.div
     className='fixed top-0 bottom-0 right-full w-screen bg-[#2e2257]' 
     variants={transitionVariantsPage}
    initial='initial'
    animate='animate'
    exit='exit'
    transition={{delay:0.8,duration:1.5,ease:'easeInOut'}}
    >
    </motion.div>
    </div>
    </AnimatePresence>
  )
}

export default PageTransition