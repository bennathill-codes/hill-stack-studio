import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import GlassPanel from './GlassPanel';

const services = [
  {
    id: '01',
    title: 'DEFINE',
    items: [
      'MARKET ANALYSIS',
      'DATA-DRIVEN STRATEGY',
      'IMPLEMENTATION STRATEGY',
      'SITE ARCHITECTURE'
    ]
  },
  {
    id: '02',
    title: 'DESIGN',
    items: [
      'DIGITAL IDENTITY',
      'WEB PAGE PROTOTYPING',
      'ADAPTIVE USER INTERFACE',
      'USER EXPERIENCE WORKFLOWS'
    ]
  },
  {
    id: '03',
    title: 'DEVELOP',
    items: [
      'RESPONSIVE DESIGN',
      'FULL STACK DEVELOPMENT',
      'SEARCH ENGINE OPTIMIZATION',
      'PRODUCTION READY BUILD'
    ]
  },
  {
    id: '04',
    title: 'DEPLOY',
    items: [
      'MONITORING & ANALYTICS',
      'MAINTENANCE & SUPPORT',
      'CI/CD PIPELINES',
      'COMPREHENSIVE TEST SUITE'
    ]
  }
];

const ServiceCard: React.FC<{ service: typeof services[0]; index: number }> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex-shrink-0 w-[75vw] md:w-[25vw] h-[85vw] md:h-[22vw] rounded-2xl overflow-hidden flex flex-col justify-between p-[5vw] md:p-[2vw] hover:bg-white/20 border-3 border-white/20 opacity-75 hover:opacity-100 transition-opacity duration-300"
    >
      {/* Background Number */}
      <motion.div
        style={{ y }}
        className="absolute right-[2vw] bottom-[2vw] text-[30vw] md:text-[12vw] font-display font-bold leading-none text-white/[0.2] group-hover:text-white/50 select-none pointer-events-none transition-colors duration-500 group-hover:text-white/[0.5]"
      >
        {service.id.replace('0', '')}
      </motion.div>

      <div className="relative z-10">
        <h3 className="text-[4vw] md:text-[1.2vw] font-bold tracking-widest text-white uppercase">{service.title}</h3>
      </div>

      <div className="relative z-10 mt-auto">
        <ul className="space-y-[1.5vw] md:space-y-[0.6vw]">
          {service.items.map((item, i) => (
            <li key={i} className="flex items-center text-[5vw] md:text-[0.7vw] font-mono tracking-wider text-white uppercase">
              <span className="w-[0.8vw] h-[0.8vw] md:w-[0.3vw] md:h-[0.3vw] rounded-full bg-white/50 mr-[2vw] md:mr-[0.8vw]"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="py-12 relative z-20 overflow-hidden px-4 md:px-8">
      <GlassPanel>
        <div className="px-6 md:px-16 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <h2 className="text-[10vw] md:text-[6vw] lg:text-[4.5vw] font-bold tracking-tighter text-white">Services</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 lg:pl-[2vw] flex flex-col justify-center"
            >
              <h3 className="text-[5vw] md:text-[3vw] lg:text-[2vw] font-medium tracking-tight text-white mb-[4vw] md:mb-[2vw] leading-tight">
                We work at the intersection of strategy, identity, and experience to shape brands with meaning.
              </h3>

              <div className="max-w-xl">
                <h4 className="text-[2.5vw] md:text-[0.9vw] font-bold tracking-widest text-white uppercase mb-[3vw] md:mb-[1vw]">From Insight to Identity.</h4>
                <p className="text-white/60 text-[3.5vw] md:text-[1vw] leading-relaxed">
                  We help brands define who they are, why they exist. At the intersection of strategy, branding, and design, we work with founders, studios, and companies to build identities that are clear, distinctive, and built to last.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 px-6 md:px-16 overflow-x-auto pb-12 pt-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                className="snap-center animate-float hover:[animation-play-state:paused]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}
