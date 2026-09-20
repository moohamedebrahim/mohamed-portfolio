import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let currentSection = "home";

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#08090b]/80 backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-2 text-white"
          >
            <Code2 className="h-6 w-6 text-cyan-400" />

            <span className="text-lg font-bold tracking-tight">
              Mohamed<span className="text-cyan-400"></span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-cyan-400"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <span className="absolute right-0 bottom-0 left-0 h-px bg-cyan-400" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-200 hover:border-cyan-400/60 hover:bg-cyan-400/20 md:block"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="rounded-lg border border-white/10 p-2 text-white/70 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-white/10 py-5 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`rounded-lg px-4 py-3 text-sm transition-colors ${
                      isActive
                        ? "bg-cyan-400/10 text-cyan-400"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-[#08090b]"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
