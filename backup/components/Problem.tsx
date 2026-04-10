"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Problem() {
  return (
    <section id="problem" className="relative w-full py-40 px-6 bg-background overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Side: Dramatic Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            A Disconnected World.
          </h2>
          <div className="w-16 h-1 bg-red-500 mb-8 shadow-[0_0_15px_#ef4444]"></div>
          <p className="text-2xl text-gray-400 font-light leading-relaxed">
            During conflicts or massive natural disasters, centralized internet and cellular networks fail instantly. 
            <br/><br/>
            This leaves civilians dangerously cut off from the rest of the world.
          </p>
        </motion.div>

        {/* Right Side: Shattering Network Visual */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative h-[500px] w-full glass-panel rounded-none border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)] flex items-center justify-center overflow-hidden perspective-[800px]"
        >
          {/* Ambient red failure glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.1)_0%,transparent_70%)]"></div>
          
          <div className="relative w-full h-full transform-style-3d rotate-x-12 rotate-y-[-10deg]">
            {/* Pulsing Nodes that suddenly "die" */}
            <motion.div 
               animate={{ opacity: [1, 1, 0, 0, 1] }} 
               transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.45, 0.9, 1] }}
               className="absolute top-[30%] left-[30%] w-4 h-4 bg-primary shadow-[0_0_15px_#00e5ff] rounded-full"
            />
            <motion.div 
               animate={{ opacity: [1, 1, 0, 0, 1], scale: [1, 1, 1.5, 0, 1] }} 
               transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.45, 0.9, 1] }}
               className="absolute top-[60%] left-[60%] w-6 h-6 bg-red-500 shadow-[0_0_20px_#ef4444] rounded-full"
            />
            
            {/* Breaking Connection Line */}
            <motion.div 
               animate={{ opacity: [1, 1, 0, 0, 1], width: ["40%", "40%", "42%", "0%", "40%"], rotate: [45, 45, 47, 45, 45] }}
               transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.45, 0.9, 1] }}
               className="absolute top-[30%] left-[30%] h-1 bg-gradient-to-r from-primary to-red-500 shadow-[0_0_15px_#00e5ff] origin-left"
            ></motion.div>
            
            {/* Warning Text Overlay */}
            <motion.div 
               animate={{ opacity: [0, 0, 1, 1, 0] }}
               transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.45, 0.9, 1] }}
               className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
               <h3 className="text-red-500 text-6xl font-black uppercase tracking-[0.2em] transform rotate-[-15deg] opacity-40">System Failure</h3>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
