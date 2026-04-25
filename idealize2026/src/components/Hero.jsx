import background from "../assets/hero_back.svg"
export default function Hero() {
  return (
    
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#1e1b4b] to-slate-950"></div>
        <div className="absolute inset-0 halftone-overlay text-blue-400/5"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen"
          src={background}
          alt="vibrant neon glitch aesthetic background"
        />
      </div>

      <div className="relative z-10 max-w-[1200px] px-6 text-center">
        <div className="inline-block px-4 py-1 mb-6 border border-primary/40 bg-primary/10 text-primary font-headline font-bold uppercase tracking-[0.3em] text-sm skew-x-[-12deg]">
          Multiverse is Colliding
        </div>
        <h1 className="font-headline font-black text-7xl md:text-9xl mb-6 tracking-tighter uppercase  leading-none">
          <span className="block text-white">IDEALIZE</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-blue-300 glitch-text">2026</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-medium mb-12">
          Empowering the next generation of tech leaders to weave new realities. Break the canon. Build the future.
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
