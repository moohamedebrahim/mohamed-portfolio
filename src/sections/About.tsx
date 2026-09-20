import { ArrowUpRight, GraduationCap, MapPin, UserRound } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="border-t border-white/5 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A little about who I am.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          {/* About Text */}
          <div>
            <p className="text-base leading-8 text-white/60 sm:text-lg">
              I'm Mohamed Ebrahim, a Computer Science graduate and
              Front-End Developer based in Cairo, Egypt.
            </p>

            <p className="mt-5 text-base leading-8 text-white/50">
              I enjoy turning ideas and designs into responsive,
              accessible, and user-friendly web applications. My
              main focus is React and modern front-end development,
              while also having hands-on experience with backend
              technologies and REST APIs.
            </p>

            <p className="mt-5 text-base leading-8 text-white/50">
              I'm continuously improving my technical skills by
              building real projects, exploring modern technologies,
              and focusing on writing clean and maintainable code.
            </p>

            <a
              href="#projects"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Explore my projects

              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Info Cards */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <UserRound size={20} />
              </div>

              <h3 className="font-semibold text-white">
                Front-End Developer
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/40">
                React, TypeScript, JavaScript, Next.js and modern
                UI development.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <GraduationCap size={20} />
              </div>

              <h3 className="font-semibold text-white">
                Computer Science Graduate
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/40">
                Modern Academy — Bachelor of Computer Science,
                2026.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 sm:col-span-2 md:col-span-1">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <MapPin size={20} />
              </div>

              <h3 className="font-semibold text-white">
                Based in Cairo
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/40">
                Open to opportunities in Egypt and remote
                positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;