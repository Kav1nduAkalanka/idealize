const awards = [
  {
    icon: "workspace_premium",
    color: "text-blue-400",
    border: "border-blue-500/40 hover:border-blue-500",
    title: "Idealizer — Open",
    desc: "The top award for the most innovative and well-executed project",
    prize: "",
    prizeColor: "text-blue-400",
    hud: true,
  },
  {
    icon: "school",
    color: "text-blue-400",
    border: "border-blue-500/40 hover:border-blue-500",
     title: "Idealizer — School",
    desc: "Top award for the standout school-category project.",
   
    prizeColor: "text-blue-400",
    hud: true,
  },
  {
    icon: "lightbulb",
    color: "text-indigo-400",
    border: "border-slate-700/40 hover:border-indigo-500/50",
  title: "Conceptualist",
    desc:"For the boldest concept, even if implementation is simpler.",
    prize: null,
    hud: false,
  },
  {
    icon: "query_stats",
    color: "text-indigo-400",
    border: "border-slate-700/40 hover:border-indigo-500/50",
  title: "Master of Models",
    desc: "Crowned champion of the AI/ML challenge.",
    prize: null,
    hud: false,
  },
  {
    icon: "palette",
    color: "text-indigo-400",
    border: "border-slate-700/40 hover:border-indigo-500/50",
    title: "Design Maestro",
    desc: "Awarded for the most beautiful UI/UX design.",
   prize: null,
    hud: false,
  },
  {
    icon: "memory",
    color: "text-indigo-400",
    border: "border-slate-700/40 hover:border-indigo-500/50",
 title: "AI Mastery Award",
    desc: "For exceptional, meaningful use of AI in a solution.",
    prize: null,
    hud: false,
  },
    {
    icon: "memory",
    color: "text-indigo-400",
    border: "border-slate-700/40 hover:border-indigo-500/50",
   title: "Web App Excellence",
    desc: "Best web application across both categories.",
    prize: null,
    hud: false,
  },
    {
    icon: "memory",
    color: "text-indigo-400",
    border: "border-slate-700/40 hover:border-indigo-500/50",
 title: "Mobile Excellence",
    desc: "Best mobile-first build across both categories.",
    prize: null,
    hud: false,
  },
];



export default function Awards() {
  return (
    <section className="py-24 px-6 min-h-screen flex flex-col justify-center" id="awards">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
  <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400 mb-3"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
    
  </p>
  <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
    Awards & <span className="text-blue-500">Recognition</span>
  </h2>
  <div className="h-px w-24 bg-gradient-to-r from-blue-600 to-blue-300 mt-5"></div>
</div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {awards.map((a) => (
            <div key={a.title}
              className={`relative p-7 bg-slate-900 border ${a.border} transition-all duration-300 group`}>
              {/* HUD corners for top 2 */}
              {a.hud && (
                <>
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-blue-500"></div>
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-indigo-400"></div>
                </>
              )}
              <span className={`material-symbols-outlined text-4xl mb-5 block ${a.color}`}>{a.icon}</span>
              <h3 className="font-black text-lg mb-2 uppercase tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{a.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{a.desc}</p>
              {a.prize && (
                <div className={`text-2xl font-black ${a.prizeColor}`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{a.prize}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
