import { useState } from "react";

const faqs = [
  {
    num: "01.",
    color: "text-primary",
    hoverBorder: "hover:border-primary/50",
    question: "What is the team size capacity?",
    answer: "Teams must consist of 2 to 4 members. Lone wolves are encouraged to utilize our Dimension Sync (team-matching) event on the first day to find their squad.",
  },
  {
    num: "02.",
    color: "text-secondary",
    hoverBorder: "hover:border-secondary/50",
    question: "Who is eligible to participate?",
    answer: "Any resident of this dimension (or others) currently enrolled in a university or who has graduated within the last 12 months. All skill levels—from prompt engineers to kernel hackers—are welcome.",
  },
  {
    num: "03.",
    color: "text-blue-300",
    hoverBorder: "hover:border-blue-300/50",
    question: "What are the primary ground rules?",
    answer: "All code must be written during the 48-hour hackathon period. Use of open-source libraries and AI tools is permitted, but the core 'glitch' must be original work. Respect the canon, but don't be afraid to break it.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-32 relative" id="faq">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="flex items-center gap-4 mb-16 border-b border-slate-800 pb-4">
          <div className="w-3 h-3 bg-primary animate-pulse"></div>
          <h2 className="font-headline font-black text-4xl uppercase italic tracking-tighter">FAQ</h2>
          <span className="ml-auto text-slate-500 font-mono text-xs"></span>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`group bg-slate-900/50 border border-slate-800/50 ${faq.hoverBorder} transition-colors`}
            >
              <button
                className="flex items-center justify-between p-6 w-full text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-center gap-4">
                  <span className={`${faq.color} font-mono text-xs`}>{faq.num}</span>
                  <span className="font-bold uppercase tracking-widest text-sm text-slate-200">{faq.question}</span>
                </div>
                <span className={`material-symbols-outlined text-slate-500 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}>
                  keyboard_arrow_down
                </span>
              </button>
              {open === i && (
                <div className="px-16 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/30 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 p-4 bg-slate-900 border-l-4 border-primary flex items-center gap-4">
          <span className="material-symbols-outlined text-primary">terminal</span>
          <p className="text-xs font-mono text-slate-500 uppercase">
            Still have queries?{" "}
            <a className="text-primary hover:underline" href="#">Open a support ticket</a>
          </p>
        </div>
      </div>
    </section>
  );
}
