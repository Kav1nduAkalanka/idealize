const tiers = [
  {
    label: "Gold Partners",
    color: "text-yellow-400",
    borderColor: "border-yellow-500/40 hover:border-yellow-500",
    glowColor: "hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
    badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    cols: "grid-cols-2",
    size: "aspect-[3/2]",
    sponsors: [
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4xgDt05Irg7pB9syFRVqS1ojRtkpHA45rW0pYcOaTnj3gm5WRQLKmIQKKQXVg2W6r8pBLu8vYsPEJlJBHgBE15CSmht5kaIoj5QiSoRG_LzIaztvdZZA8dADdKskiFzErZuZcNAa7QJn2okFqWHXrSN9j0TbiZSAOiIidLyrRYdZoZL9PmGJLcRf-u5e4D8XUVR11JroVqONJFURivEPqfnSEjeM4I0p73iVPc7G5IZN8eKNdZZ3vbROjEjoavKShTmQzobJ73kEl", name: "Partner A" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk40Bn3yOwAoQ35dMYDedEPvFF0pCrmdHZAGm0QBfoAcuHShQ3cxPCWoHquwb-Y8KDKgPYbtU-xQyRo4tf7IyqnMfxb-JwOF0MZvEaU5-m5umskvLyZxsTx89lvXEg8JvxfzLpw0bE7stnTtxaNMUHQBdXv_zHsePHQh9rv4ihgTRYzIVqeY32fidhY2jCmq-zWf2mfd-kozo84tkbO3LC8j6hUKi43ZHdUNaiNntsJJ3cUteWQxbbKyUWNuE9ggNXZYU4xZfDdPa2", name: "Partner B" },
    ],
  },
  {
    label: "Silver Partners",
    color: "text-slate-300",
    borderColor: "border-slate-400/40 hover:border-slate-300",
    glowColor: "hover:shadow-[0_0_20px_rgba(148,163,184,0.15)]",
    badge: "bg-slate-400/10 text-slate-300 border-slate-400/30",
    cols: "grid-cols-3",
    size: "aspect-[3/2]",
    sponsors: [
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvx71U1nWNSKf3NFt7KmPkiu1N4xYLcneE2MywIdbiShmvGruv9aSX-SyDy_OKT2vXdfFT1kcUPzbGzYyQYDBjJlQU7PdZBjoFV4K5Ui8mNrBPCzsOsfaEZh3pgfi1VuddsX0okG0BJA6CMmWVtk2EdlV9XSSSOiBiJcYv1BrAI6uEOPLEpFZ8xIrMkQ9sTqXvNKNaw1t0_RZ_xzOkodSXCXJtv8DBL_o3oRXlpOsjiVQHC344xKfVIjciVj31a0FFWs5OabL3RwHV", name: "Partner C" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqMEIyOrZh8Glw9ibpmNleRg5PjPoNXtL6TBRRWbitRjmGY7miHgK9uobNSkSTEjVpwtc6H7Vn-ENs24VEpzRj6ou6YYBsyz-Yh00e8LltEm3iuRdoJxPLTjH53UzSY90HfVvnQnEtfmqHG9c6yEgas5ZBGTAYiyrVB4YExQTsd4Da7NU8Y_bv1cQLrNfVrwxBpeKe5A6Z7jfpEsW-DkhgEG9BXW36bHJcLPii97LLVEwyHlpAtoVJbE9M-AHnwLqOqHTxeMBfaWz", name: "Partner D" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4xgDt05Irg7pB9syFRVqS1ojRtkpHA45rW0pYcOaTnj3gm5WRQLKmIQKKQXVg2W6r8pBLu8vYsPEJlJBHgBE15CSmht5kaIoj5QiSoRG_LzIaztvdZZA8dADdKskiFzErZuZcNAa7QJn2okFqWHXrSN9j0TbiZSAOiIidLyrRYdZoZL9PmGJLcRf-u5e4D8XUVR11JroVqONJFURivEPqfnSEjeM4I0p73iVPc7G5IZN8eKNdZZ3vbROjEjoavKShTmQzobJ73kEl", name: "Partner E" },
    ],
  },
  {
    label: "Bronze Partners",
    color: "text-orange-400",
    borderColor: "border-orange-500/30 hover:border-orange-400",
    glowColor: "hover:shadow-[0_0_20px_rgba(249,115,22,0.1)]",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    cols: "grid-cols-4",
    size: "aspect-[3/2]",
    sponsors: [
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk40Bn3yOwAoQ35dMYDedEPvFF0pCrmdHZAGm0QBfoAcuHShQ3cxPCWoHquwb-Y8KDKgPYbtU-xQyRo4tf7IyqnMfxb-JwOF0MZvEaU5-m5umskvLyZxsTx89lvXEg8JvxfzLpw0bE7stnTtxaNMUHQBdXv_zHsePHQh9rv4ihgTRYzIVqeY32fidhY2jCmq-zWf2mfd-kozo84tkbO3LC8j6hUKi43ZHdUNaiNntsJJ3cUteWQxbbKyUWNuE9ggNXZYU4xZfDdPa2", name: "Partner F" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvx71U1nWNSKf3NFt7KmPkiu1N4xYLcneE2MywIdbiShmvGruv9aSX-SyDy_OKT2vXdfFT1kcUPzbGzYyQYDBjJlQU7PdZBjoFV4K5Ui8mNrBPCzsOsfaEZh3pgfi1VuddsX0okG0BJA6CMmWVtk2EdlV9XSSSOiBiJcYv1BrAI6uEOPLEpFZ8xIrMkQ9sTqXvNKNaw1t0_RZ_xzOkodSXCXJtv8DBL_o3oRXlpOsjiVQHC344xKfVIjciVj31a0FFWs5OabL3RwHV", name: "Partner G" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqMEIyOrZh8Glw9ibpmNleRg5PjPoNXtL6TBRRWbitRjmGY7miHgK9uobNSkSTEjVpwtc6H7Vn-ENs24VEpzRj6ou6YYBsyz-Yh00e8LltEm3iuRdoJxPLTjH53UzSY90HfVvnQnEtfmqHG9c6yEgas5ZBGTAYiyrVB4YExQTsd4Da7NU8Y_bv1cQLrNfVrwxBpeKe5A6Z7jfpEsW-DkhgEG9BXW36bHJcLPii97LLVEwyHlpAtoVJbE9M-AHnwLqOqHTxeMBfaWz", name: "Partner H" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4xgDt05Irg7pB9syFRVqS1ojRtkpHA45rW0pYcOaTnj3gm5WRQLKmIQKKQXVg2W6r8pBLu8vYsPEJlJBHgBE15CSmht5kaIoj5QiSoRG_LzIaztvdZZA8dADdKskiFzErZuZcNAa7QJn2okFqWHXrSN9j0TbiZSAOiIidLyrRYdZoZL9PmGJLcRf-u5e4D8XUVR11JroVqONJFURivEPqfnSEjeM4I0p73iVPc7G5IZN8eKNdZZ3vbROjEjoavKShTmQzobJ73kEl", name: "Partner I" },
    ],
  },
];

export default function Sponsors() {
  return (
    <section className="py-32 relative" id="partners">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
  <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400 mb-3"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
    
  </p>
  <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
    Multiverse <span className="text-blue-500">Partners</span>
  </h2>
  <div className="h-px w-24 bg-gradient-to-r from-blue-600 to-blue-300 mt-5"></div>
</div>

        {/* Tiers */}
        <div className="space-y-16">
          {tiers.map((tier) => (
            <div key={tier.label}>
              {/* Tier label */}
              <div className="flex items-center gap-4 mb-8">
                <span className={`text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 border ${tier.badge} rounded-full`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {tier.label}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent"></div>
              </div>

              {/* Sponsor logos */}
              <div className={`grid ${tier.cols} gap-6`}>
                {tier.sponsors.map(({ src, name }) => (
                  <div key={name}
                    className={`${tier.size} bg-surface flex items-center justify-center
                      grayscale opacity-50 hover:grayscale-0 hover:opacity-100
                      transition-all duration-300 cursor-pointer p-6
                      border ${tier.borderColor} ${tier.glowColor}`}>
                    <img className="max-h-full object-contain" src={src} alt={name} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a sponsor */}
        <div className="mt-20 text-center">
          <a className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-bold uppercase tracking-widest text-sm transition-colors"
            href="#" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Become a Sponsor
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>

      </div>
    </section>
  );
}