import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const skills = [
  'UI/UX Design',
  'Web Development',
  'React & Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Figma',
  'Node.js',
  'Firebase',
];

export function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-me');

  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6 lg:gap-20">
        <div className="relative mx-auto w-full max-w-sm">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              width={500}
              height={500}
              className="rounded-full aspect-square object-cover shadow-lg border-4 border-background"
              data-ai-hint={aboutImage.imageHint}
            />
          )}
        </div>
        <div className="flex flex-col items-start gap-6">
          <h2 className="font-headline text-4xl font-bold text-foreground md:text-5xl">
            About Me
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Hello! I&apos;m a creative developer with a passion for building elegant and effective web applications. With a background in both design and engineering, I bridge the gap between aesthetics and functionality to deliver seamless user experiences.
          </p>
          <p className="text-base text-muted-foreground md:text-lg">
            My journey in tech is driven by curiosity and a desire to solve real-world problems. When I&apos;m not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying a good cup of coffee.
          </p>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">My Skillset</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
