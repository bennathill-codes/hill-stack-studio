import { motion } from 'motion/react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-20 pt-32 pb-12 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-[10vw] md:text-[5vw] font-bold tracking-tighter mb-[6vw] md:mb-[2vw] text-gradient">
            Define your digital presence.
          </h2>
          <p className="text-[5vw] md:text-[1.5vw] text-white/60 font-light">
            Let's build your competitive edge.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-12 max-w-2xl mx-auto mb-32"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative group">
            <input
              type="text"
              id="name"
              required
              className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
              placeholder="Your Name"
            />
            <label htmlFor="name" className="absolute left-0 top-4 text-white/50 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white peer-valid:-top-6 peer-valid:text-sm peer-valid:text-white/70 cursor-text">
              What's your name?
            </label>
          </div>

          <div className="relative group">
            <input
              type="email"
              id="email"
              required
              className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
              placeholder="Your Email"
            />
            <label htmlFor="email" className="absolute left-0 top-4 text-white/50 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white peer-valid:-top-6 peer-valid:text-sm peer-valid:text-white/70 cursor-text">
              What's your email?
            </label>
          </div>

          <div className="relative group">
            <textarea
              id="message"
              required
              rows={3}
              className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent resize-none"
              placeholder="Your Message"
            />
            <label htmlFor="message" className="absolute left-0 top-4 text-white/50 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white peer-valid:-top-6 peer-valid:text-sm peer-valid:text-white/70 cursor-text">
              Tell me about your project
            </label>
          </div>

          <button className="self-start relative overflow-hidden group px-8 py-4 rounded-full glass border border-white/20 hover:border-white/50 transition-colors duration-300">
            <span className="relative z-10 font-medium tracking-wide">Send Message</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </button>
        </motion.form>

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-[8vw] md:pt-[2vw] border-t border-white/10 text-[3vw] md:text-[1vw] text-white/50">
          <p>© {new Date().getFullYear()} Hill Stack Studio. Engineered by Benjamin Hill.</p>
          <div className="flex items-center gap-[6vw] md:gap-[1.5vw] mt-[4vw] md:mt-0">
            <a href="#" className="hover:text-white transition-colors"><Github className="w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw]" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw]" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw]" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
