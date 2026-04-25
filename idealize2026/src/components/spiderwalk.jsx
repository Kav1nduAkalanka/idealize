import { useState, useEffect, useRef } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import spiderAnim from '../assets/spider.lottie';

function SingleSpider({ containerRef, size, speed, initialPos }) {
  const posRef = useRef(initialPos);
  const dirRef = useRef(1);
  const [pos, setPos] = useState(initialPos);
  const [facingRight, setFacingRight] = useState(true);

  useEffect(() => {
    let raf;
    const step = () => {
      if (!containerRef.current) { raf = requestAnimationFrame(step); return; }
      const containerW = containerRef.current.offsetWidth;
      const maxPos = 100 - (size / containerW) * 100;

      posRef.current += dirRef.current * speed;

      if (posRef.current >= maxPos) {
        posRef.current = maxPos;
        dirRef.current = -1;
        setFacingRight(false);
      } else if (posRef.current <= 0) {
        posRef.current = 0;
        dirRef.current = 1;
        setFacingRight(true);
      }

      setPos(posRef.current);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: `${pos}%`,
        width: size,
        height: size,
        transform: facingRight ? "scaleX(-1)" : "scaleX(1)",
        transition: "transform 0.1s ease",
        filter: "drop-shadow(0 4px 12px rgba(77,96,189,0.5))",
      }}
    >
      <DotLottieReact src={spiderAnim} loop autoplay style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default function WalkingSpider({ size = 80, speed = 0.06, count = 1, speeds = [] }) {
  const containerRef = useRef(null);

  // Spread spiders evenly across the container as starting positions
  const spiders = Array.from({ length: count }, (_, i) => ({
    id: i,
    initialPos: (100 / (count + 1)) * (i + 1),
    speed: speeds[i] ?? speed,
  }));

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: size }}>
      {/* Floor line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      {spiders.map(({ id, initialPos, speed: s }) => (
        <SingleSpider
          key={id}
          containerRef={containerRef}
          size={size}
          speed={s}
          initialPos={initialPos}
        />
      ))}
    </div>
  );
}