export type Project = {
  title: string;
  description: string;
  details: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
  category: string;
};

export const projects: Project[] = [
  {
    title: "ContactHub",
    description:
      "A modern contact management application focused on organizing and managing contacts through a clean and responsive interface.",
    details:
      "ContactHub is a contact management application built to organize and manage contact information through a clean and responsive user interface. The project focuses on component-based development, API integration, form handling, and creating a smooth user experience.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
    ],
    image: "/images/contacthub.jpg",
    github: "#",
    live: "#",
    category: "Web Application",
  },

  {
    title: "STODS",
    description:
      "Smart Transplant Organ Decision System, a graduation project designed to support organ transplantation workflows, matching, prioritization, and medical data management.",
    details:
      "STODS is my graduation project, designed as a smart decision-support system for organ transplantation. The system manages patients, donors, hospitals, transplant requests, medical information, and organ matching. It uses medical criteria and prioritization rules to support the transplant decision-making workflow.",
    technologies: [
      "Django",
      "Django REST Framework",
      "MySQL",
      "REST API",
    ],
    image: "/images/stods.jpg",
    github: "#",
    live: "#",
    category: "Graduation Project",
  },

  {
    title: "COSMOS Space Dashboard",
    description:
      "An interactive space dashboard that presents space-related information through a modern and responsive user interface.",
    details:
      "COSMOS is an interactive space dashboard that presents space-related information through a modern interface. The project focuses on consuming APIs, displaying dynamic data, creating responsive layouts, and building an engaging dashboard experience.",
    technologies: [
      "React",
      "JavaScript",
      "API",
      "Bootstrap",
    ],
    image: "/images/cosmos.jpg",
    github: "#",
    live: "#",
    category: "Dashboard",
  },
];
