"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Impact() {
  return (
    <section className="w-full max-w-5xl mx-auto py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative p-12 rounded-3xl border border-primary/30 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">Built for Resilience.</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Our mission is to put the power of connectivity back into the hands of civilians, 
            aid workers, and journalists on the ground. We are building the foundational infrastructure 
            for an uncensorable, un-shutdown-able future.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-left">
             <div>
                <h4 className="font-bold text-2xl text-primary mb-1">0</h4>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Towers Needed</p>
             </div>
             <div className="h-10 w-px bg-white/10 hidden md:block"></div>
             <div>
                <h4 className="font-bold text-2xl text-secondary mb-1">100%</h4>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Encrypted</p>
             </div>
             <div className="h-10 w-px bg-white/10 hidden md:block"></div>
             <div>
                <h4 className="font-bold text-2xl text-white mb-1">Infinite</h4>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Scaleability</p>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
