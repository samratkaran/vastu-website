import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "Products | VastuVidya - Vastu Products & Remedies",
  description:
    "Shop authentic Vastu products including pyramids, yantras, crystals, and more for spiritual harmony.",
};

export default function ProductsPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 bg-cream-dark">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
            Shop
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
            Vastu Products
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore our curated collection of authentic Vastu products to
            enhance the positive energy in your home and workplace.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
