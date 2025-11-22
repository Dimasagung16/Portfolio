import { ProjectCard } from './project-card';
import type { Project } from './project-card';

const projectsData: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with a modern UI, product management, and a secure checkout process.',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'Firebase'],
    imageId: 'project-1',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A responsive task management app designed to boost productivity with an intuitive and clean interface.',
    tags: ['React', 'Framer Motion', 'Node.js'],
    imageId: 'project-2',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'A data visualization dashboard providing real-time insights and analytics for business intelligence.',
    tags: ['SvelteKit', 'D3.js', 'PostgreSQL'],
    imageId: 'project-3',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills, built with a focus on design and performance.',
    tags: ['Gatsby', 'GraphQL', 'Styled Components'],
    imageId: 'project-4',
    liveUrl: '#',
    sourceUrl: '#',
  },
];

export function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground md:text-5xl">
            Selected Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            A glimpse into my world of code and design.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
