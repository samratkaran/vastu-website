"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-brown-dark/70" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20 max-w-3xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gold shadow-xl">
            <Image
              src="/images/profile.png"
              alt="Vastu Consultant Profile"
              fill
              className="object-cover"
              sizes="160px"
              priority
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-4 text-balance">
          Dr. Anil Watts
        </h1>

        <p className="text-lg md:text-xl text-cream/80 mb-3 font-medium">
          Senior Vastu, Energy & Paranormal Consultant 
        </p>

        <p className="text-base text-cream/60 max-w-xl mx-auto mb-10 leading-relaxed">
        Energy and Paranormal Consultant with more than 21 years of professional experience in Vastu Shastra, earth energy sciences, geopathic stress correction and EMF analysis. He is known for his scientific, research-based and non-destructive approach to Vastu and energy balancing.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity text-base"
        >
          Contact Us Now
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book a Consultation"
      />
    </section>
  );
}
