const memories = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmhqYqZgIcHfq1cstZ6LlcIy3avEEmWEX_pGC4--oJ_zVUMO7ftyaDQ2JT9riTTgh4aaiVOJae98eW936z_W15SCTB1pBztqCR_japJYC-TKvbqx78aJsWAdqghpZm2pad9Q2MM0mTUNcrXeoRUspusH64anhyVkCQEOhyl0jljzcnrQ00ThAHRJgPtrMmcAvVoIGWa7ZxIfdskka8pum7d7M2VJ-F1OU80DgmsxMD131xtB691ZtnbluCQwBhhnQS0KbYSlfKzXrm",
    label: "IDEALIZE 2024 — Opening Ceremony",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn75pxN86FKrce1TKQLaMMiFef82gpanmvdxSI7iKS_66LIqoozbqrVtXDvGxquewXcZVlftPbPhuX66_l4UpX2TCUEwkgVhUW5ducU8BpL_o6emRmjST4vAA8EAL_JueKE7WG0iZBSWTGr2MysUz_YRQwGlvUdixMqHRLgrNvRa1IwP8845lSvyjNOS9LmKo1B1zM41lO9HzSMBfgqJr-fN0VMu-iRivvGARSDBmGJ4C4bW1uT0mOI424K3fmpOhQWa9IQ5kTixa5",
    label: "IDEALIZE 2024 — Hack Session",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbYzknTlgBXYiQvS3Ii97cE945DghRsZnCy1ad0KIrEWrkVA1-5WPLtCJu9-UjWyuXq_RVm16sCt_niazgHHxIzxFe6FjNGJoElUjdZ66XWO4hrq7_lJ2P54vixYZJV2xUJEX3OnF5NlslQCoVXMNES8VmtXkIgG-oeS0xcEDAqipxV3bQEIK4-PbYk2TRJTwJxMWykMBJAZKDOto7D_xNxLIZLvU9b4P26iC8zEpTJzMz6W1dLfoWQPfOesVyMA__67_q_sb3WdMe",
    label: "IDEALIZE 2025 — Grand Finale",
  },
];

export default function Memories() {
  return (
    <section className="py-24 px-6 bg-slate-900/50 min-h-screen flex flex-col justify-center" id="memories">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400 mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Accessing data from IDEALIZE 2024 / 2025
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Archived <span className="text-blue-500">Dimensions</span>
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-blue-600 to-blue-300 mt-5"></div>
          </div>
          {/* Nav arrows */}
          <div className="flex gap-3">
            {["chevron_left", "chevron_right"].map((icon) => (
              <button key={icon}
                className="w-11 h-11 border border-blue-500/40 text-blue-400 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all">
                <span className="material-symbols-outlined">{icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {memories.map(({ src, label }) => (
            <div key={label} className="group relative overflow-hidden bg-slate-800 aspect-[4/3]
              border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
              {/* HUD corners */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-blue-500 z-10"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-indigo-400 z-10"></div>

              <img
                src={src}
                alt={label}
                className="w-full h-full object-cover grayscale opacity-60
                  group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110
                  transition-all duration-700"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Archive button */}
        <div className="mt-10 text-center">
          <button className="px-8 py-3 border border-slate-700 text-slate-400 hover:border-blue-500 hover:text-blue-400 font-bold uppercase tracking-widest transition-all text-xs"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            View Full Archive
          </button>
        </div>
      </div>
    </section>
  );
}
