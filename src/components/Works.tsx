import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const works = [
  {
    id: 1,
    title: 'Aura Finance',
    tech: 'Next.js, Framer Motion, WebGL',
    image: 'https://picsum.photos/seed/aura/1920/1080?blur=2',
    link: '#',
    align: 'left'
  },
  {
    id: 2,
    title: 'Chronos Platform',
    tech: 'React, Tailwind, Three.js',
    image: 'https://picsum.photos/seed/chronos/1920/1080?blur=2',
    link: '#',
    align: 'right'
  },
  {
    id: 3,
    title: 'Nexus Identity',
    tech: 'Vue, GSAP, Node.js',
    image: 'https://picsum.photos/seed/nexus/1920/1080?blur=2',
    link: '#',
    align: 'left'
  }
];

export default function Works() {
  return (
    <section id="works" className="py-32 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Recent Works.</h2>
          <p className="text-slate-400 text-lg max-w-xl">A curated selection of digital experiences engineered for impact.</p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {works.map((work, index) => (
            <motion.a
              key={work.id}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative block w-full md:w-[80%] ${work.align === 'right' ? 'md:ml-auto' : ''}`}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl glass">
                <motion.img
                  src={work.image}
                  alt={work.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{work.title}</h3>
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                    <p className="text-[#00ffcc] font-mono text-sm tracking-wide">{work.tech}</p>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
