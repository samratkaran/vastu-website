import ReusableForm from "./ReusableForm";

export default function GetInTouchSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">
            Have a question or ready to transform your space? Fill out the form
            below and we will get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-lg border border-border p-8 md:p-10">
          <ReusableForm title={null} />
        </div>
      </div>
    </section>
  );
}
