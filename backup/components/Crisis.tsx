"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const scenarios = [
  { id: 'earthquake', name: 'Earthquake', desc: 'Cell towers physically destroyed. The mesh falls back to BLE hopping across surviving devices.', 
    color: '#00e5ff', deadNodes: [2, 5, 8], activePath: "M 20% 50% L 30% 20% L 70% 30% L 80% 60%" },
  { id: 'warzone', name: 'War Zone', desc: 'Active jamming isolates regions. The algorithm encrypts payloads and waits silently in buffer until a safe corridor opens.', 
    color: '#ef4444', deadNodes: [1, 4, 7], activePath: "M 20% 50% L 50% 80% L 80% 60%" },
  { id: 'shutdown', name: 'Internet Shutdown', desc: 'Government cuts WAN access. The internal mesh remains fully operational for civil coordination.', 
    color: '#b400ff', deadNodes: [0, 9], activePath: "M 20% 50% L 40% 50% L 60% 50% L 80% 60%" }
];

export default function Crisis() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0]);

  return (
    <section id="crisis" className="relative w-full py-40 px-6 bg-[#020202] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left Side: Scenario Selection */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6 z-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
             Crisis Simulator
          </h2>
          <p className="text-gray-400 font-light mb-8">
             Select a disaster scenario to observe autonomous network self-healing and vector-rerouting in real time.
          </p>

          {scenarios.map(scen => (
            <button 
              key={scen.id}
              onClick={() => setActiveScenario(scen)}
              className={`w-full text-left p-6 glass-panel rounded-xl border transition-all duration-300 ${
                activeScenario.id === scen.id 
                ? 'border-primary shadow-holographic bg-primary/10' 
                : 'border-white/10 hover:border-white/30 hover:bg-white/5'
              }`}
            >
              <h3 className="text-2xl font-bold uppercase tracking-widest text-white mb-2">{scen.name}</h3>
              <AnimatePresence>
                 {activeScenario.id === scen.id && (
                    <motion.div 
                       initial={{ opacity: 0, height: 0 }}
                       animate={{ opacity: 1, height: 'auto' }}
                       exit={{ opacity: 0, height: 0 }}
                       className="text-sm text-gray-300 font-light leading-relaxed overflow-hidden"
                    >
                       <div className="pt-2">{scen.desc}</div>
                    </motion.div>
                 )}
              </AnimatePresence>
            </button>
          ))}
        </div>

        {/* Right Side: Virtual Render Environment */}
        <div className="w-full lg:w-2/3 aspect-square max-w-[600px] glass-panel rounded-full border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative flex items-center justify-center overflow-hidden transform-style-3d perspective-[1000px]">
           {/* Grid Base */}
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] rotate-x-[45deg] scale-150"></div>
           
           <motion.div 
             key={activeScenario.id}
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             className="relative w-full h-full"
           >
              {/* Dynamic Connecting Path */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                 <path 
                   d={activeScenario.activePath} 
                   fill="none" 
                   stroke={activeScenario.color} 
                   strokeWidth="3" 
                   strokeLinecap="round"
                   strokeDasharray="10,15"
                   className={`animate-[dash_2s_linear_infinite] drop-shadow-[0_0_10px_${activeScenario.color}]`}
                 />
              </svg>

              {/* Render Network Nodes */}
              {[...Array(10)].map((_, i) => {
                 const isDead = activeScenario.deadNodes.includes(i);
                 const x = (i % 3) * 30 + 20;
                 const y = Math.floor(i / 3) * 30 + 20;
                 
                 return (
                   <motion.div 
                     key={i}
                     initial={false}
                     animate={{ opacity: isDead ? 0.2 : 1 }}
                     className="absolute z-20 flex items-center justify-center"
                     style={{ left: `${x}%`, top: `${y}%` }}
                   >
                      <div className={`w-3 h-3 rounded-full shadow-sm ${isDead ? 'bg-red-900 border border-red-500/50' : 'bg-white border border-primary glow-pulse'}`}></div>
                      {isDead && (
                        <div className="absolute top-4 w-max px-2 py-0.5 bg-red-500/20 border border-red-500/50 text-red-500 text-[10px] uppercase tracking-widest rounded shadow-[0_0_10px_#ef4444]">
                           Offline
                        </div>
                      )}
                   </motion.div>
                 );
              })}
           </motion.div>

           <div className="absolute bottom-8 text-center w-full z-30 pointer-events-none">
              <span className="bg-background/80 px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-[#00e5ff] backdrop-blur-md">
                 Vector Re-routing Sequence Active
              </span>
           </div>
        </div>

      </div>
    </section>
  );
}
