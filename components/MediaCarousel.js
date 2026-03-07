"use client";

import { useState, useEffect, useCallback } from "react";
import { mediaItems } from "@/data/media";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MediaCarousel() {
  const [current, setCurrent] = useState(0);
  const total = mediaItems.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-20 px-6 bg-cream-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
            Media
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            In the Spotlight
          </h2>
        </div>

        <div className="relative bg-card rounded-lg shadow-sm border border-border overflow-hidden">
          <div className="aspect-[16/9] bg-muted flex items-center justify-center">
            <div className="text-center px-8">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                {mediaItems[current].type}
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground">
                {mediaItems[current].title}
              </h3>
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-card shadow-md transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-card shadow-md transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {mediaItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
