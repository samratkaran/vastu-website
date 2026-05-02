import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetInTouchSection from "@/components/GetInTouchSection";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | Vastu Energy Healing - Get In Touch",
  description:
    "Contact us for Vastu Shastra consultation. Reach out via phone, email, or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 bg-cream-dark">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
            Get In Touch
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to transform your space? Reach out to us for a consultation or
            any questions about our Vastu services.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">Phone</h3>
            <p className="text-sm text-muted-foreground">+91 9971427777</p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">anilwatts777@gmail.com</p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">Location</h3>
            <p className="text-sm text-muted-foreground">Gurugram, India</p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">Hours</h3>
            <p className="text-sm text-muted-foreground">Mon - Sun: 9AM - 9PM</p>
          </div>
        </div>
      </section>

      <GetInTouchSection />
      <Footer />
    </main>
  );
}
