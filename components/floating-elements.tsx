"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Elementos flutuantes decorativos */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-rose-300/30 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-pink-300/30 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-rose-400/30 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-pink-400/30 rounded-full animate-float-slow"></div>

      {/* Formas geométricas */}
      <div className="absolute top-60 left-1/4 w-8 h-8 border border-rose-300/20 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-60 right-1/4 w-6 h-6 border border-pink-300/20 rounded-full animate-pulse-slow"></div>
    </div>
  )
}
