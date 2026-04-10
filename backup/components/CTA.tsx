"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative w-full py-48 px-6 bg-background overflow-hidden flex items-center justify-center perspective-[1000px]">
      
      {/* Cinematic Rotating Network Globe Backdrop */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none transform-style-3d">
          <motion.div 
             animate={{ rotateY: 360, rotateX: 360 }} 
             transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
             className="relative w-[600px] h-[600px] border-4 border-primary/10 border-dashed rounded-full shadow-[inset_0_0_50px_rgba(0,229,255,0.2)] flex items-center justify-center"
          >
             <div className="absolute w-[400px] h-[400px] border-2 border-secondary/20 rounded-full flex gap-10"></div>
          </motion.div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        >
            Bring Connectivity <br/>Back.
        </motion.h2>
        
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className="flex flex-col sm:flex-row justify-center gap-8 w-full max-w-3xl"
        >
           <a href="#demo" className="hologram-btn px-6 py-6 font-bold text-lg text-center flex-1">
               View Prototype
           </a>
           <a href="#technical" className="bg-transparent border-2 border-secondary text-white px-6 py-6 rounded-none font-bold text-lg hover:bg-secondary/20 transition-colors shadow-[0_0_15px_rgba(180,0,255,0.4)] uppercase tracking-widest text-center flex-1">
               Learn the Tech
           </a>
        </motion.div>
      </div>
    </section>
  );
}
