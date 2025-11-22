import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat Platform',
    desc: 'WebSockets, auth, file sharing, emoji reactions, and blazing-fast UX.',
    tags: ['Next.js', 'Socket.io', 'Redis'],
    url: 'https://example.com',
  },
  {
    title: 'AI-Powered Dashboard',
    desc: 'LLM-assisted insights, streaming charts, and fine-grained permissions.',
    tags: ['React', 'FastAPI', 'Postgres'],
    url: 'https://example.com',
  },
  {
    title: '3D Product Configurator',
    desc: 'Interactive 3D scenes, parametric models, and AR previews.',
    tags: ['Three.js', 'Spline', 'Vercel'],
    url: 'https://example.com',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_20%_20%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(700px_circle_at_80%_30%,rgba(236,72,153,0.06),transparent_45%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Selected Work
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 hover:bg-white/10 backdrop-blur-sm"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-400/20 to-fuchsia-500/20 blur-2xl group-hover:scale-125 transition" />
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <ExternalLink className="text-white/70" size={18} />
              </div>
              <p className="mt-2 text-slate-200/80 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs text-slate-200/80 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
