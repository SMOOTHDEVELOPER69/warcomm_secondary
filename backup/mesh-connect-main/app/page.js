export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-[#030305] text-white flex flex-col items-center justify-center text-center px-6 relative overflow-hidden font-sans">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.05)_0%,transparent_60%)] pointer-events-none"></div>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]">
        WarComm
      </h1>

      {/* Tagline */}
      <p className="text-gray-300 max-w-xl mb-8 font-light leading-relaxed text-lg z-10">
        A decentralized peer-to-peer communication grid.
        Payloads seamlessly tunnel through localized devices.
      </p>
      
      <p className="text-secondary tracking-widest text-xs font-bold uppercase mb-10 border border-secondary/30 px-4 py-2 rounded shadow-[0_0_15px_rgba(180,0,255,0.2)] bg-secondary/10 z-10 animate-pulse">
        System Designed for Zero-Trust Environments
      </p>

      {/* Highlight Points */}
      <div className="flex flex-col md:flex-row gap-6 text-xs text-primary font-bold tracking-widest uppercase mb-12 z-10">
        <p className="bg-primary/5 border border-primary/20 px-4 py-3 shadow-[0_0_10px_rgba(0,229,255,0.1)]">
           Vector Routing
        </p>
        <p className="bg-primary/5 border border-primary/20 px-4 py-3 shadow-[0_0_10px_rgba(0,229,255,0.1)]">
           X25519 Encryption
        </p>
        <p className="bg-primary/5 border border-primary/20 px-4 py-3 shadow-[0_0_10px_rgba(0,229,255,0.1)]">
           Off-grid Sync
        </p>
      </div>

      {/* CTA Button */}
      <a
        href="/chat"
        className="px-10 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-black font-black uppercase tracking-widest text-lg shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_50px_rgba(0,229,255,0.8)] transition-all z-10 rounded-none bg-background/50 backdrop-blur-sm relative overflow-hidden group"
      >
        <span className="relative z-10">Initialize App</span>
      </a>

    </div>
  );
}