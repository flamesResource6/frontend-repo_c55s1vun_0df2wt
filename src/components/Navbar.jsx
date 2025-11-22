import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 backdrop-blur-xl bg-slate-900/50 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between shadow-[0_0_40px_rgba(59,130,246,0.15)]"
        >
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-fuchsia-500 shadow-lg" />
            <span className="font-semibold tracking-tight text-white">Alex Dev</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-200/80 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="h-6 w-px bg-white/10" />
            <div className="flex items-center gap-3">
              <a href="mailto:alex@example.com" aria-label="Email" className="text-slate-200/80 hover:text-white">
                <Mail size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-200/80 hover:text-white">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-200/80 hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden text-white/90">
            <Menu />
          </button>
        </motion.nav>
        {/* Mobile */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-3 md:hidden"
          >
            <div className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-200/90 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
