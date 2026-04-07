import React from 'react';

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-primary/20 bg-background pt-16 pb-12 px-6 overflow-hidden">
      {/* Footer Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(0,229,255,0.05)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 relative z-10">
        
        <div className="flex flex-col items-center gap-2">
            <span className="font-black tracking-[0.2em] uppercase text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">WarComm<span className="text-primary glow-pulse">_</span></span>
            <span className="text-xs text-secondary font-bold tracking-widest uppercase mb-4">System Operational</span>
        </div>

        <div className="text-gray-500 text-[10px] tracking-widest uppercase text-center">
          <span>&copy; {new Date().getFullYear()} Resilient Mesh Project. Designed for Hackathon 2026.</span>
        </div>

      </div>
    </footer>
  );
}
