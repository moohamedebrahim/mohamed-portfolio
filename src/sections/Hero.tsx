import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr]">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 flex items-center gap-3 text-sm font-medium text-cyan-400">
            <span className="h-px w-8 bg-cyan-400" />
            React Developer
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Building modern
            <span className="block text-white/40">web experiences.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            I'm Mohamed Ebrahim, a Computer Science graduate and Front-End
            Developer focused on building clean, responsive, and user-friendly
            web applications with React, TypeScript, and modern web
            technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#08090b] transition-transform duration-200 hover:scale-[1.02]"
            >
              View My Work
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/cv/Mohamed_Ebrahim_CV.pdf"
              download
              className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm font-semibold text-cyan-300 transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/5"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-5">
            {/* GitHub */}
            <a
              href="https://github.com/moohamedebrahim"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-white/40 transition-colors hover:text-white"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.004-.404c1.02.005 2.045.138 3.004.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.624-5.475 5.92.43.372.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohamed-ebrahim-53a6193a9/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-white/40 transition-colors hover:text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.32ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45h3.56V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>

            <span className="h-5 w-px bg-white/10" />

            <span className="text-xs text-white/30">
              Cairo, Egypt
            </span>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Outer Glow */}
            <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/5 blur-2xl" />

            {/* Border */}
            <div className="absolute -inset-4 rounded-3xl border border-cyan-400/10 transition-colors duration-500 hover:border-cyan-400/30" />

            {/* Image */}
            <div className="relative h-72 w-72 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] sm:h-80 sm:w-80">
              <img
                src="/images/profile.jpg"
                alt="Mohamed Ebrahim"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/60 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown size={15} />
      </motion.a>
    </section>
  );
}

export default Hero;
