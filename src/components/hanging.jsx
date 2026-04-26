import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import spiderAnim from '../assets/cure.lottie';
export default function HangingSpider({
  size = 80,          // spider size in px
  ropeLength = 60,    // thread length in px
  side = "right",     // "left" | "right" | "center"
  offsetX = 40,       // distance from the edge in px
  swayAmount = 12,    // how far it sways in degrees
  swaySpeed = 3,      // seconds per sway cycle
}) {
  const [hovered, setHovered] = useState(false);
  const angleRef = useRef(0);
  const [angle, setAngle] = useState(0);
  const rafRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    let last = null;

    const animate = (ts) => {
      if (!last) last = ts;
      const dt = (ts - last) / 1000;
      last = ts;

      timeRef.current += dt;
      const swing = hovered ? swayAmount * 2 : swayAmount;
      const newAngle = Math.sin((timeRef.current * Math.PI * 2) / swaySpeed) * swing;
      setAngle(newAngle);

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [hovered, swayAmount, swaySpeed]);

  const posStyle =
    side === "left"
      ? { left: offsetX }
      : side === "right"
      ? { right: offsetX }
      : { left: "50%", transform: "translateX(-50%)" };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        ...posStyle,
        zIndex: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transformOrigin: "top center",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Pivot point — fixed to ceiling */}
      <div style={{ width: 1, height: 0, position: "relative" }}>

        {/* Swaying container — rotates from top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transformOrigin: "top center",
            transform: `rotate(${angle}deg)`,
            transition: hovered ? "none" : "transform 0.05s linear",
          }}
        >
          {/* Web thread */}
          <div
            style={{
              width: 1,
              height: ropeLength,
              background: "linear-gradient(to bottom, rgba(148,163,184,0.6), rgba(148,163,184,0.2))",
              boxShadow: "0 0 2px rgba(148,163,184,0.3)",
            }}
          />

          {/* Spider */}
          <div
            style={{
              width: size,
              height: size,
              marginTop: -4,
              filter: hovered
                ? "drop-shadow(0 0 16px rgba(77,96,189,0.9))"
                : "drop-shadow(0 4px 12px rgba(77,96,189,0.4))",
              transition: "filter 0.3s ease",
              cursor: "pointer",
            }}
          >
            <DotLottieReact src={spiderAnim} loop autoplay style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}