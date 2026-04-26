import { useEffect, useRef } from "react";
import WalkingSpider from "./spiderwalk";

const categories = [
  {
    id: "school",
    icon: "school",
    bgIconName: "auto_stories",
    title: "SCHOOL CATEGORY",
    desc: "Dedicated to school students across Sri Lanka. A launchpad for the next generation of digital pioneers to showcase their potential.",
    features: [
      { icon: "groups",        text: "Teams of 2–5 Members" },
      { icon: "school",        text: "Open to All Registered Schools" },
      { icon: "support_agent", text: "Mentoring & Workshops Provided" },
    ],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT9sd4sOnAhiXmrJ47BHbD-Ok2LPRLN_hyuT98zDcuRpaCGOQZuvd-bgOyGZCA0-x9V6tGBDoYxfEiL-bzgh4uLe8ySmLg5NEmMKNg0k2aMd68KmpmLR0QLrYNBfAyKDzNzZC9lPCXJz1vJfqXJ2ukIV4FH0SlpbhOiBokw8LaWMWd3Wvphr1K4TmVuzmBr5nzDPgc7kS1JIqQM3x26APjKRxfoe0UDMcWMPOCEUZeTXhk5uNxneBL-dZYKRT0kWXbTBghDKWcWexU",
    variant: "blue",
  },
  {
    id: "open",
    icon: "rocket_launch",
    bgIconName: "terminal",
    title: "OPEN CATEGORY",
    desc: "For undergraduates and tech enthusiasts. The ultimate test of technical endurance and professional engineering prowess.",
    features: [
      { icon: "groups",        text: "Teams of 2–5 Members" },
      { icon: "rocket_launch", text: "Advanced Technical Challenges" },
      { icon: "hub",           text: "Industry Networking Events" },
    ],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0M8D54ZT1Ngsg2rmN0unk8lkBqnO1CAMMt7J7_O4f9A_SUrcG94cqJSkc00V0YyD514Y-JihLb5M7EQCU3MD4awy0heFDd69OqyzXY5DzmnbcRtyS83nJ6qKPnyiCxezMSHMdxZS2-CuKAgks3K1Q3QA_FTPoahiERlHaNOIXE3fBNI-RBfj1afDFzg3ZxCGuDGUn64ITFGr9RFRXGzyYPT05iGhkdrQt90hb4W1Yv9Zz3KNXXjJ0rp5r77vDQXayUDf-nS-1HhbD",
    variant: "indigo",
  },
];

const VARIANTS = {
  blue: {
    accent: "#60a5fa",
    accentStrong: "#3b82f6",
    accentMuted: "rgba(59,130,246,0.12)",
    borderIdle: "rgba(59,130,246,0.35)",
    borderHover: "rgba(59,130,246,0.9)",
    glowHover: "0 0 40px rgba(59,130,246,0.22), inset 0 0 40px rgba(59,130,246,0.04)",
    scan: "linear-gradient(90deg, transparent, #60a5fa, transparent)",
    cornerBr: "#818cf8",
  },
  indigo: {
    accent: "#818cf8",
    accentStrong: "#6366f1",
    accentMuted: "rgba(99,102,241,0.12)",
    borderIdle: "rgba(99,102,241,0.35)",
    borderHover: "rgba(99,102,241,0.9)",
    glowHover: "0 0 40px rgba(99,102,241,0.22), inset 0 0 40px rgba(99,102,241,0.04)",
    scan: "linear-gradient(90deg, transparent, #818cf8, transparent)",
    cornerBr: "#60a5fa",
  },
};

function CategoryCard({ cat }) {
  const cardRef = useRef(null);
  const radialRef = useRef(null);
  const scanRef = useRef(null);
  const v = VARIANTS[cat.variant];

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (radialRef.current) {
        radialRef.current.style.background = `radial-gradient(320px circle at ${x}px ${y}px, ${
          cat.variant === "blue" ? "rgba(59,130,246,0.09)" : "rgba(99,102,241,0.09)"
        }, transparent 70%)`;
      }
    };

    const onEnter = () => {
      card.style.borderColor = v.borderHover;
      card.style.boxShadow = v.glowHover;
      if (radialRef.current) radialRef.current.style.opacity = "1";
      if (scanRef.current) {
        scanRef.current.style.opacity = "1";
        scanRef.current.style.animation = "cat-scan 2s linear infinite";
      }
    };

    const onLeave = () => {
      card.style.borderColor = v.borderIdle;
      card.style.boxShadow = "none";
      if (radialRef.current) radialRef.current.style.opacity = "0";
      if (scanRef.current) {
        scanRef.current.style.opacity = "0";
        scanRef.current.style.animation = "none";
      }
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    
    <div
      ref={cardRef}
      style={{
        position: "relative",
        background: "#0f172a",
        border: `1px solid ${v.borderIdle}`,
        padding: "2.5rem",
        overflow: "hidden",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
    >
      
      {/* HUD corners */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "1.25rem", height: "1.25rem", borderTop: `2px solid ${v.accentStrong}`, borderLeft: `2px solid ${v.accentStrong}` }} />
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "1.25rem", height: "1.25rem", borderBottom: `2px solid ${v.cornerBr}`, borderRight: `2px solid ${v.cornerBr}` }} />

      {/* Cursor radial glow layer */}
      <div ref={radialRef} style={{ position: "absolute", inset: 0, opacity: 0, transition: "opacity 0.4s", pointerEvents: "none" }} />

      {/* Scan line */}
      <div
        ref={scanRef}
        style={{
          position: "absolute",
          top: 0,
          left: "-60%",
          width: "60%",
          height: "1px",
          background: v.scan,
          opacity: 0,
          pointerEvents: "none",
        }}
      />

      {/* Background image */}
      <img
        src={cat.img}
        alt=""
        style={{
          position: "absolute",
          top: 0, right: 0,
          width: "55%", height: "100%",
          objectFit: "cover",
          opacity: 0.07,
          filter: "grayscale(1)",
          pointerEvents: "none",
          maskImage: "linear-gradient(to left, rgba(0,0,0,0.5), transparent)",
          WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.5), transparent)",
        }}
      />

      {/* Ghost icon */}
      <span
        className="material-symbols-outlined"
        style={{
          position: "absolute",
          top: "1rem", right: "1rem",
          fontSize: "7rem",
          opacity: 0.06,
          pointerEvents: "none",
          userSelect: "none",
          color: v.accent,
          fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48",
        }}
      >
        {cat.bgIconName}
      </span>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* Icon badge */}
        <div style={{
          width: "2.75rem", height: "2.75rem",
          background: v.accentMuted,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: "1.75rem",
          position: "relative",
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: "1.4rem", color: v.accent }}>
            {cat.icon}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: "2.25rem",
          textTransform: "uppercase",
          letterSpacing: "-0.01em",
          color: "#f1f5f9",
          lineHeight: 1,
          marginBottom: "1rem",
          marginTop: 0,
        }}>
          {cat.title}
        </h3>

        {/* Desc */}
        <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "28rem", marginBottom: "1.75rem", marginTop: 0 }}>
          {cat.desc}
        </p>

        {/* Features */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {cat.features.map(({ icon, text }) => (
            <li key={text} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.75rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b" }}>
              <span className="material-symbols-outlined" style={{ fontSize: "1rem", color: v.accent }}>{icon}</span>
              {text}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default function Categories() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Space+Grotesk:wght@700;900&family=DM+Sans:wght@400;500&display=swap');
        @keyframes cat-scan {
          0%   { left: -60%; }
          100% { left: 140%; }
        }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      <section
        id="categories"
        style={{ fontFamily: "'DM Sans', sans-serif", padding: "6rem 1.5rem", position: "relative" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Header — matches Timeline style */}
          <div style={{ marginBottom: "3rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "#60a5fa",
              margin: "0 0 0.75rem",
            }}>
              
            </p>
  <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
    Competition <span className="text-blue-500">Categories</span>
  </h2>
            <div style={{ height: 1, width: "6rem", background: "linear-gradient(to right, #2563eb, #93c5fd)", marginTop: "1.25rem" }} />
          </div>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: "2rem",
          }}>
            {categories.map((cat) => (
              <CategoryCard key={cat.id} cat={cat} />
            ))}
          </div>
     
        </div>
      </section>
    </>
  );
}