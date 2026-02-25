import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import logo from '../assets/logo.svg';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(17, 17, 17, 0)', 'rgba(17, 17, 17, 0.8)']
  );
  
  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.05)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      style={{ 
        backgroundColor: headerBackground,
        borderBottomColor: headerBorder,
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid'
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500"
    >
      <div className="w-full px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <img src={logo} alt="Hill Stack Studio Logo" className="h-6 w-auto" />
        </motion.div>
        
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-full max-w-xl px-4">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between w-full text-xs font-semibold tracking-widest text-white/60 uppercase"
          >
            {['About', 'Services', 'Work'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors duration-300"
              >
                + {item}
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
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-xs font-semibold tracking-widest text-white/80 uppercase hover:bg-white hover:text-black transition-colors duration-300 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#01FFCC]"></span>
            Contact
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
}
