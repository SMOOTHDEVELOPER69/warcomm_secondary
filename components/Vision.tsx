"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <section id="vision" className="relative w-full py-40 px-6 bg-background overflow-hidden flex items-center justify-center">
      {/* 3D Massive Scale Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none perspective-[1200px] flex items-center justify-center">
          <motion.div 
             animate={{ rotateX: [60, 50, 60], rotateZ: [0, 10, 0] }}
             transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
             className="w-[150vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.05)_0%,transparent_60%),linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:100%_100%,50px_50px,50px_50px] transform-style-3d origin-center"
          >
              {/* Millions of nodes simulation (just a few glowing dots representing mass) */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMSIgZmlsbD0iIzAwZTVmZiIvPjwvc3ZnPg==')] opacity-50 mix-blend-screen animate-pulse"></div>
          </motion.div>
          <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-background to-transparent z-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
         <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-white mb-8 drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]"
         >
            Infinite Scalability
         </motion.h2>
         <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 font-light leading-relaxed mb-12 shadow-black drop-shadow-md"
         >
            WarComm is not limited by physical infrastructure. The network mathematically strengthens as more nodes join. Our vision is an inter-country mesh grid, completely decentralized, powering millions of discrete connections per second.
         </motion.p>
      </div>
    </section>
  );
}
