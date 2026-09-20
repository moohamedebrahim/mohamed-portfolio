import { ExternalLink, X } from "lucide-react";

import type { Project } from "../data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0d0f12] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#08090b]/80 text-white/60 backdrop-blur-md transition-colors hover:border-white/20 hover:text-white"
        >
          <X size={18} />
        </button>

        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-white/[0.03]">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <span className="text-xs font-medium uppercase tracking-wider text-cyan-400">
            {project.category}
          </span>

          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {project.title}
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
            {project.details}
          </p>

          {/* Technologies */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-white">
              Technologies
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 px-4 py-2.5 text-sm text-white/70 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              View on GitHub
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-[#08090b] transition-transform hover:scale-[1.02]"
            >
              Live Demo
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
