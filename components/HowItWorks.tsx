"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HowItWorks() {
  const { scrollYProgress } = useScroll();
  const yTranslate = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section id="how-it-works" className="relative w-full py-40 px-6 bg-background overflow-hidden perspective-[1000px]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.05)_0%,transparent_100%)]"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center z-10 relative">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-10 text-center drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Multi-Hop Communication
        </h2>
        <p className="text-xl text-center text-textMuted max-w-3xl mb-16 font-light">
           In a regular network, you communicate via a centralized cell tower. In ResilienceNet, messages hop across devices: <strong>Phone A → Phone B → Phone C → Phone D</strong>.
        </p>

        {/* Cinematic Path Visualizer */}
        <div className="relative w-full h-[600px] flex items-center justify-center transform-style-3d rotate-x-[45deg] scale-110 mb-20">
            {/* The Main Hub */}
            <div className="absolute inset-0 bg-transparent flex justify-center items-center">
                {/* Orbital Rings */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[400px] h-[400px] border border-primary/30 rounded-full"></motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[600px] h-[600px] border border-secondary/20 rounded-full border-dashed"></motion.div>
                
                {/* Core Network Nodes */}
                <div className="absolute w-20 h-20 bg-background border-2 border-primary shadow-holographic rounded-full flex items-center justify-center z-20">
                    <div className="w-10 h-10 bg-primary/20 rounded-full animate-ping"></div>
                </div>

                {/* Sub Node 1 */}
                <div className="absolute -top-10 left-1/4 w-12 h-12 bg-background border border-secondary shadow-neon rounded-full flex items-center justify-center">
                    <span className="text-xs text-secondary tracking-widest font-bold">A</span>
                </div>

                {/* Sub Node 2 */}
                <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-background border border-primary shadow-holographic rounded-full flex items-center justify-center">
                    <span className="text-xs text-primary tracking-widest font-bold">B</span>
                </div>

                {/* Dynamic Connection Beams */}
                <div className="absolute top-[20%] left-[30%] w-[25%] h-1 bg-gradient-to-r from-secondary to-primary rotate-[30deg] shadow-[0_0_15px_#00e5ff]"></div>
                <div className="absolute bottom-[20%] right-[30%] w-[35%] h-1 bg-gradient-to-r from-primary to-transparent -rotate-[15deg] shadow-[0_0_15px_#00e5ff]"></div>
            </div>
        </div>

        <div className="mt-10 max-w-4xl opacity-80 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-6 border-l-2 border-primary rounded-xl">
               <h3 className="text-lg font-bold text-white mb-2 uppercase">1. Message Stored</h3>
               <p className="text-sm text-textMuted leading-relaxed">The user sends a message. It is stored locally waiting for a nearby peer using Opportunistic Networking (DTN).</p>
            </div>
            <div className="glass-panel p-6 border-l-2 border-secondary rounded-xl">
               <h3 className="text-lg font-bold text-white mb-2 uppercase">2. Message Relayed</h3>
               <p className="text-sm text-textMuted leading-relaxed">The device encounters another node briefly. It forwards the message via Bluetooth or Wi-Fi Direct automatically.</p>
            </div>
            <div className="glass-panel p-6 border-l-2 border-white rounded-xl">
               <h3 className="text-lg font-bold text-white mb-2 uppercase">3. Gateway Reached</h3>
               <p className="text-sm text-textMuted leading-relaxed">The relayed message eventually reaches a Gateway Node with global internet access and is broadcast to the world.</p>
            </div>
        </div>
      </div>
    </section>
  );
}
