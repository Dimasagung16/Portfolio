import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative h-[calc(100vh-5rem)] min-h-[500px] w-full flex items-center justify-center text-center">
       <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white_10%,transparent_70%)] dark:bg-grid-slate-700/40"></div>
       <div className="container relative z-10 mx-auto flex flex-col items-center gap-6 px-4 md:px-6">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Menciptakan Pengalaman Digital
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
          Seorang pengembang dan desainer yang bersemangat menciptakan produk digital yang indah, fungsional, dan berpusat pada pengguna. Selamat datang di kanvas kreatif saya.
        </p>
        <Button size="lg" asChild>
          <a href="#projects">
            Lihat Karya Saya <MoveRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
