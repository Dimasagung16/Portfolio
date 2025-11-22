import { EnhanceForm } from './enhance-form';
import { Wand2 } from 'lucide-react';

export function EnhanceTool() {
  return (
    <section id="ai-tool" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <Wand2 className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="font-headline text-4xl font-bold text-foreground md:text-5xl">
            Description Enhancer
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Struggling with words? Let our AI assistant help you write more engaging project descriptions that capture attention.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <EnhanceForm />
        </div>
      </div>
    </section>
  );
}
