import logo from "../assets/idealizelogo.svg";
import HangingSpider from "./hanging";
const tracks = [
  {
    gradient: "from-primary/30",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    bgIcon: "text-primary",
    icon: "lightbulb",
    bgIconName: "rocket_launch",
    title: "LEARN",
    description: "Gain valuable insights from industry experts and enhance your technical skills through workshops and mentoring sessions.",
    items: [],
    dotColor: "bg-primary",
  },
  {
    gradient: "from-secondary/30",
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary",
    bgIcon: "text-secondary",
    icon: "code",
    bgIconName: "terminal",
    title: "CREATE",
    description: "Develop innovative mobile and web applications that solve real-world business challenges and showcase your creativity.",
    items: [],
    dotColor: "bg-secondary",
  },
  {
    gradient: "from-blue-300/30",
    iconBg: "bg-blue-300/20",
    iconColor: "text-blue-300",
    bgIcon: "text-blue-300",
    icon: "volunteer_activism",
    bgIconName: "public",
    title: "network",
    description: "Network with like-minded individuals, potential employers, and industry leaders to expand your professional connections.",
    items: [],
    dotColor: "bg-blue-300",
  },
];
export default function About() {
  return (
    <section className="py-32 relative bg-slate-900/50 overflow-hidden" id="about">
           <HangingSpider side="right" offsetX={60} ropeLength={80} size={80} swayAmount={10} swaySpeed={3} />

      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
      </div>
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 text-[200px] font-headline font-black text-white/[0.03] leading-none select-none">
            INFO
          </div>
          <h2 className="font-headline font-black text-5xl uppercase italic mb-8 relative">
            What is IDEALIZE 2026 <br /> <span className="text-secondary"></span>
          </h2>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              IDEALIZE 2026 is more than just a hackathon. It's a nexus point where 500+ developers, designers, and visionaries collide to solve the multiverse's most pressing challenges.
            </p>
            <p>
              Inspired by the kinetic energy of the Spider-Verse, we encourage participants to embrace the "Glitch"—to find the beauty in the unconventional and the power in the unexpected.
            </p>
          </div>
          <div className="mt-12 flex gap-10">
          <button className="w-50VH md:w-auto px-10 py-5 bg-primary text-white font-headline font-black uppercase tracking-widest text-lg hover:scale-105 active:scale-95 transition-all shadow-[8px_8px_0px_0px_rgba(77,96,189,0.5)]">
            Download the Delegate Booklet
          </button>
          </div>
        </div>

        <div className="relative group">

            <img
              src={logo}
              alt="futuristic hardware circuitry"
            />
          
        </div>
      </div>
          <section className="py-32 relative" id="categories">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">

        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tracks.map((track) => (
            <div key={track.title} className={`group relative p-1 bg-gradient-to-br ${track.gradient} to-transparent`}>
              <div className="bg-surface h-full p-8 relative overflow-hidden">
                <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity`}>
                  <span className={`material-symbols-outlined text-8xl ${track.bgIcon}`}>{track.bgIconName}</span>
                </div>
                <div className={`w-12 h-12 ${track.iconBg} flex items-center justify-center mb-8 spider-web-clip`}>
                  <span className={`material-symbols-outlined ${track.iconColor}`}>{track.icon}</span>
                </div>
                <h3 className="font-headline font-black text-2xl uppercase italic mb-4">{track.title}</h3>
                <p className="text-slate-400 mb-6">{track.description}</p>
                <ul className="space-y-3">
                  {track.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-bold uppercase tracking-tighter text-slate-500">
                      <div className={`w-1 h-1 ${track.dotColor}`}></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </section>
  );
}
