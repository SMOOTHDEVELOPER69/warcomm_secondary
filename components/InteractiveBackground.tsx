"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate, useReducedMotion } from "framer-motion";

export default function MouseInteractiveBackground() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY, shouldReduceMotion]);

  const backgroundStr = useMotionTemplate`radial-gradient(1000px circle at ${mouseX}px ${mouseY}px, rgba(0, 229, 255, 0.08), transparent 40%)`;

  if (shouldReduceMotion) return null; // Avoid intense rendering entirely if specs demand it

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{
        background: backgroundStr
      }}
    />
  );
}
