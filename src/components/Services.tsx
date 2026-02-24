import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import React, { MouseEvent, useRef } from 'react';

const services = [
  {
    id: '01',
    title: 'DEFINE',
    items: [
      'BRAND STRATEGY',
      'POSITIONING & MESSAGING',
      'VISUAL IDENTITY SYSTEMS',
      'BRAND GUIDELINES'
    ]
  },
  {
    id: '02',
    title: 'DESIGN',
    items: [
      'ART DIRECTION',
      'EDITORIAL LAYOUTS',
      'TYPOGRAPHY SYSTEMS',
      'PRINT & DIGITAL ASSETS'
    ]
  },
  {
    id: '03',
    title: 'DEVELOP',
    items: [
      'FRONTEND ENGINEERING',
      'CREATIVE CODING',
      'WEBGL & 3D EXPERIENCES',
      'PERFORMANCE OPTIMIZATION'
    ]
  },
  {
    id: '04',
    title: 'DEPLOY',
    items: [
      'CI/CD PIPELINES',
      'CLOUD INFRASTRUCTURE',
      'MONITORING & ANALYTICS',
      'MAINTENANCE & SUPPORT'
    ]
  }
];

const ServiceCard: React.FC<{ service: typeof services[0]; index: number }> = ({ service, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex-shrink-0 w-[85vw] md:w-[600px] h-[500px] rounded-3xl glass overflow-hidden flex flex-col justify-between p-8 md:p-12"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 255, 204, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Background Number */}
      <div className="absolute right-4 bottom-4 text-[240px] md:text-[320px] font-bold leading-none text-white/[0.03] select-none pointer-events-none transition-colors duration-500 group-hover:text-white/[0.05]">
        {service.id.replace('0', '')}
      </div>

      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-bold tracking-widest text-white uppercase">{service.title}</h3>
      </div>

      <div className="relative z-10 mt-auto">
        <ul className="space-y-3">
          {service.items.map((item, i) => (
            <li key={i} className="flex items-center text-xs md:text-sm font-semibold tracking-wider text-slate-300 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ffcc] mr-4 shadow-[0_0_8px_rgba(0,255,204,0.6)]"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="py-32 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white">Services</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 lg:pl-12 flex flex-col justify-center"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-12 leading-tight">
              We work at the intersection of strategy, identity, and experience to shape brands with meaning.
            </h3>
            
            <div className="max-w-xl">
              <h4 className="text-sm font-bold tracking-widest text-white uppercase mb-6">From Insight to Identity.</h4>
              <p className="text-slate-400 text-lg leading-relaxed">
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
