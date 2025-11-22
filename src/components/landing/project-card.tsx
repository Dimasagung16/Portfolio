import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, Github } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageId: string;
  liveUrl: string;
  sourceUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, imageId, liveUrl, sourceUrl } = project;
  const projectImage = PlaceHolderImages.find((img) => img.id === imageId);

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {projectImage && (
        <div className="aspect-video overflow-hidden">
          <Image
            src={projectImage.imageUrl}
            alt={projectImage.description}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            data-ai-hint={projectImage.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="ghost" asChild>
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Sumber
          </a>
        </Button>
        <Button asChild>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Demo Langsung
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
