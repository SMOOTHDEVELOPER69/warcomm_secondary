"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const benefits = [
  { title: "Stay Connected in Crises", desc: "No central towers? Direct device-to-device tunneling ensures communication never drops." },
  { title: "Decentralized Resilience", desc: "Auto-healing Flood Routing and Delay-Tolerant Networking (DTN) algorithms bypass offline nodes in milliseconds." },
  { title: "Military-Grade Encryption", desc: "X25519 elliptic curve keys lock payloads before packets leave your hardware." },
  { title: "Community Infrastructure", desc: "The software-defined grid gets faster and more redundant with every new user." }
];

export default function Benefits() {
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, -10]);

  return (
    <section id="benefits" className="w-full py-40 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-24 drop-shadow-[0_0_10px_rgba(180,0,255,0.4)]">
           Tactical Advantages
        </h2>

        <motion.div 
           style={{ rotateX }}
           className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full transform-style-3d perspective-[1200px]"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateY: i % 2 === 0 ? 10 : -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                 scale: 1.05, 
                 rotateY: i % 2 === 0 ? -5 : 5,
                 boxShadow: "0 0 30px rgba(0,229,255,0.4), inset 0 0 20px rgba(0,229,255,0.2)" 
              }}
              className="relative glass-panel p-10 rounded-2xl border border-primary/20 shadow-holographic cursor-default"
            >
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary/50 rounded-br-2xl"></div>
              
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 text-primary">{b.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
