"use client";
import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { phase: "Phase 1: Inception", date: "Friday 6 PM", desc: "Identified critical vulnerability in centralized comms during crises." },
  { phase: "Phase 2: Protocol Design", date: "Saturday 2 AM", desc: "Engineered Vector Routing algorithm to bypass failing nodes." },
  { phase: "Phase 3: Prototype", date: "Saturday 3 PM", desc: "First successful multi-hop message transmitted via BLE between 3 devices." },
  { phase: "Phase 4: Optimization", date: "Sunday 4 AM", desc: "Integrated X25519 Encryption and completed the interactive web dashboard." },
  { phase: "Phase 5: Deployment", date: "Sunday 10 AM", desc: "Final codebase merged. WarComm goes live." }
];

export default function Timeline() {
  return (
    <section id="timeline" className="w-full py-40 px-6 bg-[#020202] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
           Hackathon Journey
        </h2>
        <p className="text-xl text-primary text-center max-w-2xl mx-auto mb-20 font-bold tracking-[0.2em] uppercase">
           48 Hours of Code
        </p>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-1/2 md:translate-x-[50%] flex flex-col gap-12">
           {timeline.map((item, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-10 md:w-[450px]"
             >
                {/* Node dot */}
                <div className="absolute top-0 -left-[9px] w-4 h-4 bg-background border-2 border-primary rounded-full shadow-[0_0_15px_#00e5ff] z-10"></div>
                
                {/* Neon connecting path line to the card */}
                <div className="absolute top-2 left-0 w-10 h-[1px] bg-primary/30"></div>

                <div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors shadow-holographic relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   
                   <p className="text-xs font-bold text-secondary tracking-widest uppercase mb-2">
                       {item.date}
                   </p>
                   <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">
                       {item.phase}
                   </h3>
                   <p className="text-gray-400 font-light leading-relaxed">
                       {item.desc}
                   </p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
