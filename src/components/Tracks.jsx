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

export default function Tracks() {
  return (
    <section className="py-32 relative" id="categories">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-headline font-black text-5xl uppercase italic tracking-tighter inline-block relative">
            The COntest
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-transparent"></div>
          </h2>
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
  );
}
