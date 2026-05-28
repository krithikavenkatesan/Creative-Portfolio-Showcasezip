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
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className="text-[#1A1A1A]/70 hover:text-primary transition-colors text-xs font-medium tracking-wide uppercase"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
