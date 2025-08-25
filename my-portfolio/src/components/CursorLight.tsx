"use client";

import { useEffect, useState } from "react";

export default function CursorLight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 transition"
      style={{
        background: `radial-gradient(500px at ${pos.x}px ${pos.y}px, rgba(138, 99, 210, 0.15), transparent 80%)`,
      }}
    />
  );
}
