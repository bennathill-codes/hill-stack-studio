import { motion, useScroll } from 'motion/react';
import { Globe } from 'lucide-react';
import { ArrowDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  const { scrollYProgress } = useScroll();

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#050406] to-[#aaa9ac] pt-20">
<div className="flex-1 flex items-start justify-center w-full px-4 pt-0">
    <motion.h1 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="font-display font-black text-[15vw] leading-[0.95] tracking-[-0.01em] uppercase text-center flex flex-col items-center relative z-10"
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#b4b3b5] to-[#605f62]">DIGITAL</span>
      <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#b4b3b5] to-[#605f62]">PRESENCE</span>
      <div className="absolute top-[100%] right-[5%] flex items-center mt-2">
        <span 
          className="text-[5vw] font-mono font-medium text-white/70 uppercase tracking-[0.2em] select-none pointer-events-none w-[12ch] text-left inline-block"
        >
          <Typewriter
            words={['DEFINED', 'DESIGNED', 'DEVELOPED', 'DEPLOYED']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </span>
      </div>
    </motion.h1>
  </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full px-6 md:px-12 pb-8 flex flex-col md:flex-row justify-between items-end gap-8"
      >
        <div className="text-xs md:text-sm font-mono text-white/70 uppercase tracking-widest leading-relaxed">
          <p>ENGINEERED BY HILL STACK STUDIO</p>
          <p className="flex items-center gap-2">
            US <Globe className="w-3 h-3" /> {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ opacity: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

