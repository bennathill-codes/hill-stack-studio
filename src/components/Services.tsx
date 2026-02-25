import { motion } from 'motion/react';
import React from 'react';

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
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex-shrink-0 w-[85vw] md:w-[40vw] h-[100vw] md:h-[35vw] rounded-sm glass overflow-hidden flex flex-col justify-between p-[6vw] md:p-[3vw] bg-[#222222]"
    >
      {/* Background Number */}
      <div className="absolute right-[4vw] bottom-[4vw] text-[40vw] md:text-[20vw] font-display font-bold leading-none text-white/[0.03] select-none pointer-events-none transition-colors duration-500 group-hover:text-white/[0.05]">
        {service.id.replace('0', '')}
      </div>

      <div className="relative z-10">
        <h3 className="text-[5vw] md:text-[2vw] font-bold tracking-widest text-white uppercase">{service.title}</h3>
      </div>

      <div className="relative z-10 mt-auto">
        <ul className="space-y-[2vw] md:space-y-[1vw]">
          {service.items.map((item, i) => (
            <li key={i} className="flex items-center text-[3vw] md:text-[1vw] font-semibold tracking-wider text-white/70 uppercase">
              <span className="w-[1vw] h-[1vw] md:w-[0.4vw] md:h-[0.4vw] rounded-full bg-white/50 mr-[3vw] md:mr-[1vw]"></span>
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
    <section id="services" className="py-32 relative z-20 overflow-hidden bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <h2 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-bold tracking-tighter text-white">Services</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 lg:pl-[4vw] flex flex-col justify-center"
          >
            <h3 className="text-[6vw] md:text-[4vw] lg:text-[3vw] font-medium tracking-tight text-white mb-[6vw] md:mb-[3vw] leading-tight">
              We work at the intersection of strategy, identity, and experience to shape brands with meaning.
            </h3>

            <div className="max-w-xl">
              <h4 className="text-[3vw] md:text-[1vw] font-bold tracking-widest text-white uppercase mb-[4vw] md:mb-[1.5vw]">From Insight to Identity.</h4>
              <p className="text-white/60 text-[4vw] md:text-[1.2vw] leading-relaxed">
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
          className="flex gap-6 px-6 md:px-12 overflow-x-auto pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {services.map((service, index) => (
            <div key={service.id} className="snap-center">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
