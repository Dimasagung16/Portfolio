import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const skills = [
  'Bidang Olahraga',
  'vidioediting',
  'Mencari rupiah',
  'Figma',
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
            Tentang Saya
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Hello nama saya dimas saya lulusan SMA dan sekarang saya bekerja di salah satu perusahan yang bergerak dibidang cosmetic,parfum,roko dan lainnya dan juga saya suka dalam bidang editing atau membuat vidio vdio cinematic
          </p>
          <p className="text-base text-muted-foreground md:text-lg">
            Dan Hobi  saya suka dalam bidang olahraga seperti sepakbola,basket,tenis meja,padel dan lainnya
          </p>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Keahlian Saya</h3>
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
