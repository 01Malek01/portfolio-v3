import React from 'react'
import LoopingIcons from './LoopingIcons'
import { motion } from 'framer-motion'
import { BorderBeam } from './magicui/border-beam'

function WaiAnimations() {
 return (
  <>
   <motion.div
    initial={{ y: 50 }}
    animate={{ y: 0 }}
    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    className="relative lg:flex hidden  md:order-2 overflow-hidden  flex-1 p-2 flex-col gap-4 mt-3 text-[4rem]  items-center rounded-lg w-fit  text-slate-200 right-0  "

   >

    <LoopingIcons slice={3} animation={'move'} />
    {[' Innovation', ' Precision', ' Versatility'].map((word, index) => (
     <motion.span
      key={index}
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, delay: index * 0.7 }}
      className="word"
     >
      {word}
     </motion.span>
    ))}
    <BorderBeam size={800} duration={12} delay={9} />

   </motion.div>
  </>
 )
}

export default WaiAnimations
