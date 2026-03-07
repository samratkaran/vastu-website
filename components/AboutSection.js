import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about.jpg"
                alt="Vastu Consultant studying architectural plans"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-balance">
              Ancient Wisdom for Modern Living
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pandit Arun Shastri is one of India&apos;s most respected Vastu Shastra
              consultants with over 25 years of experience. Having studied under
              renowned scholars and extensively researched ancient Vedic texts, he
              brings a unique blend of traditional wisdom and modern practicality
              to every consultation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over 5,000 successful consultations across residential,
              commercial, and industrial spaces, his expertise has helped clients
              across India and abroad transform their spaces and lives. His
              approach combines deep knowledge of Vastu principles with a
              practical understanding of contemporary architecture.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
