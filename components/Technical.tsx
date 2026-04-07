"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Technical() {
  return (
    <section id="technical" className="w-full py-40 px-6 bg-background overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary opacity-10 blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-24 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
           Network Architecture
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
           {/* Column 1 */}
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass-panel border border-primary/20 p-8 flex flex-col gap-8 rounded-xl shadow-holographic"
           >
              <div className="border-b border-primary/20 pb-4">
                 <h3 className="text-secondary font-bold uppercase text-xs tracking-[0.2em] mb-2">Mesh Network Layer</h3>
                 <h4 className="text-2xl font-bold text-white">Peer Discovery</h4>
                 <p className="text-textMuted mt-4 text-sm leading-relaxed">
                   When initializing, nodes send high-frequency broadcast chirps to negotiate keys without a centralized certificate authority.
                 </p>
              </div>
              <div>
                 <h3 className="text-primary font-bold uppercase text-xs tracking-[0.2em] mb-2">Opportunistic Networking</h3>
                 <h4 className="text-2xl font-bold text-white">Store & Forward</h4>
                 <p className="text-textMuted mt-4 text-sm leading-relaxed">
                   Orphaned target? Packets map to the closest geographic node buffer until the destination enters uplink range.
                 </p>
              </div>
           </motion.div>

           {/* Column 2 - Central Display */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="border border-white/10 rounded-xl bg-surface/50 p-6 flex items-center justify-center relative min-h-[400px] overflow-hidden"
           >
              {/* Virtual Server Pillar */}
              <div className="w-24 h-64 bg-background border-x border-t border-primary/40 shadow-neon relative flex flex-col items-center justify-evenly">
                 <div className="w-full h-[2px] bg-primary/40"></div>
                 <div className="w-full h-[2px] bg-primary/40"></div>
                 <div className="w-full h-[2px] bg-primary/40"></div>
                 
                 {/* Data transfer animation */}
                 <motion.div 
                   animate={{ y: ["-100%", "400%"] }} 
                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                   className="absolute w-full h-8 bg-gradient-to-b from-transparent via-primary/50 to-transparent"
                 ></motion.div>
              </div>
           </motion.div>
           
           {/* Column 3 */}
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass-panel border border-secondary/20 p-8 flex flex-col gap-8 rounded-xl shadow-[0_0_20px_rgba(180,0,255,0.2)]"
           >
              <div className="border-b border-secondary/20 pb-4">
                 <h3 className="text-primary font-bold uppercase text-xs tracking-[0.2em] mb-2">Bridge Protocol</h3>
                 <h4 className="text-2xl font-bold text-white">Gateway Node</h4>
                 <p className="text-textMuted mt-4 text-sm leading-relaxed">
                   Any node with an active WAN connection instantly elevates to a tier-1 Gateway, opening a pipeline for all local nodes.
                 </p>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
