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
    { label: "Sponsorships",     id: "partners" },
    { label: "Contact",          id: null },
    { label: "Privacy Policy",   id: null },
  ];

  const socials = [
    {
      label: "Facebook",
      href: "https://facebook.com",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/idealizelk/",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "X",
      href: "https://twitter.com",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://youtube.com",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <path d="M9.75 15.02 15.5 12l-5.75-3.02v6.04z" fill="white" />
        </svg>
      ),
    },
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
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          
          {/* Col 1 — Logo + tagline + socials */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection?.("hero")}
              className="text-lg font-black text-blue-400 uppercase italic tracking-tighter hover:text-blue-300 transition-colors text-left"
            >
              IDEALIZE 2026
            </button>
            <p className="text-xs text-slate-400 leading-relaxed">
              A national mobile app and web development competition
              organized by AIESEC in University of Moratuwa.
            </p>
            <div className="flex items-center gap-4 mt-1">
              {socials.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-slate-500 hover:text-blue-400 transition-colors duration-300"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-3">
              Quick Links
            </p>
            {quickLinks.map(({ label, id, href }) => (
              <button
                key={label}
                onClick={() => handleNav(id, href)}
                className={`text-sm text-left py-1 transition-colors duration-300 bg-none border-none cursor-pointer ${
                  label === "Register Now"
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-slate-400 hover:text-blue-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Col 3 — Contact Us */}
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-3">
              Contact Us
            </p>
            <div className="flex items-start gap-3 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mt-0.5 shrink-0">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-sm text-slate-400 leading-relaxed">
                University of Moratuwa, Katubedda, Moratuwa, Sri Lanka
              </span>
            </div>
            <div className="flex items-center gap-3 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 shrink-0">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a href="mailto:idealize@aiesec.lk" className="text-sm text-slate-400 hover:text-blue-300 transition-colors">
                idealize@aiesec.lk
              </a>
            </div>

          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-widest text-slate-600">
            © 2026 AIESEC in University of Moratuwa. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
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
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-blue-500 via-purple-500 to-blue-300 opacity-30" />
    </footer>
  );
}