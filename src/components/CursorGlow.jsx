import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x - 180,
        top: pos.y - 180,
        width: 360,
        height: 360,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(139,26,47,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
        transition: "left 0.12s linear, top 0.12s linear",
      }}
    />
  );
}