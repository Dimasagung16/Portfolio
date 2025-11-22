import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative h-[calc(100vh-5rem)] min-h-[500px] w-full flex items-center justify-center text-center">
       <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white_10%,transparent_70%)] dark:bg-grid-slate-700/40"></div>
       <div className="container relative z-10 mx-auto flex flex-col items-center gap-6 px-4 md:px-6">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Crafting Digital Experiences
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
          A passionate developer and designer creating beautiful, functional, and user-centered digital products. Welcome to my creative canvas.
        </p>
        <Button size="lg" asChild>
          <a href="#projects">
            View My Work <MoveRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
