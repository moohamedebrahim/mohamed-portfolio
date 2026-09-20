import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";

import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]">
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-white/[0.03]">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        {/* Image Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090b]/70 via-transparent to-transparent opacity-70" />

        {/* Category */}
        <div className="absolute top-4 left-4 rounded-full border border-white/10 bg-[#08090b]/80 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur-md">
          {project.category}
        </div>

        {/* Hover Icon */}
        <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#08090b]/70 text-white/50 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight size={17} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-cyan-300">
            {project.title}
          </h3>
        </div>

        <p className="mt-4 min-h-[72px] text-sm leading-6 text-white/45">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-white/50 transition-colors duration-200 group-hover:border-white/15 group-hover:text-white/70"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
          <a
            href={project.github}
            onClick={(event) => event.stopPropagation()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm text-white/60 transition-all duration-200 hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            <Code2 size={16} />
            GitHub
          </a>

          <a
            href={project.live}
            onClick={(event) => event.stopPropagation()}
            target="_blank"
            rel="noreferrer"
            className="group/live inline-flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-3.5 py-2 text-sm text-cyan-400 transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            <ExternalLink
              size={16}
              className="transition-transform duration-200 group-hover/live:translate-x-0.5"
            />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
