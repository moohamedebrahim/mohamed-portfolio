import {
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
} from "lucide-react";

const experiences = [
  {
    type: "Training",
    title: "Front-End Development Training",
    company: "Khalda Petroleum",
    period: "Training",
    description:
      "Gained practical experience in web development and worked with modern front-end technologies while applying programming concepts to real-world tasks.",
    icon: BriefcaseBusiness,
  },
  {
    type: "Training",
    title: "Front-End Development Programs",
    company: "Intensive Training Programs",
    period: "2025 – 2026",
    description:
      "Completed intensive training focused on HTML, CSS, JavaScript, React, TypeScript, responsive design, API integration, and modern front-end development.",
    icon: BriefcaseBusiness,
  },
  {
    type: "Education",
    title: "Bachelor of Computer Science",
    company: "Modern Academy",
    period: "2022 – 2026",
    description:
      "Studied computer science fundamentals, software development, databases, programming, and web technologies. Developed a graduation project focused on smart organ transplantation decision support.",
    icon: GraduationCap,
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/5 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-cyan-400">
            Experience & Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My learning journey.
          </h2>

          <p className="mt-4 text-base leading-7 text-white/50">
            A timeline of my education, training, and practical
            experience in software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-0 bottom-0 left-5 hidden w-px bg-white/10 sm:block" />

          <div className="space-y-8">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <article
                  key={`${experience.title}-${experience.company}`}
                  className="relative sm:pl-14"
                >
                  {/* Timeline Icon */}
                  <div className="absolute top-0 left-0 hidden h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-[#08090b] text-cyan-400 sm:flex">
                    <Icon size={18} />
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04] sm:p-7">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                          {experience.type}
                        </span>

                        <h3 className="mt-2 text-xl font-semibold text-white">
                          {experience.title}
                        </h3>

                        <p className="mt-1 text-sm text-white/50">
                          {experience.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-white/30">
                        <CalendarDays size={14} />
                        {experience.period}
                      </div>
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-7 text-white/45">
                      {experience.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;