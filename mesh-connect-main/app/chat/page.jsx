"use client";

import {
  initSocket,
  startCall,
  sendMessage as rtcSend,
} from "../services/webrtc";

import { useState, useEffect, useRef } from "react";

export default function ChatPage() {
  const [connecting, setConnecting] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [connected, setConnected] = useState(false);
  const bottomRef = useRef(null);

  // 🔌 Init WebSocket once
  useEffect(() => {
    initSocket(); // 🔥 ADD THIS LINE
  }, []);

  // 🔽 Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🟢 Connection event
  useEffect(() => {
    window.onConnected = () => {
      console.log("✅ Connected triggered");
      setConnected(true);
    };
  }, []);

    useEffect(() => {
    if (connected) setConnecting(false);
  }, [connected]);

  // 📩 Receive messages
  useEffect(() => {
    window.receiveMessage = (msg) => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: msg,
          status: "Received via P2P",
          isOwn: false,
          time: new Date().toLocaleTimeString(),
        },
      ]);
    };
  }, []);

  // 📤 Send message
  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = {
      id: Date.now(),
      text: input,
      status: "Sending...",
      isOwn: true,
      time: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, newMsg]);

    rtcSend(input);

    setInput("");

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === newMsg.id
            ? { ...m, status: "Delivered via P2P" }
            : m
        )
      );
    }, 300);
  };

  return (
    <div className="h-[100dvh] w-full overflow-hidden bg-[#030305] text-white flex flex-col font-mono relative">
      
        {/* Holographic grid background */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.03)_0%,transparent_100%)] z-0"></div>

      {/* 🔥 FIXED HEADER */}
      <div className="shrink-0 relative z-10">

        {/* Banner */}
        <div className="bg-primary/20 text-[#00e5ff] text-center py-2 text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(0,229,255,0.2)] border-b border-[#00e5ff]/50 mix-blend-screen">
          <span className="animate-pulse">⚠</span> WarComm Zero-Trust Encrypted Grid Active
        </div>

        {/* 🔥 Dynamic Connection UI */}
        <div className="p-4 flex justify-center bg-[#050508]/80 backdrop-blur-md border-b border-primary/20 text-sm shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          {connected ? (
            <span className="text-[#00e5ff] font-bold tracking-widest uppercase flex items-center gap-2 drop-shadow-[0_0_8px_#00e5ff]">
               <div className="w-2 h-2 bg-[#00e5ff] rounded-full animate-ping"></div>
               Uplink Established
            </span>
          ) : connecting ? (
            <span className="text-[#b400ff] font-bold tracking-widest uppercase drop-shadow-[0_0_8px_#b400ff] animate-pulse">
               Negotiating Handshake...
            </span>
          ) : (
            <button
              className="px-6 py-2 rounded-none font-bold text-xs uppercase tracking-widest bg-transparent border border-[#00e5ff] text-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:bg-[#00e5ff] hover:text-black transition-all"
              onClick={async () => {
                setConnecting(true);
                await startCall();
              }}
            >
              Initialize Node
            </button>
          )}
        </div>

      </div>

      {/* 🔥 MESSAGES */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 px-4 py-6 scroll-smooth relative z-10 content-visibility-auto">
        {messages.length === 0 && (
          <div className="text-center text-primary/50 mt-20 text-sm px-2 uppercase tracking-widest border border-primary/10 inline-block mx-auto p-4 rounded-xl bg-primary/5">
            Buffer Empty
            <br />
            Waiting for peer transmissions.
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.isOwn ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`px-4 py-3 rounded-lg max-w-[80%] break-words overflow-hidden min-w-0 border shadow-holographic ${
                msg.isOwn
                  ? "bg-[#00e5ff]/10 border-[#00e5ff] text-[#00e5ff]"
                  : "bg-white/5 border-white/20 text-white"
              }`}
            >
              <p className="text-sm leading-relaxed break-words font-sans">
                {msg.text}
              </p>

              <span className={`text-[10px] block mt-2 opacity-70 tracking-widest uppercase ${msg.isOwn ? 'text-[#00e5ff]' : 'text-[#b400ff]'}`}>
                [X25519] {msg.status}
              </span>

              <span className="text-[9px] text-white/40 block mt-1">
                TIMESTAMP: {msg.time}
              </span>
            </div>
          </div>
        ))}

        <div ref={bottomRef} />
      </div>

      {/* 🔥 INPUT */}
      <div className="shrink-0 p-4 border-t border-[#00e5ff]/30 flex gap-3 items-center bg-[#050508]/90 backdrop-blur-lg relative z-10">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 min-w-0 bg-[#00e5ff]/5 border border-[#00e5ff]/50 px-4 py-3 text-sm font-sans rounded-none outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all shadow-[inset_0_0_10px_rgba(0,229,255,0.1)] text-[#00e5ff] placeholder-[#00e5ff]/40"
          placeholder="ENTER ENCRYPTED PAYLOAD..."
        />

        <button
          onClick={sendMessage}
          className="bg-[#b400ff]/20 border border-[#b400ff] text-[#b400ff] px-6 py-3 text-sm rounded-none shrink-0 font-bold tracking-widest uppercase hover:bg-[#b400ff] hover:text-white transition-all shadow-[0_0_15px_rgba(180,0,255,0.4)]"
        >
          Transmit
        </button>
      </div>

    </div>
  );
}