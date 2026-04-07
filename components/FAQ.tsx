"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Shield } from 'lucide-react';

const faqs = [
  { id: 1, icon: <Terminal size={24}/>, q: "How does peer-to-peer mesh work?", a: "Devices act as both clients and routers. When a packet is transmitted, it bounces between nearby smartphones using BLE and Wi-Fi Direct until it finds the optimal path to the recipient." },
  { id: 2, icon: <Database size={24}/>, q: "What is device discovery?", a: "A background protocol that constantly listens for WarComm handshakes. It creates dynamic routing tables without needing a central server or IP address architecture." },
  { id: 3, icon: <Shield size={24}/>, q: "How do Gateways function?", a: "If any node in the mesh achieves internet access (via Starlink, cellular, or Wi-Fi), it broadcasts a 'Gateway' status. The mesh then funnels long-distance encrypted packets through that node." }
];

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full py-40 px-6 bg-surface overflow-hidden border-t border-primary/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
           Tech Deep Dive
        </h2>
        <p className="text-xl text-textMuted text-center max-w-2xl mx-auto mb-20 font-light tracking-wide">
           Click to decrypt system protocols
        </p>

        <div className="flex flex-col gap-6">
           {faqs.map((faq) => (
              <motion.div 
                 key={faq.id}
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                 className="glass-panel p-6 rounded-xl border border-white/5 cursor-pointer hover:border-primary/50 hover:shadow-holographic transition-all duration-300 group"
              >
                 <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-background border border-primary/30 rounded-lg flex items-center justify-center text-primary shadow-[inset_0_0_15px_rgba(0,229,255,0.2)] group-hover:bg-primary/10 transition-colors">
                       {faq.icon}
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-wider text-white flex-1">{faq.q}</h3>
                    
                    <div className="w-8 h-8 flex items-center justify-center text-textMuted group-hover:text-primary transition-colors">
                       {activeFaq === faq.id ? '−' : '+'}
                    </div>
                 </div>

                 <AnimatePresence>
                    {activeFaq === faq.id && (
                       <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                       >
                          <div className="pl-20 pr-12 pt-6 pb-2 text-gray-400 leading-relaxed font-light border-t border-white/5 mt-6">
                             {faq.a}
                          </div>
                       </motion.div>
                    )}
                 </AnimatePresence>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
