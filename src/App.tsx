import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Works from './components/Works';
import Contact from './components/Contact';
import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import oceanLoop from './assets/ocean-loop.mp4';

export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <ReactLenis root>
      <main className="min-h-screen bg-[#050406] text-white font-sans selection:bg-white/20 relative">
        {/* Global Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover z-0"
        >
          <source src={oceanLoop} type="video/mp4" />
        </video>

        <motion.div
          className="pointer-events-none fixed inset-0 z-0 transition duration-300"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.05),
                transparent 80%
              )
            `,
          }}
        />
        <div className="relative z-10">
          <Header />
          <Hero />
          <Services />
          <Works />
          <Contact />
        </div>
      </main>
    </ReactLenis>
  );
}
