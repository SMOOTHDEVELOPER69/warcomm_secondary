"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Demo() {
  return (
    <section id="demo" className="w-full py-40 px-6 bg-[#000000] overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9IiMwMDAwMDAiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzMzMyIvPgo8L3N2Zz4=')] opacity-50"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
           Live Message Flow
        </h2>
        <p className="text-xl text-primary font-bold tracking-widest uppercase mb-16 shadow-[0_0_10px_#00e5ff] py-2 px-6 bg-primary/10 border border-primary/30 rounded-full inline-block">
          Interactive Simulation Ready
        </p>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative w-full aspect-video glass-panel rounded-2xl border-2 border-primary/30 shadow-holographic overflow-hidden group cursor-pointer flex flex-col justify-center items-center"
        >
           {/* Cyberpunk Scanner Line */}
           <motion.div 
             animate={{ top: ["0%", "100%", "0%"] }} 
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             className="absolute w-full h-[2px] bg-primary shadow-[0_0_20px_4px_#00e5ff] z-20"
           ></motion.div>

           <div className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-background/40">
              <a 
                href="https://mesh-connect-4z15.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hologram-btn px-12 py-6 text-xl font-black"
              >
                  Initialize Canvas Prototype
              </a>
           </div>

        </motion.div>
      </div>
    </section>
  );
}
