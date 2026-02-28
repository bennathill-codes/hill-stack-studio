import { motion, useScroll, useTransform } from 'motion/react';

export default function Header() {
  const { scrollY } = useScroll();

  const headerY = useTransform(scrollY, [0, 300], [0, -100]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.header
      style={{
        y: headerY,
        opacity: headerOpacity
      }}
      className="absolute top-0 left-0 right-0 z-50"
    >
      <div className="w-full px-6 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 group cursor-pointer w-6"
        >
        </motion.div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-[50vw]">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between w-full text-[1vw] font-semibold tracking-widest uppercase"
          >
            {['About', 'Services', 'Work'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 md:px-[1.2vw] md:py-[0.4vw] rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 hover:backdrop-blur-md text-gray-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              >
                {item}
              </a>
            ))}
          </motion.nav>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#contact"
            className="flex items-center gap-2 md:gap-[0.6vw] px-4 py-2 md:px-[1.2vw] md:py-[0.4vw] rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[3vw] md:text-[1vw] font-semibold tracking-widest text-white/70 uppercase hover:bg-white/10 hover:text-white transition-all duration-300 group shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            <span className="relative flex w-1.5 h-1.5 md:w-[0.4vw] md:h-[0.4vw]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#01FFCC] opacity-75"></span>
              <span className="relative inline-flex rounded-full w-1.5 h-1.5 md:w-[0.4vw] md:h-[0.4vw] bg-[#01FFCC]"></span>
            </span>
            <span className="text-[10px] md:text-[0.8vw] text-white/70 group-hover:text-white transition-colors duration-300 font-semibold tracking-widest">CONTACT</span>
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
}
