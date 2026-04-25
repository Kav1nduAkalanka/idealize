export default function Footer() {
  const links = ["Code of Conduct", "Sponsorships", "Contact", "Privacy Policy"];

  return (
    <footer className="w-full relative overflow-hidden bg-slate-950 py-10">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      <div className="max-w-[1200px] mx-auto px-6">

        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-lg font-black text-blue-400 uppercase italic tracking-tighter"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              IDEALIZE 2026
            </div>
            <p className="text-[10px] tracking-widest uppercase text-slate-500"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Building portals to the future,<br className="hidden md:block" /> one line of code at a time.
            </p>
          </div>

          {/* Links — centered */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {links.map((link) => (
              <a key={link} href="#"
                className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-blue-300 transition-colors duration-300"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {link}
              </a>
            ))}
          </div>

          {/* Copyright — right aligned on desktop */}
          <div className="flex flex-col items-center md:items-end gap-3">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {["language", "share", "mail"].map((icon) => (
                <span key={icon}
                  className="material-symbols-outlined text-slate-500 hover:text-blue-400 cursor-pointer transition-colors text-xl">
                  {icon}
                </span>
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-widest text-slate-600"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              © 2026 IDEALIZE. ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary via-secondary to-blue-300 opacity-30"></div>
    </footer>
  );
}