const tiers = [
  {
    label: "Gold Partner",
    cols: "grid-cols-1",
    cardClass: "h-24 px-20",
    imgClass: "max-h-12",
    sponsors: [
      { src: "/partnership-logos/creative-software.png", name: "Creative Software" },
    ],
  },
  {
    label: "Venue Partner",
    cols: "grid-cols-1",
    cardClass: "h-24 px-20",
    imgClass: "max-h-12",
    sponsors: [
      { src: "/partnership-logos/virtusa.png", name: "Virtusa" },
    ],
  },
  {
    label: "Silver Partners",
    cols: "grid-cols-2",
    cardClass: "h-20 px-10",
    imgClass: "max-h-10",
    sponsors: [
      { src: "/partnership-logos/advania.jpg",            name: "Advania" },
      { src: "/partnership-logos/asiri-construction.png", name: "Asiri Construction" },
    ],
  },
  {
    label: "Outreach Partner",
    cols: "grid-cols-1",
    cardClass: "h-20 px-10",
    imgClass: "max-h-10",
    sponsors: [
      { src: "/partnership-logos/dsc.png", name: "DSC" },
    ],
  },
  {
    label: "Banner Partners",
    cols: "grid-cols-2",
    cardClass: "h-18 px-6",
    imgClass: "max-h-9",
    sponsors: [
      { src: "/partnership-logos/antyra-solutions.png", name: "Antyra Solutions" },
      { src: "/partnership-logos/expo-airline.jpg",     name: "Expo Airline" },
    ],
  },
  {
    label: "Technology Partners",
    cols: "grid-cols-2",
    cardClass: "h-18 px-6",
    imgClass: "max-h-9",
    sponsors: [
      { src: "/partnership-logos/guardian-solutions.jpg", name: "Guardian Solutions" },
      { src: "/partnership-logos/red-line.jpg",           name: "Red Line" },
    ],
  },
  {
    label: "Session Partner",
    cols: "grid-cols-1",
    cardClass: "h-18 px-6",
    imgClass: "max-h-9",
    sponsors: [
      { src: "/partnership-logos/bistec.jpg", name: "Bistec Global" },
    ],
  },
  {
    label: "Other Partners",
    cols: "grid-cols-5",
    cardClass: "h-14 px-3",
    imgClass: "max-h-7",
    sponsors: [
      { src: "/partnership-logos/pearl-bay.png",      name: "Pearl Bay" },
      { src: "/partnership-logos/booktainer-co.jpg",  name: "Booktainer Co" },
      { src: "/partnership-logos/iconic-bags.jpg",    name: "Iconic Bags" },
      { src: "/partnership-logos/photographer.png",   name: "Photographer" },
      { src: "/partnership-logos/chokolaate.png",     name: "Chokolaate" },
      { src: "/partnership-logos/colombo-times.jpg",  name: "Colombo Times" },
      { src: "/partnership-logos/daily-mirror.jpg",   name: "Daily Mirror" },
      { src: "/partnership-logos/pr-wire.png",        name: "PR Wire" },
      { src: "/partnership-logos/sunday-times.jpg",   name: "The Sunday Times" },
      { src: "/partnership-logos/uni-today.png",      name: "UNI Today" },
      { src: "/partnership-logos/good-pr.png",        name: "Good PR" },
      { src: "/partnership-logos/hacksl.png",         name: "HackSL" },
      { src: "/partnership-logos/mora-lenz.png",      name: "Mora Lenz" },
    ],
  },
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

      </div>
    </section>
  );
}