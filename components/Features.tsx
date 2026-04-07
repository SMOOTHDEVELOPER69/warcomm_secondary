"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Share2, HardDriveDownload, Satellite, Lock } from 'lucide-react';

const featureList = [
  {
    icon: <Share2 size={24} />,
    title: "Multi-Hop Mesh Relay",
    desc: "Seamlessly routes messages device-to-device automatically to find the fastest path.",
  },
  {
    icon: <HardDriveDownload size={24} />,
    title: "Store & Forward",
    desc: "Offline receivers? Devices securely store packets locally until the recipient comes into network range.",
  },
  {
    icon: <Satellite size={24} />,
    title: "Gateway Bridging",
    desc: "If any single node finds an internet signal, it becomes an 'exit node', syncing the mesh globally.",
  },
  {
    icon: <Lock size={24} />,
    title: "Military-Grade E2E",
    desc: "Nobody, not even relay nodes, can read the data. Complete end-to-end encryption for every packet.",
  }
];

export default function Features() {
  return (
    <section id="features" className="w-full py-24 px-6 bg-surface/50 border-y border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Core Technology</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A software-defined network stack that operates entirely P2P.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureList.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
