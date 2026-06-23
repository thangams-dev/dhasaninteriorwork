import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChefHat, Droplets, Sparkles, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/modular-kitchen-coimbatore")({
  head: () => ({
    meta: [
      { title: "Modular Kitchen Coimbatore | Modular Kitchen Design & Installation" },
      { name: "description", content: "Modern modular kitchens in Coimbatore. L, U, parallel layouts. Marine ply, PVC finishes. Free design, installation. Starting ₹1.5L. Call now." },
      { name: "keywords", content: "modular kitchen Coimbatore, kitchen design Coimbatore, modular kitchens, kitchen cabinet design, PVC kitchen, kitchen renovation, kitchen remodeling, custom kitchen design, affordable kitchens, luxury kitchens, kitchen installation" },
    ],
    links: [
      { rel: "canonical", href: "https://www.dhasankitchenandinteriors.in/modular-kitchen-coimbatore" },
    ],
  }),
  component: ModularKitchenPage,
});

function ModularKitchenPage() {
  const layouts = [
    { title: "L-Shaped Kitchen", desc: "Perfect for corner spaces, great for two-person workflow" },
    { title: "U-Shaped Kitchen", desc: "Maximum storage and workspace, ideal for large families" },
    { title: "Parallel Kitchen", desc: "Two-line layout, space-efficient for narrow kitchens" },
    { title: "Island Kitchen", desc: "Central island with cooking & dining, modern & social" },
  ];

  const materials = [
    { title: "Marine Ply", desc: "Superior quality, water-resistant, long-lasting" },
    { title: "PVC Finish", desc: "Durable, waterproof, easy to clean, vibrant colors" },
    { title: "Premium Hardware", desc: "Hettich, Blum, Hafele fittings for smooth operation" },
    { title: "Granite/Quartz", desc: "Countertops with heat & stain resistance" },
  ];

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Modular Kitchen Design and Installation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Dhasan Kitchen & Interior Work",
              "url": "https://www.dhasankitchenandinteriors.in",
              "telephone": "+916382543774"
            },
            "areaServed": {
              "@type": "City",
              "name": "Coimbatore"
            },
            "serviceType": "Kitchen Design and Installation",
            "priceRange": "₹150000-₹600000",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "150000"
            }
          })
        }}
      />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10 bg-gradient-luxury" />
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold/10 blur-3xl animate-float" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 w-full">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/40 bg-card/40 backdrop-blur text-xs uppercase tracking-wider text-gold mb-5">
              <ChefHat className="w-3.5 h-3.5" /> Premium Modular Kitchens
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
              Modular Kitchen Coimbatore <span className="text-gradient-gold">That Works</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Smart, efficient, beautiful modular kitchens designed for the way you cook. L, U, parallel, and island layouts. Starting ₹1.5 lakhs with professional installation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium hover:scale-105 transition shimmer">
                Get Free Kitchen Design <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+916382543774" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition">
                <Zap className="w-4 h-4" /> Call: +91 6382543774
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LAYOUTS */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Modular Kitchen Layouts</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Choose the perfect layout for your space and cooking style</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {layouts.map((layout, i) => (
              <Reveal key={layout.title} delay={i * 80}>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-gold/50 transition group">
                  <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center mb-4 group-hover:bg-gold/25 transition">
                    <ChefHat className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-lg mb-2">{layout.title}</h3>
                  <p className="text-sm text-muted-foreground">{layout.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Premium Materials & Finishes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Quality that lasts for decades</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {materials.map((mat, i) => (
              <Reveal key={mat.title} delay={i * 80}>
                <div className="p-8 rounded-2xl bg-gradient-luxury border border-gold/15 hover:border-gold/40 transition">
                  <h3 className="font-display text-xl mb-2 text-gradient-gold">{mat.title}</h3>
                  <p className="text-muted-foreground">{mat.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Smart Kitchen Features</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Sparkles, title: "Smart Storage", desc: "Pull-out drawers, carousel units, built-in spice racks" },
              { icon: Droplets, title: "Water-Resistant", desc: "Marine ply with PVC laminate protects against moisture" },
              { icon: ChefHat, title: "Ergonomic Design", desc: "Counter heights and spacing optimized for cooking" },
              { icon: Zap, title: "Modern Hardware", desc: "Soft-close hinges, smooth drawers, concealed lighting" },
            ].map((feat, i) => (
              <Reveal key={feat.title} delay={i * 100}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                    <feat.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">{feat.title}</h3>
                    <p className="text-sm text-muted-foreground">{feat.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Kitchen Design Process</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Measurement", desc: "Precise kitchen dimensions" },
              { step: "2", title: "3D Design", desc: "Visualization of your kitchen" },
              { step: "3", title: "Approval", desc: "Finalize layout & materials" },
              { step: "4", title: "Installation", desc: "Professional setup & testing" },
            ].map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-display text-lg mx-auto mb-3 flex items-center justify-center">
                    {p.step}
                  </div>
                  <h3 className="font-display text-lg mb-1">{p.title}</h3>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 bg-gradient-luxury">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Kitchen Pricing Guide</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Transparent pricing based on layout and materials</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { size: "6x8 ft", price: "₹1.5L - ₹2.5L", type: "Entry Plan" },
              { size: "8x10 ft", price: "₹2.5L - ₹4.5L", type: "Standard Plan" },
              { size: "10x12 ft", price: "₹4.5L - ₹6L", type: "Premium Plan" },
            ].map((pkg, i) => (
              <Reveal key={pkg.size} delay={i * 100}>
                <div className="p-8 rounded-2xl bg-card border border-gold/30 text-center">
                  <h3 className="font-display text-lg mb-1">{pkg.type}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.size}</p>
                  <div className="font-display text-3xl text-gradient-gold mb-4">{pkg.price}</div>
                  <p className="text-xs text-muted-foreground">Includes design, materials & installation</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-card/50 border border-gold/20 text-center">
            <p className="text-muted-foreground mb-3">All prices include free home visit, 3D design, and professional installation</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground text-sm font-medium hover:scale-105 transition">
              Get Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl mb-6">Ready to Upgrade Your Kitchen?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a free kitchen design consultation. We'll measure, design, and show you exactly what's possible.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium hover:scale-105 transition shimmer">
              Book Free Kitchen Design <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
