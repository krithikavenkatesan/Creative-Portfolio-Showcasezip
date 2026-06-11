import { useEffect, useRef, useState } from "react";

const NAV_LINKS = ["Home", "About", "Projects", "Experience", "Blogs", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const linkRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.toLowerCase());
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(link); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const target = hovered ?? active;
    const el = linkRefs.current[target];
    if (el) {
      setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [hovered, active]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#FFF8F0]/90 backdrop-blur-md border-b border-[#E8457A]/10 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 group"
        >
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-extrabold shadow-sm"
            style={{ background: "linear-gradient(135deg, #E8457A, #FF6B35)" }}
          >
            K
          </span>
          <span className="text-[#1A1A1A] font-bold text-sm tracking-wide hidden sm:block">
            Krithika<span className="text-[#E8457A]">.</span>
          </span>
        </button>

        {/* Links with sliding indicator */}
        <div
          className="hidden md:flex items-center relative"
          onMouseLeave={() => setHovered(null)}
        >
          {/* Sliding pill indicator */}
          <span
            className="absolute bottom-0 h-[2px] rounded-full transition-all duration-200 pointer-events-none"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              background: "linear-gradient(90deg, #E8457A, #FF6B35)",
            }}
          />

          <div className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link;
              return (
                <button
                  key={link}
                  ref={(el) => { linkRefs.current[link] = el; }}
                  onClick={() => scrollTo(link.toLowerCase())}
                  onMouseEnter={() => setHovered(link)}
                  className="relative px-3 py-2 text-sm font-medium tracking-wide transition-all duration-200"
                  style={
                    isActive || hovered === link
                      ? {
                          background: "linear-gradient(90deg, #E8457A, #FF6B35)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          fontWeight: 600,
                        }
                      : { color: "rgba(26,26,26,0.55)", fontWeight: 500 }
                  }
                >
                  {link}
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
          className="hidden md:inline-flex items-center justify-center text-xs font-bold h-9 px-5 rounded-full text-white transition-opacity duration-200 hover:opacity-90"
          style={{ background: "linear-gradient(90deg, #E8457A, #FF6B35)" }}
        >
          Hire Me
        </a>

      </div>
    </nav>
  );
}
