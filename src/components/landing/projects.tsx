import { ProjectCard } from './project-card';
import type { Project } from './project-card';

const projectsData: Project[] = [
  {
    title: 'Vidio CInematic',
    description: 'Video sinematik yang menampilkan berbagai momen dengan sentuhan artistik.',
    tags: ['Videografi', 'Sinematik', 'Editing'],
    imageId: 'project-1',
    liveUrl: 'https://res.cloudinary.com/dj2qvrrvk/video/upload/v1763822280/WhatsApp_Video_2025-11-22_at_21.05.04_enpxcb.mp4',
    sourceUrl: '#',
  },
  {
    title: 'Aplikasi Manajemen Tugas',
    description: 'Aplikasi manajemen tugas responsif yang dirancang untuk meningkatkan produktivitas dengan antarmuka yang intuitif dan bersih.',
    tags: ['React', 'Framer Motion'],
    imageId: 'project-2',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Dasbor Analitik',
    description: 'Dasbor visualisasi data yang menyediakan wawasan dan analitik real-time untuk kecerdasan bisnis.',
    tags: ['SvelteKit', 'D3.js', 'PostgreSQL'],
    imageId: 'project-3',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Situs Web Portofolio',
    description: 'Situs web portofolio pribadi untuk memamerkan proyek dan keahlian saya, dibuat dengan fokus pada desain dan kinerja.',
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
            Proyek Pilihan
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Ini Project Yang pernah saya buat
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
