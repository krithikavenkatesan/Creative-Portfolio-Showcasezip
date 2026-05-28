import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = ["Home", "About", "Projects", "Experience", "Blogs", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#FFF8F0]/95 backdrop-blur-sm shadow-sm"
          : "py-5 bg-[#FFF8F0]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-end">
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className="text-[#1A1A1A]/65 text-sm font-semibold tracking-wide transition-all duration-200 hover:text-gradient-accent"
              style={{ fontWeight: 500 }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "linear-gradient(90deg, #E8457A, #FF6B35)";
                el.style.webkitBackgroundClip = "text";
                el.style.webkitTextFillColor = "transparent";
                el.style.backgroundClip = "text";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "";
                el.style.webkitBackgroundClip = "";
                el.style.webkitTextFillColor = "";
                el.style.backgroundClip = "";
              }}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
