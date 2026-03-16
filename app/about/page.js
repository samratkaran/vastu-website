import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetInTouchSection from "@/components/GetInTouchSection";

export const metadata = {
  title: "About | Vastu Energy Healing - Vastu Shastra Consultant",
  description:
    "Learn about Dr. Anil watts, one of India's most experienced Vastu Shastra consultants with over 25 years of expertise.",
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
             

Dr. Watts completed Vastu Prabhakar from AAIFA and later earned a Ph.D. in Astro-Vastu. To further expand his expertise, he studied Energy Sciences in Poland, gaining advanced knowledge of earth and subtle energy systems.
Over the years, he has successfully completed 7,000+ residential, commercial, industrial, hospital and hospitality projects across India, Europe and the United States. His consultation process includes advanced energy scanning of plots and buildings using specialized international instruments, allowing precise identification and correction of negative earth energies.

              </p>
              <p className="text-muted-foreground leading-relaxed">
                A graduate of Delhi University, Dr. Watts began his career in administration and facilities management, working at senior positions in reputed organizations. During his corporate career, he observed that many operational and performance challenges were closely linked to Vastu defects and disturbed earth energies. By applying practical Vastu principles and energy corrections, he successfully resolved several workplace and environmental issues.

              </p>
              <p className="text-muted-foreground leading-relaxed">
               In 2005, while serving as General Manager at Jagatjit Udyog, he conducted deeper research into the relationship between environment, energy fields and human well-being. Consistent positive results encouraged him to dedicate himself fully to the field of Vastu and Energy Sciences.
              </p>

           

              {/* Stats */}
          
            </div>
          </div>

          <div className="w-100 mt-5"> 
          


<p className="text-muted-foreground leading-relaxed mt-5 ">Dr. Watts’ research highlights the impact of Geopathic Stress and disturbed earth energies on health, mental balance, productivity and prosperity. His proven techniques help neutralize these negative influences and create balanced, harmonious environments.</p>

<p className="text-muted-foreground leading-relaxed mt-5">His work has been widely recognized, earning him 9 awards and a Gold Medal from national and international organizations in the fields of Vastu, Astrology and Energy Sciences.</p>

<p className="text-muted-foreground leading-relaxed mt-5">In 2022, he conducted specialized research at Bhangarh to study paranormal energy patterns. He has since helped resolve several cases of paranormal and unexplained energy disturbances, restoring stability and peace in affected properties.</p>

 <ul style={{listStyle:"circle"}} className="mt-5" >
                <li className="text-muted-foreground leading-relaxed">
                 Plot energy scanning before construction </li>
<li className="text-muted-foreground leading-relaxed"> Geopathic Stress & underground water lines</li>
<li className="text-muted-foreground leading-relaxed">Earth energy and vibration correction</li>
<li className="text-muted-foreground leading-relaxed">Telluric energy analysis</li>
<li className="text-muted-foreground leading-relaxed">EMF (Electromagnetic Field) testing with graphical reports</li>
<li className="text-muted-foreground leading-relaxed">Non-destructive Vastu remedies (without structural changes)</li>

               
                
                 
              </ul>

<h2 className="text-2xl font-serif font-bold text-foreground mt-5 mb-3">Our Approach</h2>
<ul style={{listStyle:"circle"}} >
<li className="text-muted-foreground leading-relaxed">Scientific & Energy-Based Analysis</li>
<li className="text-muted-foreground leading-relaxed">Advanced Testing Instruments</li>
<li className="text-muted-foreground leading-relaxed">Non-Destructive Remedies</li>
<li className="text-muted-foreground leading-relaxed">Practical & Result-Oriented Solutions</li>
</ul>

<h2 className="text-2xl font-serif font-bold text-foreground mt-5 mb-3">Marriage Mandap Vastu</h2>
<p className="text-muted-foreground leading-relaxed">Dr. Watts also specializes in designing and setting up marriage mandaps according to Vastu, ensuring positive energy flow for harmony, prosperity and a blessed beginning for the couple.</p>






    <div className="grid grid-cols-3 gap-6 pt-5 mt-5 ">
                <div className="text-center">
                  <p className="text-6xl font-serif font-bold text-primary">25+</p>
                  <p className="pt-1 text-muted-foreground">
                    Years Experience
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-6xl font-serif font-bold text-primary">5000+</p>
                  <p className="pt-1 text-muted-foreground">Consultations</p>
                </div>
                <div className="text-center">
                  <p className="text-6xl font-serif font-bold text-primary">100+</p>
                  <p className="pt-1 text-muted-foreground">Cities Covered</p>
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
