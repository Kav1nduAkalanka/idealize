const awards = [
  {
    icon: "workspace_premium",
    color: "text-yellow-400",
    title: "Idealizer — Open",
    desc: "The top award for the most innovative and well-executed project",
  },
  {
    icon: "school",
    color: "text-yellow-400",
    title: "Idealizer — School",
    desc: "Top award for the standout school-category project.",
  },
];

const subAwards = [
  {
    icon: "lightbulb",
    color: "text-indigo-400",
    title: "Conceptualist",
    desc: "For the boldest concept, even if implementation is simpler.",
  },
  {
    icon: "query_stats",
    color: "text-indigo-400",
    title: "Master of Agents",
    desc: "Crowned champion of the AI Agent Challenge",
  },
  {
    icon: "palette",
    color: "text-indigo-400",
    title: "Design Maestro",
    desc: "Awarded for the most beautiful UI/UX design.",
  },
  {
    icon: "memory",
    color: "text-indigo-400",
    title: "AI Mastery Award",
    desc: "For exceptional, meaningful use of AI in a solution.",
  },
  {
    icon: "language",
    color: "text-indigo-400",
    title: "Web App Excellence",
    desc: "Best web application across both categories.",
  },

];

export default function Awards() {
  return (
    <section className="py-24 px-6 min-h-screen flex flex-col justify-center" id="awards">

      <style>{`
        @keyframes goldPulse {
          0%, 100% { box-shadow: 0 0 24px rgba(234,179,8,0.15), inset 0 0 24px rgba(234,179,8,0.04); }
          50%       { box-shadow: 0 0 52px rgba(234,179,8,0.40), inset 0 0 44px rgba(234,179,8,0.12); }
        }
        @keyframes goldIconGlow {
          0%, 100% { filter: drop-shadow(0 0 6px rgba(234,179,8,0.5)); }
          50%       { filter: drop-shadow(0 0 20px rgba(234,179,8,1)); }
        }
        @keyframes indigoPulse {
          0%, 100% { box-shadow: 0 0 16px rgba(99,102,241,0.08), inset 0 0 16px rgba(99,102,241,0.03); }
          50%       { box-shadow: 0 0 36px rgba(99,102,241,0.28), inset 0 0 28px rgba(99,102,241,0.08); }
        }
        @keyframes indigoIconGlow {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(99,102,241,0.4)); }
          50%       { filter: drop-shadow(0 0 14px rgba(99,102,241,0.95)); }
        }
        @keyframes cornerPulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        .gold-card    { animation: goldPulse 3s ease-in-out infinite; }
        .gold-icon    { animation: goldIconGlow 3s ease-in-out infinite; }
        .indigo-card  { animation: indigoPulse 3.5s ease-in-out infinite; }
        .indigo-icon  { animation: indigoIconGlow 3.5s ease-in-out infinite; }
        .corner-anim  { animation: cornerPulse 3s ease-in-out infinite; }

        .gold-card:nth-child(2)   { animation-delay: 1.5s; }
        .indigo-card:nth-child(2) { animation-delay: 0.6s; }
        .indigo-card:nth-child(3) { animation-delay: 1.2s; }
        .indigo-card:nth-child(4) { animation-delay: 1.8s; }
        .indigo-card:nth-child(5) { animation-delay: 2.4s; }
        .indigo-card:nth-child(6) { animation-delay: 3.0s; }
      `}</style>

      <div className="max-w-[1200px] mx-auto w-full">

        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h2
            className="text-4xl md:text-5xl font-black tracking-tighter uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Awards & <span className="text-blue-500">Recognition</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-blue-600 to-blue-300 mt-5" />
        </div>

        {/* Top 2 — Idealizer Awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {awards.map((a) => (
            <div
              key={a.title}
              className="gold-card relative p-8 bg-slate-900 border border-yellow-500/40 hover:border-yellow-400/80 transition-colors duration-300 group"
            >
              {/* HUD corners */}
              <div className="corner-anim absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-yellow-400 transition-all duration-300 group-hover:w-9 group-hover:h-9" />
              <div className="corner-anim absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-yellow-500 transition-all duration-300 group-hover:w-9 group-hover:h-9" />
              <div className="corner-anim absolute top-0 right-0 w-3 h-3 border-t border-r border-yellow-400/40" />
              <div className="corner-anim absolute bottom-0 left-0 w-3 h-3 border-b border-l border-yellow-500/40" />

              <span className="gold-icon material-symbols-outlined text-5xl mb-5 block text-yellow-400">
                {a.icon}
              </span>

              <h3
                className="font-black text-xl uppercase tracking-tight text-yellow-300 mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {a.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom 6 — Sub Awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {subAwards.map((a) => (
            <div
              key={a.title}
              className="indigo-card relative p-7 bg-slate-900 border border-indigo-500/20 hover:border-indigo-500/60 transition-colors duration-300 group"
            >
              {/* HUD corners */}
              <div className="corner-anim absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-indigo-500/60 transition-all duration-300 group-hover:w-7 group-hover:h-7" />
              <div className="corner-anim absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-indigo-400/60 transition-all duration-300 group-hover:w-7 group-hover:h-7" />

              <span className="indigo-icon material-symbols-outlined text-4xl mb-5 block text-indigo-400">
                {a.icon}
              </span>

              <h3
                className="font-black text-lg mb-2 uppercase tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {a.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}