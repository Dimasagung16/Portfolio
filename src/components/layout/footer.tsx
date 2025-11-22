import { Github, Linkedin, Twitter, Feather } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Feather className="h-5 w-5 text-primary" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Dimas Agung. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
