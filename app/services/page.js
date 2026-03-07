import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesList from "./ServicesList";

export const metadata = {
  title: "Services | VastuVidya - Expert Vastu Consultation Services",
  description:
    "Explore our comprehensive range of Vastu Shastra consultation services including residential, commercial, industrial Vastu, and more.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 bg-cream-dark">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
            Expert Vastu Solutions
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From residential homes to large industrial complexes, we offer
            comprehensive Vastu consultation services tailored to your specific
            needs.
          </p>
        </div>
      </section>

      <ServicesList />
      <Footer />
    </main>
  );
}
