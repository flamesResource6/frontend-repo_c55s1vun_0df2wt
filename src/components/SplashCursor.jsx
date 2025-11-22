import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Lightweight splash cursor: spawns fading circles at the pointer position
export default function SplashCursor() {
  const [splashes, setSplashes] = useState([])
  const lastSpawn = useRef(0)

  useEffect(() => {
    function onMove(e) {
      const now = Date.now()
      if (now - lastSpawn.current < 50) return // throttle
      lastSpawn.current = now
      const x = e.clientX
      const y = e.clientY
      const id = Math.random().toString(36).slice(2)
      setSplashes((prev) => [...prev, { id, x, y, size: 24 }])
      // auto cleanup
      setTimeout(() => {
        setSplashes((prev) => prev.filter((s) => s.id !== id))
      }, 450)
    }

    function onClick(e) {
      const x = e.clientX
      const y = e.clientY
      const id = Math.random().toString(36).slice(2)
      setSplashes((prev) => [...prev, { id, x, y, size: 80 }])
      setTimeout(() => {
        setSplashes((prev) => prev.filter((s) => s.id !== id))
      }, 650)
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]" aria-hidden>
      <AnimatePresence>
        {splashes.map((s) => (
          <motion.span
            key={s.id}
            initial={{ opacity: 0.35, scale: 0.4 }}
            animate={{ opacity: 0, scale: 1.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: s.size > 40 ? 0.6 : 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute rounded-full"
            style={{
              left: s.x - s.size / 2,
              top: s.y - s.size / 2,
              width: s.size,
              height: s.size,
              boxShadow:
                '0 0 0 2px rgba(255,255,255,0.25), 0 0 40px rgba(59,130,246,0.25), inset 0 0 20px rgba(255,255,255,0.15)'
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
