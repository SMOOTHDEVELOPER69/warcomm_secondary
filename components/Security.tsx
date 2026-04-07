"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Security() {
  const [activeTunnel, setActiveTunnel] = useState(false);

  return (
    <section id="security" className="relative w-full py-40 px-6 bg-[#030305] overflow-hidden perspective-[1000px]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
           Zero-Trust Encryption
        </h2>
        <p className="text-xl text-textMuted text-center max-w-3xl mx-auto mb-20 font-light">
           The most hostile environments demand the highest grade of security. Privacy by design, end-to-end, utilizing battle-tested algorithms like libsodium and NaCl.
        </p>

        {/* Interactive 3D Tunnel visual */}
        <div 
           className="relative w-full max-w-4xl aspect-[21/9] glass-panel rounded-3xl border border-secondary/20 shadow-neon flex items-center justify-center transform-style-3d cursor-pointer overflow-hidden group"
           onClick={() => setActiveTunnel(!activeTunnel)}
        >
           {/* Source Device */}
           <div className="absolute left-10 lg:left-20 w-16 h-24 bg-white/5 border border-secondary p-2 rounded-lg shadow-[0_0_15px_#b400ff] z-20 flex flex-col justify-end">
              <div className="w-full h-4 bg-secondary/50 rounded-sm"></div>
           </div>

           {/* Target Device */}
           <div className="absolute right-10 lg:right-20 w-16 h-24 bg-white/5 border border-primary p-2 rounded-lg shadow-[0_0_15px_#00e5ff] z-20 flex flex-col justify-end">
              <div className="w-full h-4 bg-primary/50 rounded-sm"></div>
           </div>

           {/* The Tunnel Pipeline */}
           <div className="absolute left-[30%] right-[30%] h-12 flex items-center justify-center z-10">
              {/* Core Data line */}
              <div className="w-full h-[2px] bg-slate-500 relative">
                 <motion.div 
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#fff]"
                 />
              </div>

              {/* Encrypted Shield / Tunnels toggle */}
              <motion.div 
                 initial={{ opacity: 0, scaleY: 0 }}
                 animate={{ opacity: activeTunnel ? 1 : 0, scaleY: activeTunnel ? 1 : 0 }}
                 className="absolute inset-0 border-t-2 border-b-2 border-secondary bg-secondary/10 shadow-[0_0_30px_rgba(180,0,255,0.4)] backdrop-blur-md rounded-full overflow-hidden"
              >
                  {/* Hexagon pattern inner shield */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTEwIDBMMjAgNWwwIDEwLTEwIDVMMCAxNSAwIDV6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTgwLDAsMjU1LDAuMikiLz48L3N2Zz4=')]"></div>
              </motion.div>
           </div>

           <div className="absolute bottom-6 bg-background/80 px-6 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-textMuted group-hover:text-white transition-colors">
              Click to Toggle X25519 Encryption Layer
           </div>
        </div>
      </div>
    </section>
  );
}
