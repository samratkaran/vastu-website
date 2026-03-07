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
              src="/images/profile.jpg"
              alt="Vastu Consultant Profile"
              fill
              className="object-cover"
              sizes="160px"
              priority
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-4 text-balance">
          Pandit Arun Shastri
        </h1>

        <p className="text-lg md:text-xl text-cream/80 mb-3 font-medium">
          Vastu Shastra Consultant & Spiritual Guide
        </p>

        <p className="text-base text-cream/60 max-w-xl mx-auto mb-10 leading-relaxed">
          With over 25 years of experience in Vastu Shastra, I help transform
          your living and working spaces to attract positive energy, prosperity,
          and harmony into your life.
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
