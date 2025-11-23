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
    title: 'Contoh gambar',
    description: 'Contoh Project Gambar Yang pernah saya buat',
    tags: ['Fotoshop', 'Canva', 'Figma', 'Capcut'],
    imageId: 'project-2',
    liveUrl: 'https://res.cloudinary.com/dj2qvrrvk/image/upload/v1763821723/5cf8141f-5d47-4821-91d6-320badd70bd7_ap5m0k.jpg',
    sourceUrl: '#',
  },
  {
    title: 'Contoh gambar',
    description: 'contoh project gambar',
    tags: ['Canva', 'Photoroom', 'Alight motion', 'Lightroom'],
    imageId: 'project-3',
    liveUrl: 'https://res.cloudinary.com/dj2qvrrvk/image/upload/v1763886679/40cf42ce-f854-4b42-900f-516adfa97ad8_kxtgba.jpg',
    sourceUrl: '#',
  },
  {
    title: 'Hobi',
    description: 'Hobi saya suka adalah sepakbola,saya pernah masuk akademi persib ,dan mengikuti turnamen turnamen',
    tags: ['olahraga'],
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
