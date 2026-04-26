import { useState } from "react";

const memories = [
  { type: "image", src: "/gallery/award-ceremony.jpg", label: "Award Ceremony", year: "2026" },
  { type: "image", src: "/gallery/awards-ceremony-1.jpg", label: "Awards Ceremony", year: "2026" },
  { type: "image", src: "/gallery/awards-ceremony-2.jpg", label: "Awards Ceremony", year: "2026" },
  { type: "image", src: "/gallery/judge-panel.jpg", label: "Judge Panel At Idealize 2026", year: "2026" },
  { type: "image", src: "/gallery/pesentation.jpg", label: "Participant Presentation", year: "2026" },
  { type: "image", src: "/gallery/presentation.jpg", label: "Participant Presentation To Judges", year: "2026" },
  { type: "image", src: "/gallery/networking.jpg", label: "Networking Session With Sponsors", year: "2026" },
];
const VIDEO_ID = "TvztdZQKvxo";

function HudCorners({ accent = "blue" }) {
  const b = accent === "red" ? "border-red-500" : "border-blue-500";
  const s = accent === "red" ? "border-red-400" : "border-indigo-400";
  return (
    <>
      <div className={`absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 ${b} z-10 transition-all duration-300 group-hover:w-8 group-hover:h-8`} />
      <div className={`absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 ${s} z-10 transition-all duration-300 group-hover:w-8 group-hover:h-8`} />
      <div className={`absolute top-0 right-0 w-3 h-3 border-t border-r ${b} z-10 opacity-40`} />
      <div className={`absolute bottom-0 left-0 w-3 h-3 border-b border-l ${s} z-10 opacity-40`} />
    </>
  );
}

const Scanlines = () => (
  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.07)_2px,rgba(0,0,0,0.07)_4px)] pointer-events-none z-10" />
);

function VideoCard({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden bg-slate-900 aspect-[16/9] border border-blue-500/20 hover:border-red-500/60 transition-all duration-500 cursor-pointer"
    >
      <HudCorners accent="red" />
      <Scanlines />
      <img
        src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
        alt="IDEALIZE 2024 Aftermovie"
        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-20 h-20 rounded-full bg-red-600/80 border-2 border-red-400 flex items-center justify-center group-hover:scale-125 group-hover:bg-red-500 transition-all duration-300 shadow-[0_0_40px_rgba(239,68,68,0.6)]">
          <span className="material-symbols-outlined text-white text-5xl ml-1">play_arrow</span>
        </div>
      </div>
      <div className="absolute top-3 left-3 z-20 px-2 py-0.5 bg-red-500/20 border border-red-500/40 text-red-300 text-[9px] font-black tracking-widest uppercase">
        Official Aftermovie
      </div>
      <div className="absolute top-3 right-3 z-20 px-2 py-0.5 bg-red-500/20 border border-red-500/40 text-red-300 text-[9px] font-black tracking-widest uppercase">
        2025
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-5 z-20">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-red-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            IDEALIZE 2025 — Official Aftermovie
          </p>
          <p className="text-[9px] text-slate-400 uppercase tracking-widest mt-1">Click to watch on YouTube player</p>
        </div>
      </div>
    </div>
  );
}

function Lightbox({ item, onClose, onPrev, onNext, hasPrev, hasNext }) {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-[999] bg-slate-950/97 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-xs uppercase tracking-widest font-bold"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="material-symbols-outlined text-base">close</span> Close
        </button>
        {hasPrev && (
          <button onClick={onPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 border border-blue-500/40 text-blue-400 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all z-10">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
        )}
        {hasNext && (
          <button onClick={onNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 border border-blue-500/40 text-blue-400 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all z-10">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        )}
        <div className="relative border border-blue-500/30 p-1">
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-400" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-400" />
          {item.type === "video" ? (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
                title="IDEALIZE 2024 Aftermovie"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : (
            <img src={item.src} alt={item.label} className="w-full max-h-[78vh] object-contain" />
          )}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {item.type === "video" ? "IDEALIZE 2024 — Official Aftermovie" : item.label}
          </p>
          <span className="text-[9px] uppercase tracking-widest text-slate-600 font-bold border border-slate-700 px-2 py-0.5">{item.year ?? "2024"}</span>
        </div>
      </div>
    </div>
  );
}

export default function Memories() {
  const [activeIdx, setActiveIdx] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);

  const allItems = [...memories, { type: "video" }];

  const VISIBLE = 3;
  const maxIdx = memories.length - VISIBLE;

  const prev = () => setCarouselIdx((i) => Math.max(0, i - 1));
  const next = () => setCarouselIdx((i) => Math.min(maxIdx, i + 1));

  const visibleMemories = memories.slice(carouselIdx, carouselIdx + VISIBLE);

  return (
    <section className="py-24 px-6 bg-slate-900/50 min-h-screen flex flex-col justify-center relative overflow-hidden" id="memories">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Memories &amp; <span className="text-blue-500">Gallery</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-blue-600 to-blue-300 mt-5" />
        </div>

        {/* Aftermovie */}
        <div className="mb-6">
          <VideoCard onClick={() => setActiveIdx(memories.length)} />
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={prev}
            disabled={carouselIdx === 0}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-blue-500/40 text-blue-400 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed bg-slate-900"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{ transform: `translateX(calc(-${carouselIdx * (100 / VISIBLE)}% - ${carouselIdx * (16 / VISIBLE)}px))` }}
            >
              {memories.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="group relative overflow-hidden bg-slate-900 border border-blue-500/20 hover:border-blue-400/60 transition-all duration-500 cursor-pointer flex-shrink-0"
                  style={{ width: `calc(${100 / VISIBLE}% - ${(16 * (VISIBLE - 1)) / VISIBLE}px)` }}
                >
                  <HudCorners />
                  <Scanlines />
                  <div className="aspect-[4/3]">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute top-3 right-3 z-20 px-2 py-0.5 bg-blue-500/20 border border-blue-500/40 text-blue-300 text-[9px] font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.year}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 z-20">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.label}</p>
                      <p className="text-[9px] text-slate-500 uppercase tracking-widest mt-0.5">Click to expand</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            disabled={carouselIdx >= maxIdx}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-blue-500/40 text-blue-400 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed bg-slate-900"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCarouselIdx(i)}
              className={`transition-all duration-300 ${
                i === carouselIdx
                  ? "w-6 h-1.5 bg-blue-500"
                  : "w-1.5 h-1.5 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-3">
          <span className="text-[9px] uppercase tracking-widest text-slate-600 font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {carouselIdx + 1} — {maxIdx + 1}
          </span>
        </div>
      </div>

      <Lightbox
        item={activeIdx !== null ? allItems[activeIdx] : null}
        onClose={() => setActiveIdx(null)}
        onPrev={() => setActiveIdx((i) => Math.max(0, i - 1))}
        onNext={() => setActiveIdx((i) => Math.min(allItems.length - 1, i + 1))}
        hasPrev={activeIdx > 0}
        hasNext={activeIdx !== null && activeIdx < allItems.length - 1}
      />
    </section>
  );
}