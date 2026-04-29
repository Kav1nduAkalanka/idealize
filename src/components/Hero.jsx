import { useEffect, useRef } from "react";
import background from "../assets/hero_back.svg";
import logo from "../assets/withname.png";

export default function Hero() {
  const canvasRef = useRef(null);
  const particleCanvasRef = useRef(null);
  const logoRef = useRef(null);

  const handleLearnMore = () => {
    const heroSection = canvasRef.current?.closest("section");
    const nextSection = heroSection?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  /* ── Matrix Rain ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationId;
    const FONT_SIZE = 25;
    const CHARS = ["0", "1"];
    const COLOR_HEAD = "#a5b4fc";
    const COLOR_MID  = "#4d60bd";
    const COLOR_TAIL = "#1e1b4b";

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let cols     = Math.floor(canvas.width / FONT_SIZE);
    let drops    = Array.from({ length: cols }, () => Math.floor(Math.random() * -50));
    let speeds   = Array.from({ length: cols }, () => 0.2 + Math.random() * 0.115);
    let counters = Array.from({ length: cols }, () => 0);

    const draw = () => {
      ctx.fillStyle = "rgba(2, 6, 23, 0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `bold ${FONT_SIZE}px 'Courier New', monospace`;

      cols = Math.floor(canvas.width / FONT_SIZE);
      while (drops.length < cols) {
        drops.push(Math.floor(Math.random() * -50));
        speeds.push(0.3 + Math.random() * 0.5);
        counters.push(0);
      }

      for (let i = 0; i < cols; i++) {
        counters[i] += speeds[i];
        if (counters[i] < 1) continue;
        counters[i] = 0;

        const x     = i * FONT_SIZE;
        const TRAIL = 20;

        for (let t = 0; t < TRAIL; t++) {
          const ty = (drops[i] - t) * FONT_SIZE;
          if (ty < 0) continue;
          let alpha, color;
          if (t === 0) {
            color = COLOR_HEAD; alpha = 1;
          } else {
            const ratio = t / TRAIL;
            alpha = Math.max(0, 1 - ratio) * 0.85;
            color = t < TRAIL * 0.4 ? COLOR_MID : COLOR_TAIL;
          }
          ctx.globalAlpha = alpha;
          ctx.fillStyle   = color;
          ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], x, ty);
        }

        ctx.globalAlpha = 1;
        if (drops[i] * FONT_SIZE > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    };

    if (prefersReducedMotion) {
      ctx.fillStyle = "rgba(2, 6, 23, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      draw();
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ── Floating Particles ── */
  useEffect(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* particle pool */
    const COUNT = 55;
    const particles = Array.from({ length: COUNT }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      r:     0.6 + Math.random() * 1.6,
      vx:    (Math.random() - 0.5) * 0.25,
      vy:    -0.08 - Math.random() * 0.18,
      alpha: 0.15 + Math.random() * 0.45,
      /* each particle pulses at its own rate */
      phase: Math.random() * Math.PI * 2,
      freq:  0.008 + Math.random() * 0.012,
    }));

    /* slow rotating sweep — a big radial that drifts */
    let sweepAngle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* ── radial sweep glow ── */
      sweepAngle += 0.003;
      const cx = canvas.width  * 0.5;
      const cy = canvas.height * 0.42;
      const grad = ctx.createConicalGradient
        ? null                       /* fallback below */
        : null;

      /* use a rotating linear gradient faked as a sweep */
      const gx1 = cx + Math.cos(sweepAngle) * canvas.width * 0.6;
      const gy1 = cy + Math.sin(sweepAngle) * canvas.height * 0.6;
      const sweepG = ctx.createLinearGradient(cx, cy, gx1, gy1);
      sweepG.addColorStop(0,   "rgba(37, 99, 235, 0.06)");
      sweepG.addColorStop(0.5, "rgba(99,102,241, 0.04)");
      sweepG.addColorStop(1,   "rgba(2,6,23,0)");
      ctx.fillStyle = sweepG;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      /* ── particles ── */
      for (const p of particles) {
        p.phase += p.freq;
        const pulse = 0.5 + 0.5 * Math.sin(p.phase);
        const alpha = p.alpha * (0.4 + 0.6 * pulse);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(165, 180, 252, ${alpha})`;   /* indigo-300 */
        ctx.fill();

        /* occasional brighter blue particle */
        if (p.r > 1.8) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${alpha * 0.25})`;
          ctx.fill();
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -4)             { p.y = canvas.height + 4; p.x = Math.random() * canvas.width; }
        if (p.x < -4)             p.x = canvas.width + 4;
        if (p.x > canvas.width + 4) p.x = -4;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ── Logo glow pulse (CSS animation injected once) ── */
  useEffect(() => {
    const styleId = "idealize-logo-anim";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes idealizeLogo {
          0%,100% {
            filter: drop-shadow(0 0 18px rgba(99,102,241,0.55))
                    drop-shadow(0 0 40px rgba(37,99,235,0.30));
          }
          50% {
            filter: drop-shadow(0 0 38px rgba(129,140,248,0.95))
                    drop-shadow(0 0 80px rgba(59,130,246,0.55))
                    drop-shadow(0 0 120px rgba(37,99,235,0.25));
          }
        }
        @keyframes idealizeFloat {
          0%,100% { transform: scale(1.40) translateY(0px);   }
          50%      { transform: scale(1.40) translateY(-6px);  }
        }
        .idealize-logo-animated {
          animation:
            idealizeLogo  3.2s ease-in-out infinite,
            idealizeFloat 5.5s ease-in-out infinite;
        }
        .idealize-logo-animated:hover {
          animation:
            idealizeLogo  1.6s ease-in-out infinite,
            idealizeFloat 5.5s ease-in-out infinite;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* ── Background Layer ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#1e1b4b] to-slate-950" />
        <div className="absolute inset-0 halftone-overlay text-blue-400/5" />

        {/* Breathing glow orbs — blue-toned */}
        <div
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.28) 0%, rgba(67,56,202,0.18) 50%, transparent 100%)",
            animation: "orbBreath1 7s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(29,78,216,0.24) 0%, rgba(99,102,241,0.14) 50%, transparent 100%)",
            animation: "orbBreath2 9s ease-in-out infinite",
          }}
        />
        {/* extra center-top accent */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-64 rounded-full blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            animation: "orbBreath1 11s ease-in-out infinite reverse",
          }}
        />

        <img
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen"
          src={background}
          alt="background"
        />
      </div>

      {/* ── Orb keyframes (global, injected once) ── */}
      <style>{`
        @keyframes orbBreath1 {
          0%,100% { opacity: 0.7; transform: scale(1);    }
          50%      { opacity: 1;   transform: scale(1.18); }
        }
        @keyframes orbBreath2 {
          0%,100% { opacity: 0.6; transform: scale(1);    }
          50%      { opacity: 1;   transform: scale(1.22); }
        }
      `}</style>

      {/* ── Floating Particles Canvas ── */}
      <canvas
        ref={particleCanvasRef}
        className="absolute inset-0 w-full h-full z-[1]"
        style={{ mixBlendMode: "screen", opacity: 1, pointerEvents: "none" }}
      />

      {/* ── Matrix Rain Canvas ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-[2]"
        style={{ mixBlendMode: "screen", opacity: 0.55 }}
      />

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 to-transparent z-[3]" />

      {/* ── Hero Content ── */}
      <div className="relative z-10 w-full h-full px-4 md:px-6 text-center flex flex-col items-center justify-center pt-16 md:pt-20 -translate-y-16 md:-translate-y-24">

        {/* Logo — animated glow + float */}
        <div className="flex items-center justify-center -mb-20 md:-mb-24">
          <img
            ref={logoRef}
            src={logo}
            alt="Idealize Logo"
            className="idealize-logo-animated w-[20rem] h-auto md:w-[28rem] lg:w-[36rem] object-contain pointer-events-none transition-all duration-500"
          />
        </div>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-sm md:text-base lg:text-lg text-slate-300 font-medium mb-4 leading-relaxed px-4">
          Empowering the next generation of tech leaders to weave new realities.
          <span className="block mt-1 text-slate-400">Break the canon. Build the future.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full max-w-md">
          <button
            className="w-full sm:w-auto px-6 md:px-10 py-2 md:py-3 bg-gradient-to-r from-primary to-secondary text-white font-headline font-bold uppercase tracking-widest text-xs md:text-sm rounded-lg hover:shadow-[0_0_30px_rgba(77,96,189,0.7)] active:scale-95 transition-all duration-200"
            onClick={() => window.open("https://tally.so/r/Np4V0p", "_blank")}
          >
            Register Now
          </button>
          <button
            className="w-full sm:w-auto px-6 md:px-10 py-2 md:py-3 border-2 border-primary/40 text-slate-200 font-headline font-bold uppercase tracking-widest text-xs md:text-sm rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-200"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
