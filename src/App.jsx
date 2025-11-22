import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      {/* Ambient background gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.2),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_60%)] blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
