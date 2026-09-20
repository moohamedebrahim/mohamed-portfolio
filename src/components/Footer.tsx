import { ArrowUp, Code2 } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-white transition-colors hover:text-cyan-400"
        >
          <Code2 size={18} className="text-cyan-400" />

          <span className="text-sm font-semibold">
            Mohamed<span className="text-cyan-400"></span>
          </span>
        </a>

        {/* Copyright */}
        <p className="text-center text-xs text-white/30">
          © {currentYear} Mohamed Ebrahim. All rights reserved.
        </p>

        {/* Back to Top */}
        <a
          href="#home"
          aria-label="Back to top"
          className="flex h-9 w-9 items-center justify-center self-center rounded-lg border border-white/10 text-white/40 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400 sm:self-auto"
        >
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;