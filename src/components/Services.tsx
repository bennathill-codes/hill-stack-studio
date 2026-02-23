import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { Code2, Layout, Zap } from 'lucide-react';
import React, { MouseEvent } from 'react';

const services = [
  {
    title: 'Frontend Engineering',
    description: 'Architecting scalable, performant, and accessible web applications using modern React ecosystems.',
    icon: Code2,
    colSpan: 'md:col-span-2',
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive, cinematic interfaces that bridge the gap between aesthetics and functionality.',
    icon: Layout,
    colSpan: 'md:col-span-1',
  },
  {
    title: 'Performance Optimization',
    description: 'Fine-tuning the digital experience. Eradicating jank, optimizing bundles, and achieving 100 Lighthouse scores.',
    icon: Zap,
    colSpan: 'md:col-span-3',
  },
];

const ServiceCard: React.FC<{ service: typeof services[0] }> = ({ service }) => {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-3xl glass overflow-hidden ${service.colSpan}`}
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
      <div className="relative p-8 md:p-12 h-full flex flex-col justify-between z-10">
        <div className="mb-12">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#00ffcc]/30 transition-colors duration-500">
            <service.icon className="w-6 h-6 text-[#00ffcc]" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-white tracking-tight">{service.title}</h3>
          <p className="text-slate-400 leading-relaxed max-w-md">{service.description}</p>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent mt-auto" />
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">The Immersion.</h2>
          <p className="text-slate-400 text-lg max-w-xl">Elevating digital products through engineering excellence and obsessive attention to detail.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
