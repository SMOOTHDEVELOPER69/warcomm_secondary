"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseInteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[-1]"
      animate={{
        background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 229, 255, 0.08), transparent 40%)`
      }}
      transition={{ type: "tween", ease: "linear", duration: 0.1 }}
    />
  );
}
