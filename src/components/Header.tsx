import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0.8)']
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
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="font-semibold tracking-tight text-lg">Hill Stack Studio</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ffcc] shadow-[0_0_10px_#00ffcc] group-hover:shadow-[0_0_15px_#00ffcc] transition-shadow duration-300"></span>
        </motion.div>
        
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400"
        >
          {['Services', 'Works', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </motion.nav>
      </div>
    </motion.header>
  );
}
