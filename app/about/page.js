import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetInTouchSection from "@/components/GetInTouchSection";

export const metadata = {
  title: "About | VastuVidya - Vastu Shastra Consultant",
  description:
    "Learn about Pandit Arun Shastri, one of India's most experienced Vastu Shastra consultants with over 25 years of expertise.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 bg-cream-dark">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
            Ancient Wisdom, Modern Solutions
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/about.jpg"
                  alt="Pandit Arun Shastri - Vastu Consultant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-foreground">
                Pandit Arun Shastri
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                With over 25 years of dedicated practice in Vastu Shastra,
                Pandit Arun Shastri has established himself as one of the most
                trusted and sought-after Vastu consultants in India. His journey
                began under the guidance of renowned Vedic scholars, where he
                mastered the intricate principles of this ancient architectural
                science.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Having completed over 5,000 successful consultations across
                residential, commercial, and industrial properties, Pandit
                Shastri brings a wealth of practical experience combined with
                deep theoretical knowledge. His approach is rooted in authentic
                Vastu principles while being sensitive to the demands of modern
                architecture and contemporary living.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                He has been featured in leading newspapers, television channels,
                and has spoken at numerous national and international conferences
                on Vastu Shastra and its relevance in today&apos;s world. His mission
                is to make the wisdom of Vastu accessible to everyone, helping
                people create spaces that nurture health, wealth, and happiness.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-primary">25+</p>
                  <p className="text-sm text-muted-foreground">
                    Years Experience
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-primary">5000+</p>
                  <p className="text-sm text-muted-foreground">Consultations</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-primary">100+</p>
                  <p className="text-sm text-muted-foreground">Cities Covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetInTouchSection />
      <Footer />
    </main>
  );
}
