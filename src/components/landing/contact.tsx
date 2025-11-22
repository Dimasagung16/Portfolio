import { ContactForm } from './contact-form';

export function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground md:text-5xl">
            Hubungi Saya
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Ada proyek yang ingin didiskusikan atau hanya ingin menyapa? Saya akan senang mendengar dari Anda.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
