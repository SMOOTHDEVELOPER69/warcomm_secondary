"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ShieldAlert, Zap, X } from 'lucide-react';

const stories = [
  { id: 1, city: "Kyiv, Ukraine", desc: "During targeted power grid strikes, neighborhoods set up localized mesh circles to coordinate food and safety supplies.", 
    fullDesc: "In the heart of winter, targeted strikes devastated the centralized power and telecom infrastructure in Kyiv, plunging neighborhoods into total darkness. Without cellular connectivity or broadband, civilians were isolated. Within hours, tech-savvy volunteers deployed ResilienceNet-enabled smartphones acting as localized relay nodes. A resilient peer-to-peer mesh circle formed dynamically over the blackout zone, securely routing hundreds of vital messages, requests for medical supplies, and offline maps between neighbors without a single traditional cell tower or gateway.",
    x: 20, y: 30, icon: <ShieldAlert size={16}/>, img: "/images/kyiv.png" },
  { id: 2, city: "Maui, Hawaii", desc: "When wildfires destroyed cellular towers, responders used ad-hoc networks to map survivor locations.", 
    fullDesc: "Surrounded by fast-moving wildfires, traditional telecommunication lines on Maui melted in minutes. Emergency responders and trapped civilians immediately lost all contact. In this vacuum, ResilienceNet was activated on surviving devices, automatically establishing high-frequency BLE channels and bridging gaps across valleys. By establishing dynamic, self-healing routing vectors, rescue teams could triangulate survivor beacons and coordinate helicopter extraction completely off-the-grid.",
    x: 70, y: 40, icon: <MapPin size={16}/>, img: "/images/maui.png" },
  { id: 3, city: "Tehran, Iran", desc: "Amidst national internet shutdowns, civilians share critical news via encrypted peer-to-peer data hoppers.", 
    fullDesc: "During mass internet blackouts imposed by national authorities, the flow of information was heavily restricted. ResilienceNet bypassed governmental ISPs entirely. Citizens simply walked the streets with their phones acting as silent, encrypted 'data hoppers.' As they brushed past each other, massive bursts of encrypted news, video clips, and safe-zone coordinates were exchanged via Zero-Trust X25519 tunnels, ensuring absolute privacy while defeating large-scale digital suppression.",
    x: 50, y: 60, icon: <Zap size={16}/>, img: "/images/tehran.png" }
];

export default function Story() {
  const [activeStory, setActiveStory] = useState<number | null>(null);
  const [selectedStory, setSelectedStory] = useState<typeof stories[0] | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedStory) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; }
  }, [selectedStory]);

  return (
    <section id="story" className="w-full py-40 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
           Real-Life Impact
        </h2>
        <p className="text-xl text-textMuted text-center max-w-3xl mx-auto mb-20 font-light">
           When conventional infrastructure fails, people build their own. Click a node to decrypt the full operational logs.
        </p>

        <div className="relative w-full aspect-[4/3] md:aspect-video glass-panel rounded-3xl border border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden bg-[#050508]">
           {/* Abstract Map Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
           <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9InRyYW5zcGFyZW50Ii8+CjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiNmZmYiLz4KPC9zdmc+')]"></div>

           {/* Story Nodes */}
           {stories.map((story) => (
             <div 
               key={story.id}
               className="absolute z-20 group"
               style={{ top: `${story.y}%`, left: `${story.x}%` }}
               onMouseEnter={() => setActiveStory(story.id)}
               onMouseLeave={() => setActiveStory(null)}
               onClick={() => setSelectedStory(story)}
             >
                {/* Node Point */}
                <div className="relative flex items-center justify-center cursor-pointer">
                    <span className="absolute w-12 h-12 rounded-full bg-primary/20 animate-ping"></span>
                    <span className="relative w-5 h-5 bg-primary shadow-[0_0_20px_#00e5ff] rounded-full border-2 border-white"></span>
                </div>

                {/* Hover Card (Preview Only) */}
                <AnimatePresence>
                  {activeStory === story.id && !selectedStory && (
                    <motion.div 
                       initial={{ opacity: 0, y: 10, scale: 0.9 }}
                       animate={{ opacity: 1, y: 0, scale: 1 }}
                       exit={{ opacity: 0, y: 10, scale: 0.9 }}
                       className="absolute top-10 left-1/2 -translate-x-1/2 w-72 glass-panel border border-primary/40 p-1 rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.4)] z-30 overflow-hidden cursor-pointer backdrop-blur-xl bg-background/80"
                    >
                       <div className="px-4 py-3">
                         <div className="flex items-center gap-2 text-primary mb-2 font-bold uppercase text-[10px] tracking-widest">
                            {story.icon} {story.city} | Click TO DECRYPT LOG
                         </div>
                         <p className="text-sm text-gray-300 leading-relaxed font-light">
                            {story.desc}
                         </p>
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
           ))}

           {/* Cinematic Connection Lines */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="none">
              <path d="M 20% 30% L 50% 60% L 70% 40%" fill="none" stroke="rgba(0, 229, 255, 0.2)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
           </svg>
        </div>
      </div>

      {/* Massive Fullscreen Image Modal */}
      <AnimatePresence>
         {selectedStory && (
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
            >
               <div 
                 className="absolute inset-0" 
                 onClick={() => setSelectedStory(null)}
               ></div>

               <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="relative w-full max-w-6xl max-h-[90vh] glass-panel border border-primary/30 rounded-2xl shadow-[0_0_50px_rgba(0,229,255,0.2)] overflow-hidden flex flex-col lg:flex-row z-10"
               >
                  {/* Close button */}
                  <button 
                     onClick={() => setSelectedStory(null)}
                     className="absolute top-4 right-4 z-50 p-2 glass-panel rounded-full text-white/50 hover:text-white border border-white/10 hover:border-white/30 transition-all hover:rotate-90 hover:scale-110 shadow-lg"
                  >
                     <X size={24} />
                  </button>

                  {/* Image Panel */}
                  <div className="w-full lg:w-3/5 h-64 lg:h-[70vh] bg-black relative border-b lg:border-b-0 lg:border-r border-primary/20">
                     <img 
                        src={selectedStory.img} 
                        alt={selectedStory.city} 
                        className="w-full h-full object-cover opacity-80 mix-blend-screen" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                  </div>

                  {/* Text Panel */}
                  <div className="w-full lg:w-2/5 p-8 md:p-12 overflow-y-auto bg-surface/50 flex flex-col justify-center">
                     <div className="inline-flex items-center gap-3 text-secondary mb-4 font-black uppercase text-sm tracking-[0.3em]">
                        {selectedStory.icon} {selectedStory.city}
                     </div>
                     <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                        Incident Log <span className="text-primary opacity-50">#{selectedStory.id}</span>
                     </h3>
                     <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent mb-8"></div>
                     <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8">
                        {selectedStory.fullDesc}
                     </p>

                     <button 
                        onClick={() => setSelectedStory(null)}
                        className="self-start uppercase tracking-widest text-xs font-bold text-primary hover:text-white border border-primary/50 hover:border-white px-6 py-3 rounded-full transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                     >
                        Close Log
                     </button>
                  </div>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>

    </section>
  );
}
