"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import Modal from "@/components/Modal";
import { ArrowRight } from "lucide-react";

export default function ServicesList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {service.title}
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.shortDescription}
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
                >
                  Contact Us
                </button>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book a Consultation"
      />
    </section>
  );
}
