"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section id="problem" className="w-full max-w-6xl mx-auto py-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      
      {/* Problem */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-10 rounded-2xl border-l-4 border-l-accent"
      >
        <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center mb-6">
          <Globe size={32} />
        </div>
        <h2 className="text-3xl font-bold mb-4">The Problem</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Internet shutdowns, natural disasters, and infrastructure failures instantly strip communities of their most vital resource: coordination. 
          When centralized cell towers go down, millions are left dangerously disconnected.
        </p>
      </motion.div>

      {/* Solution */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-10 rounded-2xl border-l-4 border-l-primary"
      >
        <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
          <Smartphone size={32} />
        </div>
        <h2 className="text-3xl font-bold mb-4">The Solution</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          We turn the devices already in your pocket into a self-healing mesh. By chaining smartphones via Bluetooth and Wi-Fi Direct, messages autonomously hop from device to device. No towers needed.
        </p>
      </motion.div>

    </section>
  );
}
