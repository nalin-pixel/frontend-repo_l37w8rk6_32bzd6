import React from 'react'

/*
  AnimatedBackground
  - Creates an immersive, dynamic backdrop using layered gradients and floating blobs
  - Runs behind the entire page (position: fixed)
*/
export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(56,189,248,0.25)_0%,rgba(56,189,248,0)_60%),radial-gradient(50%_50%_at_20%_80%,rgba(168,85,247,0.25)_0%,rgba(168,85,247,0)_60%),radial-gradient(40%_40%_at_80%_30%,rgba(99,102,241,0.25)_0%,rgba(99,102,241,0)_60%)]" />

      {/* Aurora ribbons */}
      <div className="absolute -top-24 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rotate-12 opacity-40 blur-3xl will-change-transform animate-aurora-slow bg-[conic-gradient(from_180deg_at_50%_50%,#60a5fa_0deg,#a78bfa_120deg,#34d399_240deg,#60a5fa_360deg)]" />

      {/* Floating glassy blobs */}
      <div className="absolute inset-0">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Subtle grid for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px] mix-blend-overlay" />
    </div>
  )
}
