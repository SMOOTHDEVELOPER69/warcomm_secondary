"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const teamMembers = [
  { name: "ARHAM KHAN", role: "WEBSITE DESIGNER", github: "https://github.com/SMOOTHDEVELOPER69", bio: "Led the core UI architecture, defining the cinematic, high-performance holographic visual language used across the application." },
  { name: "PRANJAL KUMAR", role: "P2P Systems Engineer", github: "https://github.com/", bio: "Architected the low-level device discovery protocols and Bluetooth Low Energy handshakes for the mesh framework." },
  { name: "NIHAL KUMAR", role: "Backend Architect", github: "https://github.com/nihal-kumar01", bio: "Developed the Gateway Node mechanics, ensuring packets securely bridge from the mesh local-net out to the global internet." },
  { name: "GAURAV BANSAL", role: "Cryptography Lead", github: "https://github.com/", bio: "Implemented end-to-end X25519 elliptic curve encryption so data cannot be intercepted by hostile relay nodes." }
];

export default function Team() {
  return (
    <section id="team" className="relative w-full py-32 px-6 bg-surface border-t border-primary/10 overflow-hidden">
      
      {/* Cinematic Background effect */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(180,0,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white mb-2 pb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] text-center border-b border-primary/20">
            The Hackers Behind ResilienceNet
        </h2>
        <p className="text-secondary tracking-[0.2em] uppercase text-sm mb-20 drop-shadow-[0_0_10px_#b400ff]">
            Decentralized Engineering Team
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full perspective-[1000px]">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="glass-panel p-8 rounded-xl flex flex-col items-center text-center shadow-holographic border border-white/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-24 h-24 rounded-full bg-background border-2 border-primary/40 shadow-[inset_0_0_20px_rgba(0,229,255,0.2)] flex items-center justify-center mb-6 overflow-hidden relative">
                 <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/30 transition-colors"></div>
                 <span className="text-3xl font-black text-white mix-blend-overlay">{member.name.charAt(0)}</span>
              </div>
              
              <h3 className="text-xl font-bold tracking-wider mb-2 text-white">{member.name}</h3>
              <p className="text-sm text-textMuted uppercase tracking-widest min-h-[40px] flex items-center justify-center">{member.role}</p>
              
              {/* Expandable Bio on Hover */}
              <div className="overflow-hidden h-0 group-hover:h-24 transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center mt-2">
                 <p className="text-xs text-justify text-gray-300 font-light leading-relaxed">
                    {member.bio}
                 </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 w-full flex justify-center">
                 <a 
                   href={member.github} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors text-sm hover:drop-shadow-[0_0_10px_#00e5ff]"
                 >
                    <Github size={18} /> @github
                 </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
