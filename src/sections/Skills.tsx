import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Server,
} from "lucide-react";

const skills = [
  {
    name: "Frontend",
    icon: Code2,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    name: "Backend",
    icon: Server,
    technologies: [
      "Node.js",
      "NestJS",
      "Django",
      "REST API",
      "Authentication",
    ],
  },
  {
    name: "Database",
    icon: Database,
    technologies: [
      "MongoDB",
      "MySQL",
      "Mongoose",
      "Database Design",
    ],
  },
  {
    name: "Tools",
    icon: GitBranch,
    technologies: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
    ],
  },
  {
    name: "Architecture",
    icon: Layers3,
    technologies: [
      "Component Architecture",
      "State Management",
      "API Integration",
      "Responsive Design",
    ],
  },
  {
    name: "Programming",
    icon: Braces,
    technologies: [
      "ES6+",
      "TypeScript",
      "OOP",
      "Data Structures",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-cyan-400">
            Tech Stack
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-4 text-base leading-7 text-white/50">
            A collection of technologies and tools I use to build
            modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-transform duration-300 group-hover:scale-105">
                    <Icon size={21} />
                  </div>

                  <span className="text-xs text-white/20">
                    0{skills.indexOf(skill) + 1}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-white/50 transition-colors group-hover:border-white/15 group-hover:text-white/70"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;