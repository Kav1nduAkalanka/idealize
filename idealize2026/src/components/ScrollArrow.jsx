export default function ScrollArrow({ onClick, isLast = false }) {
  return (
    <button
      onClick={onClick}
      className="scroll-arrow group"
      aria-label={isLast ? "Scroll to top" : "Scroll to next section"}
    >
      <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold group-hover:text-primary transition-colors">
        {isLast ? "Top" : "Next"}
      </span>
      <span
        className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors text-2xl"
      >
        {isLast ? "keyboard_arrow_up" : "keyboard_arrow_down"}
      </span>
    </button>
  );
}
