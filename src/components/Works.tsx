import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import GlassPanel from './GlassPanel';

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
    <section id="works" className="py-12 px-4 md:px-8 relative z-20">
      <GlassPanel>
        <div className="px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-[10vw] md:text-[6vw] lg:text-[4.5vw] font-bold tracking-tighter mb-4 text-white">Recent Works.</h2>
            <p className="text-white/60 text-[3.5vw] md:text-[1vw] max-w-xl">A curated selection of digital experiences engineered for impact.</p>
          </motion.div>

          <div className="flex flex-col gap-24">
            {works.map((work, index) => (
              <motion.a
                key={work.id}
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative block w-full md:w-[70%] ${work.align === 'right' ? 'md:ml-auto' : ''}`}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                  <img
                    src={work.image}
                    alt={work.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-[6vw] md:text-[2.5vw] font-bold text-white tracking-tight">{work.title}</h3>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                      <p className="text-white/70 font-mono text-[3vw] md:text-[0.9vw] tracking-wide">{work.tech}</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}
