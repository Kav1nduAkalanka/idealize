const events = [
  {
    title: "Registration Opens",
    desc: "Secure your spot in the multiverse. Limited entry.",
    date: "APRIL 27-MAY 11, 2026",
    color: "text-white",
    dotColor: "bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]",
    borderColor: "border-white/20",
    align: "right",
    dotSize: "w-4 h-4",
  },
  {
    title: "Workshop Starts",
    desc: "Master the tools of the trade with industry leaders.",
    date: "APRIL 4 , 2026",
    color: "text-white",
    dotColor: "bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]",
    borderColor: "border-white/20",
    align: "left",
    dotSize: "w-4 h-4",
  },
  {
    title: "Proposal submission",
    desc: "48 hours of pure creation. Glitch the multiverse.",
    date: "MAY 12-JUNE 6, 2026",
    color: "text-white",
    dotColor: "bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]",
    borderColor: "border-white/20",
    align: "right",
    dotSize: "w-4 h-4",
  },
  {
    title: "Mini Competition",
    desc: "Demo day and awards ceremony at the Nexus Stage.",
    date: "26 MAY-10 JUNE",
    color: "text-white",
    dotColor: "bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]",
    borderColor: "border-white/20",
    align: "left",
    dotSize: "w-6 h-6",
  },
    {
    title: "SEMI FINALS",
    desc: "Demo day and awards ceremony at the Nexus Stage.",
    date: "JULY 6, ",
    color: "text-secondary",
    dotColor: "bg-secondary",
    borderColor: "border-secondary/20",
    align: "right",
    dotSize: "w-6 h-6",
  },
      {
    title: "FINALS",
    desc: "Demo day and awards ceremony at the Nexus Stage.",
    date: "JULY 20, ",
    color: "text-primary",
    dotColor: "bg-primary",
    borderColor: "border-primary/20",
    align: "left",
    dotSize: "w-7 h-7",
  },
];

export default function Timeline() {
  return (
    <section className="py-32 bg-slate-900/50 relative overflow-hidden" id="timeline">
      <div className="max-w-[1200px] mx-auto px-6">
                <div className="mb-12 flex flex-col items-center text-center">
  <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400 mb-3"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
    
  </p>
  <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
    Event <span className="text-blue-500">Timeline</span>
  </h2>
  <div className="h-px w-24 bg-gradient-to-r from-blue-600 to-blue-300 mt-5"></div>
</div>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-blue-300 opacity-30"></div>
          <div className="space-y-16">
            {events.map((event, i) => (
              <div key={i} className="relative flex flex-col md:flex-row items-center">
                {event.align === "right" ? (
                  <>
                    <div className="flex-1 md:text-right md:pr-16 order-2 md:order-1 w-full pl-20 md:pl-0">
                      <h4 className={`${event.color} font-headline font-black text-2xl uppercase`}>{event.title}</h4>
                      <p className="text-slate-400">{event.desc}</p>
                      <span className={`inline-block mt-2 font-bold text-xs bg-slate-800 px-2 py-1 border ${event.borderColor} text-slate-300`}>{event.date}</span>
                    </div>
                    <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 ${event.dotSize} ${event.dotColor} rotate-45 z-10 order-1`}></div>
                    <div className="flex-1 order-3 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 order-3 w-full pl-20 md:pl-16">
                      <h4 className={`${event.color} font-headline font-black text-2xl uppercase`}>{event.title}</h4>
                      <p className="text-slate-400">{event.desc}</p>
                      <span className={`inline-block mt-2 font-bold text-xs bg-slate-800 px-2 py-1 border ${event.borderColor} text-slate-300`}>{event.date}</span>
                    </div>
                    <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 ${event.dotSize} ${event.dotColor} rotate-45 z-10 order-1 md:order-2`}></div>
                    <div className="flex-1 md:text-right md:pr-16 order-2 hidden md:block"></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
