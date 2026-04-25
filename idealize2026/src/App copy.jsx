import { useRef, useEffect, useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Categories from "./components/categories";
import Awards from "./components/Awards";
import Timeline from "./components/Timeline";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ScrollArrow from "./components/ScrollArrow";
import Countdown from "./components/countdown";
import Memories from "./components/memory";
const SECTIONS = ["hero", "about", "categories", "awards", "timeline", "partners", "faq"];

export default function App() {
  const containerRef = useRef(null);
  const sectionRefs = useRef({});
  const [activeSection, setActiveSection] = useState("hero");

  const registerRef = useCallback((id) => (el) => {
    if (el) sectionRefs.current[id] = el;
  }, []);

  const scrollToSection = useCallback((id) => {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollToNext = useCallback((currentId) => {
    const idx = SECTIONS.indexOf(currentId);
    if (idx < SECTIONS.length - 1) scrollToSection(SECTIONS[idx + 1]);
  }, [scrollToSection]);

  const scrollToTop = useCallback(() => scrollToSection(SECTIONS[0]), [scrollToSection]);

  useEffect(() => {
    const observers = [];
    SECTIONS.forEach((id) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { root: containerRef.current, threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="dark">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <div id="scroll-container" ref={containerRef}>

        <section className="snap-section" ref={registerRef("hero")}>
          <Hero />
          <Countdown/>
          <ScrollArrow onClick={() => scrollToNext("hero")} />
        </section>

        <section className="snap-section" ref={registerRef("about")}>
          <About />
          <ScrollArrow onClick={() => scrollToNext("about")} />
        </section>

        <section className="snap-section" ref={registerRef("categories")}>
          <Categories />
          <ScrollArrow onClick={() => scrollToNext("categories")} />
        </section>

        <section className="snap-section" ref={registerRef("awards")}>
          <Awards />
          <ScrollArrow onClick={() => scrollToNext("awards")} />
        </section>

        <section className="snap-section" ref={registerRef("timeline")}>
          <Timeline />
          <ScrollArrow onClick={() => scrollToNext("timeline")} />
        </section>

        <section className="snap-section" ref={registerRef("partners")}>
          <Memories />
          <ScrollArrow onClick={() => scrollToNext("partners")} />
        </section>
       <section className="snap-section" ref={registerRef("partners")}>
          <Sponsors />
          <ScrollArrow onClick={() => scrollToNext("partners")} />
        </section>
        <section className="snap-section-faq" ref={registerRef("faq")}>
          <FAQ />
          <Footer />
          <ScrollArrow isLast onClick={scrollToTop} />
        </section>
        

      </div>
    </div>
  );
}