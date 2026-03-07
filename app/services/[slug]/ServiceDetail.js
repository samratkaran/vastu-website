"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Modal from "@/components/Modal";

export default function ServiceDetail({ service }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 bg-cream-dark">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity mb-6"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 md:p-12 shadow-sm border border-border">
            <p className="text-muted-foreground leading-relaxed text-base mb-8">
              {service.description}
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                Ready to get started?
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Book a consultation today and let us help you create a space
                aligned with Vastu principles for maximum harmony and
                prosperity.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity"
              >
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Book ${service.title} Consultation`}
      />
    </>
  );
}
