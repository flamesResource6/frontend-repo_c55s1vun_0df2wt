import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Floating keyboard effect (subtle parallax) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-44 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200/80 backdrop-blur">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
            Available for freelance work
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl font-bold tracking-tight text-white">
            Software Engineer crafting playful, interactive experiences
          </h1>
          <p className="mt-5 text-slate-200/80 text-lg">
            I build immersive frontends, performant backends, and delightful micro-interactions.
            Let’s turn ambitious ideas into polished, production-grade products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="group px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 transition">
              <span className="relative inline-block">
                View Work
                <span className="absolute inset-0 rounded-lg bg-slate-900/5 opacity-0 group-hover:opacity-100 transition"></span>
              </span>
            </a>
            <a href="#contact" className="group px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-fuchsia-500 text-white font-medium shadow-[0_10px_50px_-12px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 transition">
              <span className="relative inline-block">
                Get in Touch
                <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
