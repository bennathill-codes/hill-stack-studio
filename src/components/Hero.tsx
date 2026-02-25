import { motion, useScroll, useTransform } from 'motion/react';
import { Globe } from 'lucide-react';
import { ArrowDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import oceanLoop from '../assets/ocean-loop.mp4';
import logo from '../assets/logo.svg';

export default function Hero() {
  const { scrollY } = useScroll();
  const textScale = useTransform(scrollY, [0, 500], [1, 1.5]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden pt-20">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={oceanLoop} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050406]/80 to-[#aaa9ac]/80 z-0" />

      <div className="flex-1 flex items-center justify-center w-full px-4 pt-0 relative z-10">
        <motion.div
          style={{ scale: textScale, opacity: textOpacity }}
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[14vw] leading-[0.95] tracking-[-0.01em] uppercase text-center flex flex-col items-center relative z-10"
          >
            <div className="flex flex-col items-center mb-[4vw] md:mb-[2vw]">
              <img src={logo} alt="Hill Stack Studio Logo" className="h-[4vw] md:h-[1.5vw] w-auto mb-[2vw] md:mb-[1vw] opacity-40 mix-blend-overlay" />
              <span className="text-[2.5vw] md:text-[0.8vw] font-mono font-semibold tracking-[0.3em] text-white/40 mix-blend-overlay uppercase">Hill Stack Studio</span>
            </div>
            <span className="bg-gradient-to-b from-white/0 to-white/20 bg-clip-text text-transparent mix-blend-overlay drop-shadow-2xl">DIGITAL</span>
            <span className="text-white/20 to-white/90 mix-blend-overlay drop-shadow-2xl">PRESENCE</span>
            <div className="absolute top-[100%] right-0 flex items-center mt-4">
              <span
                className="text-[3.5vw] font-mono font-medium text-white/70 uppercase tracking-[0.2em] select-none pointer-events-none w-[12ch] text-left inline-block"
              >
                <Typewriter
                  words={['DEFINED', 'DESIGNED', 'DEVELOPED', 'DEPLOYED']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={80}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </span>
            </div>
          </motion.h1>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full px-6 md:px-12 pb-8 flex flex-col md:flex-row justify-between items-end gap-8 relative z-10"
      >
        <div className="text-[2vw] md:text-[0.8vw] font-mono text-white/70 uppercase tracking-widest leading-relaxed">
          <p>ENGINEERED BY BENJAMIN HILL</p>
          <p className="flex items-center gap-[1vw] md:gap-[0.5vw]">
            US <Globe className="w-[2.5vw] h-[2.5vw] md:w-[1vw] md:h-[1vw]" /> {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ opacity: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-[1.5vw] md:gap-[0.8vw]"
        >
          <span className="text-[2vw] md:text-[0.8vw] uppercase tracking-widest font-medium">Scroll to explore</span>
          <ArrowDown className="w-[3vw] h-[3vw] md:w-[1vw] md:h-[1vw]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

