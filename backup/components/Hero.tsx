"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-background">
      
      {/* Immersive Space Network Environment */}
      <div className="absolute inset-0 z-0 pointer-events-none perspective-[1000px]">
         {/* 3D Grid Overlay */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [transform:rotateX(60deg)_translateY(-100px)_scale(2)] opacity-30"></div>
         
         {/* Glowing Mesh Nodes in Space */}
         <motion.div style={{ y: y1 }} className="absolute w-full h-full">
            <div className="absolute top-[20%] left-[20%] w-4 h-4 rounded-full glow-pulse"></div>
            <div className="absolute top-[60%] right-[30%] w-3 h-3 rounded-full glow-pulse !bg-secondary !shadow-[0_0_20px_4px_#b400ff] delay-700 animate-pulse"></div>
            <div className="absolute top-[80%] left-[40%] w-2 h-2 rounded-full glow-pulse animate-ping"></div>

            {/* Neon Connection Lines */}
            <div className="absolute top-[20%] left-[20%] w-[50%] h-[1px] bg-primary/50 shadow-[0_0_15px_#00e5ff] rotate-12 origin-left"></div>
            <div className="absolute top-[60%] right-[30%] w-[40%] h-[1px] bg-secondary/50 shadow-[0_0_15px_#b400ff] -rotate-[30deg] origin-right"></div>
         </motion.div>
         
         {/* Floating Holographic Device Representations */}
         <motion.div 
            style={{ y: y2 }}
            animate={{ rotateX: [20, 30, 20], rotateY: [-20, -10, -20] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] right-[10%] w-72 h-44 glass-panel rounded-2xl border border-primary/40 shadow-holographic hidden lg:flex flex-col justify-between p-4"
         >
            <div className="w-1/3 h-2 bg-primary/60 shadow-[0_0_10px_#00e5ff] rounded"></div>
            <div className="w-full h-24 border border-primary/20 bg-primary/5 rounded-lg flex items-center justify-center">
               <div className="w-8 h-8 rounded-full border-t-2 border-primary animate-spin"></div>
            </div>
         </motion.div>
      </div>

      {/* Hero Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center mt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-4 py-1.5 border border-secondary/40 bg-secondary/5 shadow-neon rounded-none uppercase tracking-widest text-xs font-bold text-secondary mb-8"
        >
          <span className="w-2 h-2 bg-secondary animate-pulse shadow-[0_0_8px_#b400ff]"></span>
          System Online
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] glitch-text"
          data-text="Stay Connected"
        >
          Stay Connected <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary filter drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]">
            When Networks Collapse.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 font-light tracking-wide leading-relaxed"
        >
          Decentralized communication for civilians in war zones, disaster areas, and internet shutdowns.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MagneticButton href="#demo" className="hologram-btn px-12 py-5 text-lg font-bold">
            Explore the Prototype
          </MagneticButton>
        </motion.div>
      </motion.div>
      
      {/* Lower Gradient mask */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}
