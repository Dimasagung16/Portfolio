import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const skills = [
  'Bidang Olahraga',
  'Cinematic',
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
            Saya dimas saya suka dalam bidang membuat vidio vidio cinematic ataupun fotografer dan juga dalam bidang olahraga seperti sepak bola
          </p>
          <p className="text-base text-muted-foreground md:text-lg">
            Perjalanan saya di dunia teknologi didorong oleh rasa ingin tahu dan keinginan untuk memecahkan masalah di dunia nyata. Saat tidak sedang membuat kode, Anda dapat menemukan saya menjelajahi tren desain baru, berkontribusi pada proyek sumber terbuka, atau menikmati secangkir kopi yang nikmat.
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
