import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MediaCarousel from "@/components/MediaCarousel";
import { mediaItems } from "@/data/media";

export const metadata = {
  title: "Media | VastuVidya - Media Appearances & Coverage",
  description:
    "Browse our media appearances, TV features, workshops, and publications on Vastu Shastra.",
};

export default function MediaPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 bg-cream-dark">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
            Media
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
            In the Spotlight
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore our media coverage, television appearances, workshops, and
            publications that showcase our expertise in Vastu Shastra.
          </p>
        </div>
      </section>

      {/* Carousel */}
      <MediaCarousel />

      {/* Media Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary/20">
                    {item.type.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
