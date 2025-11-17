import React from 'react'

export default function NoiseCard({ children, className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/60 backdrop-blur-xl shadow-[0_8px_40px_rgba(31,38,135,0.12)] ${className}`}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/></svg>\")' }} />
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/10" />
      <div className="relative">{children}</div>
    </div>
  )
}
