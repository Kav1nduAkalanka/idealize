import WalkingSpider from "./spiderwalk";

const tiers = [
  // ... all unchanged
];

export default function Sponsors() {
  return (
    <section className="py-32 relative" id="partners">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-4 flex flex-col items-center text-center">
          <h2
            className="text-4xl md:text-5xl font-black tracking-tighter uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Past <span className="text-blue-500">Partners</span>
          </h2>
          <p
            className="text-slate-500 text-sm uppercase tracking-widest mt-3 font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Idealize 2025
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-blue-600 to-blue-300 mt-5" />
        </div>

        {/* Tiers */}
        <div className="space-y-10 mt-12">
          {tiers.map((tier) => (
            <div key={tier.label}>
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 whitespace-nowrap"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {tier.label}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
              </div>

              <div className={`grid ${tier.cols} gap-4`}>
                {tier.sponsors.map(({ src, name }) => (
                  <div
                    key={name}
                    className={`flex items-center justify-center ${tier.cardClass} border border-slate-800/50 bg-slate-900/30`}
                  >
                    <img
                      className={`${tier.imgClass} w-auto object-contain`}
                      src={src}
                      alt={name}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center border-t border-slate-800 pt-10">
          <p
            className="text-[10px] uppercase tracking-[0.3em] text-slate-600 font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            These organizations proudly supported Idealize 2025
          </p>
        </div>

        {/* 🕷️ Spider crawls out at the bottom */}
        <div className="mt-16">
          <WalkingSpider count={2} size={55} speeds={[0.04, 0.07]} />
        </div>

      </div>
    </section>
  );
}