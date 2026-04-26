export default function Footer({ scrollToSection }) {
  const quickLinks = [
    { label: "About Idealize", id: "about" },
    { label: "Categories",     id: "categories" },
    { label: "Awards",         id: "awards" },
    { label: "Timeline",       id: "timeline" },
    { label: "FAQ",            id: "faq" },
    { label: "Register Now",   id: null, href: "https://tally.so/r/Np4V0p" },
  ];

  const legalLinks = [
    { label: "Code of Conduct", id: null },
    { label: "Sponsorships",    id: "partners" },
    { label: "Contact",         id: null },
    { label: "Privacy Policy",  id: null },
  ];

  const handleNav = (id, href) => {
    if (href) { window.open(href, "_blank"); return; }
    if (id) scrollToSection?.(id);
  };

  return (
    <footer
      className="w-full relative overflow-hidden bg-slate-950 py-10"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <button
              onClick={() => scrollToSection?.("hero")}
              className="text-lg font-black text-blue-400 uppercase italic tracking-tighter hover:text-blue-300 transition-colors"
            >
              IDEALIZE 2026
            </button>
            <p className="text-[10px] tracking-widest uppercase text-slate-500">
              Building portals to the future,<br className="hidden md:block" /> one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {quickLinks.map(({ label, id, href }) => (
              <button
                key={label}
                onClick={() => handleNav(id, href)}
                className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-blue-300 transition-colors duration-300 bg-none border-none cursor-pointer"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Social + Copyright */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-4">
              {["language", "share", "mail"].map((icon) => (
                <span
                  key={icon}
                  className="material-symbols-outlined text-slate-500 hover:text-blue-400 cursor-pointer transition-colors text-xl"
                >
                  {icon}
                </span>
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-widest text-slate-600">
              © 2026 IDEALIZE. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent my-6" />

        {/* Legal links row */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {legalLinks.map(({ label, id }) => (
            <button
              key={label}
              onClick={() => handleNav(id, null)}
              className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-blue-300 transition-colors duration-300 bg-none border-none cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary via-secondary to-blue-300 opacity-30" />
    </footer>
  );
}