import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_50%_100%,rgba(59,130,246,0.08),transparent_60%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Let’s build something great
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input placeholder="Name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/60" />
            <input placeholder="Email" type="email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/60" />
          </div>
          <input placeholder="Subject" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/60" />
          <textarea placeholder="Tell me about your project" rows={5} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/60" />
          <div className="flex items-center justify-between gap-4">
            <p className="text-slate-200/70 text-sm">I usually reply within 24 hours.</p>
            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-fuchsia-500 text-white font-medium shadow-[0_10px_50px_-12px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 transition">
              Send Message
            </button>
          </div>
        </motion.form>

        <p className="mt-6 text-center text-slate-400 text-sm">© {new Date().getFullYear()} Alex Dev. All rights reserved.</p>
      </div>
    </section>
  );
}
