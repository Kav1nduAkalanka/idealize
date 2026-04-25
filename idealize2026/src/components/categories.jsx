const categories = [
  {
    gradient: "from-primary/30",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    bgIcon: "text-primary",
    icon: "school",
    bgIconName: "auto_stories",
    title: "SCHOOL CATEGORY",
    accent: "",
    desc: "Dedicated to school students across Sri Lanka. A launchpad for the next generation of digital pioneers to showcase their potential.",
    features: [
      { icon: "groups",        text: "TEAMS OF 2-5 MEMBERS" },
      { icon: "school",        text: "OPEN TO ALL REGISTERED SCHOOLS" },
      { icon: "support_agent", text: "MENTORING & WORKSHOPS PROVIDED" },
    ],
    dotColor: "bg-primary",
    btn: "Register Team",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT9sd4sOnAhiXmrJ47BHbD-Ok2LPRLN_hyuT98zDcuRpaCGOQZuvd-bgOyGZCA0-x9V6tGBDoYxfEiL-bzgh4uLe8ySmLg5NEmMKNg0k2aMd68KmpmLR0QLrYNBfAyKDzNzZC9lPCXJz1vJfqXJ2ukIV4FH0SlpbhOiBokw8LaWMWd3Wvphr1K4TmVuzmBr5nzDPgc7kS1JIqQM3x26APjKRxfoe0UDMcWMPOCEUZeTXhk5uNxneBL-dZYKRT0kWXbTBghDKWcWexU",
  },
  {
    gradient: "from-secondary/30",
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary",
    bgIcon: "text-secondary",
    icon: "rocket_launch",
    bgIconName: "terminal",
    title: "OPEN CATEGORY",
    accent: "",
    desc: "For undergraduates and tech enthusiasts. The ultimate test of technical endurance and professional engineering prowess.",
    features: [
      { icon: "groups",        text: "TEAMS OF 2-5 MEMBERS" },
      { icon: "rocket_launch", text: "ADVANCED TECHNICAL CHALLENGES" },
      { icon: "hub",           text: "INDUSTRY NETWORKING EVENTS" },
    ],
    dotColor: "bg-secondary",
    btn: "Submit Entry",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0M8D54ZT1Ngsg2rmN0unk8lkBqnO1CAMMt7J7_O4f9A_SUrcG94cqJSkc00V0YyD514Y-JihLb5M7EQCU3MD4awy0heFDd69OqyzXY5DzmnbcRtyS83nJ6qKPnyiCxezMSHMdxZS2-CuKAgks3K1Q3QA_FTPoahiERlHaNOIXE3fBNI-RBfj1afDFzg3ZxCGuDGUn64ITFGr9RFRXGzyYPT05iGhkdrQt90hb4W1Yv9Zz3KNXXjJ0rp5r77vDQXayUDf-nS-1HhbD",
  },
];

export default function Categories() {
  return (
    <section className="py-32 relative" id="categories">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
  <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400 mb-3"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
    
  </p>
  <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
    Competition <span className="text-blue-500">Categories</span>
  </h2>
  <div className="h-px w-24 bg-gradient-to-r from-blue-600 to-blue-300 mt-5"></div>
</div>

        {/* Cards — 2 column wide cards to match the larger layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat.title}
              className={`group relative p-1 bg-gradient-to-br ${cat.gradient} to-transparent`}>
              <div className="bg-surface h-full p-10 relative overflow-hidden">

                {/* Faded background image */}
                <div className="absolute top-0 right-0 h-full w-1/2 opacity-10 pointer-events-none overflow-hidden">
                  <img src={cat.img} alt="" className="h-full w-full object-cover grayscale" />
                </div>

                {/* Faded background icon */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className={`material-symbols-outlined text-8xl ${cat.bgIcon}`}>
                    {cat.bgIconName}
                  </span>
                </div>

                <div className="relative z-10">
                  {/* Icon badge */}
                  <div className={`w-12 h-12 ${cat.iconBg} flex items-center justify-center mb-8 spider-web-clip`}>
                    <span className={`material-symbols-outlined ${cat.iconColor}`}>{cat.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-headline font-black text-4xl uppercase italic mb-2 tracking-tighter">
                    {cat.title}
                  </h3>
                  <h4 className={`font-headline font-black text-xl uppercase italic mb-6 ${cat.iconColor}`}>
                    {cat.accent}
                  </h4>

                  <p className="text-slate-400 mb-8 text-sm leading-relaxed max-w-sm">{cat.desc}</p>

                  {/* Feature list */}
                  <ul className="space-y-3 mb-10">
                    {cat.features.map(({ icon, text }) => (
                      <li key={text} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tighter text-slate-500">
                        <span className={`material-symbols-outlined text-base ${cat.iconColor}`}>{icon}</span>
                        {text}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}