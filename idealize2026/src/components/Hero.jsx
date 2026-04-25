import { useEffect, useRef } from "react";
import background from "../assets/hero_back.svg";
import logo from "../assets/withname.png"; // <-- update this path to your actual logo file
export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationId;
    const FONT_SIZE = 25;
    const CHARS = ["0", "1"];

    // Theme colors pulled from your scheme
    // primary ~ indigo/blue, secondary ~ violet
    // We'll use a cool blue-purple tint to match
    const COLOR_HEAD  = "#a5b4fc"; // indigo-300 — bright head drop
    const COLOR_MID   = "#4d60bd"; // primary — mid trail
    const COLOR_TAIL  = "#1e1b4b"; // indigo-950 — deep tail fade

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // columns
    let cols = Math.floor(canvas.width / FONT_SIZE);
    let drops = Array.from({ length: cols }, () =>
      Math.floor(Math.random() * -50)   // start above canvas
    );

    // speed: each drop has its own interval counter
    let speeds = Array.from({ length: cols }, () =>
      0.2 + Math.random() * 0.115         // fraction of frame — < 1 = slower
    );
    let counters = Array.from({ length: cols }, () => 0);

    const draw = () => {
      // Fade trail — semi-transparent fill instead of clearRect
      ctx.fillStyle = "rgba(2, 6, 23, 0.18)"; // slate-950 @ low alpha
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${FONT_SIZE}px 'Courier New', monospace`;

      cols = Math.floor(canvas.width / FONT_SIZE);

      // Adjust arrays if cols changed (resize)
      while (drops.length < cols) {
        drops.push(Math.floor(Math.random() * -50));
        speeds.push(0.3 + Math.random() * 0.5);
        counters.push(0);
      }

      for (let i = 0; i < cols; i++) {
        counters[i] += speeds[i];
        if (counters[i] < 1) continue;
        counters[i] = 0;

        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        // Draw several characters of the trail
        const TRAIL = 20;
        for (let t = 0; t < TRAIL; t++) {
          const ty = (drops[i] - t) * FONT_SIZE;
          if (ty < 0) continue;

          let alpha, color;
          if (t === 0) {
            // Bright head
            color = COLOR_HEAD;
            alpha = 1;
          } else {
            // Fade from mid to tail
            const ratio = t / TRAIL;
            alpha = Math.max(0, 1 - ratio) * 0.85;
            color = t < TRAIL * 0.4 ? COLOR_MID : COLOR_TAIL;
          }

          ctx.globalAlpha = alpha;
          ctx.fillStyle = color;
          const char = CHARS[Math.floor(Math.random() * CHARS.length)];
          ctx.fillText(char, x, ty);
        }

        ctx.globalAlpha = 1;

        // Reset drop when it goes off screen
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* ── Background Layer ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#1e1b4b] to-slate-950" />
        <div className="absolute inset-0 halftone-overlay text-blue-400/5" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen"
          src={background}
          alt="vibrant neon glitch aesthetic background"
        />
      </div>

      {/* ── Matrix Rain Canvas ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-[1]"
        style={{ mixBlendMode: "screen", opacity: 0.55 }}
      />

      {/* ── Bottom fade to hide canvas edge ── */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 to-transparent z-[2]" />

      {/* ── Hero Content ── */}
      <div className="relative z-10 max-w-[1200px] px-6 text-center">
        
        {/* Pill badge */}
        <div className="inline-block px-4 py-1 mb-8 border border-primary/40 bg-primary/10 text-primary font-headline font-bold uppercase tracking-[0.3em] text-sm skew-x-[-12deg]">
          Multiverse is Colliding
        </div>

        {/* Logo instead of text */}
<div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
<img
  src={logo}
  alt="Idealize Logo"
  className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]"
/>
  <h1 className="font-headline font-black text-7xl md:text-9xl tracking-tighter uppercase leading-none">
    <span className="block text-white">IDEALIZE</span>
    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-blue-300 glitch-text">2026</span>
  </h1>


</div>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-medium mb-12">
          Empowering the next generation of tech leaders to weave new realities.
          Break the canon. Build the future.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="w-full md:w-auto px-10 py-5 bg-primary text-white font-headline font-black uppercase tracking-widest text-lg hover:scale-105 active:scale-95 transition-all shadow-[8px_8px_0px_0px_rgba(77,96,189,0.5)]">
            Register Now
          </button>
          <button className="w-full md:w-auto px-10 py-5 border-2 border-slate-500/20 text-slate-200 font-headline font-bold uppercase tracking-widest text-lg hover:bg-slate-800/50 transition-all">
            Learn More
          </button>
        </div>
      </div>

    </section>
  );
}
