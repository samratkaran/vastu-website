"use client";

import { ShoppingBag } from "lucide-react";

export default function ProductCard({ product }) {
  const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
    `Hey I want to buy this ${product.name}`
  )}`;

  return (
    <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-square bg-muted flex items-center justify-center">
        <ShoppingBag size={48} className="text-primary/30" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            {"₹"}{product.price.toLocaleString("en-IN")}
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
