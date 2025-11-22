import { ContactForm } from './contact-form';

export function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground md:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
