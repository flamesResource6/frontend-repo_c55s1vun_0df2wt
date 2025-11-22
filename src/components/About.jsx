import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind',
    'Node.js',
    'FastAPI',
    'Postgres',
    'MongoDB',
    'Three.js',
    'Spline',
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          About
        </motion.h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-slate-200/85 text-lg"
          >
            I’m Alex, a multidisciplinary software engineer blending thoughtful product design with solid engineering.
            I obsess over details, from micro-interactions to database indices. I ship fast, test thoroughly, and keep things fun.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {skills.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200/85 text-sm">
                {s}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
