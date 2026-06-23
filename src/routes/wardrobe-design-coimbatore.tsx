import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Layers, Sparkles, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/wardrobe-design-coimbatore")({
  head: () => ({
    meta: [
      { title: "Wardrobe Design Coimbatore | Custom Wardrobes & Storage Solutions" },
      { name: "description", content: "Custom wardrobe design in Coimbatore. Floor-to-ceiling wardrobes with internal lighting, dressers, organizing systems. Free design. Starting ₹75K." },
      { name: "keywords", content: "wardrobe design Coimbatore, wardrobe design Tenkasi, modular wardrobe, custom wardrobes, bedroom wardrobe, sliding door wardrobe, walk-in wardrobe, wardrobe storage, built-in wardrobe, interior wardrobe design" },
    ],
    links: [
      { rel: "canonical", href: "https://www.dhasankitchenandinteriors.in/wardrobe-design-coimbatore" },
    ],
  }),
  component: WardrobeDesignPage,
});

function WardrobeDesignPage() {
  const types = [
    { title: "Sliding Door Wardrobes", desc: "Space-saving, modern design for any bedroom size" },
    { title: "Hinged Door Wardrobes", desc: "Traditional look, full-depth access to interior" },
    { title: "Walk-In Wardrobes", desc: "Luxury dressing spaces with aisles and dedicated sections" },
    { title: "Corner Wardrobes", desc: "Maximize space, fit perfectly into corner areas" },
  ];

  const features = [
    "Internal LED lighting",
    "Soft-close mechanisms",
    "Adjustable shelving",
    "Built-in dressing mirrors",
    "Hanging rails & hooks",
    "Dedicated shoe racks",
    "Pull-out trays & baskets",
    "Jewelry & accessory drawers",
  ];

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Wardrobe Design and Installation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Dhasan Kitchen & Interior Work",
              "url": "https://www.dhasankitchenandinteriors.in"
            },
            "areaServed": {
              "@type": "City",
              "name": "Coimbatore"
            },
            "serviceType": "Wardrobe Design"
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
              <Layers className="w-3.5 h-3.5" /> Custom Wardrobe Solutions
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
              Wardrobe Design in Coimbatore <span className="text-gradient-gold">Built for Organization</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Custom wardrobes that combine style with smart storage. From sliding doors to walk-in closets, we design spaces that organize your life beautifully.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium hover:scale-105 transition shimmer">
                Get Free Design Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/gallery" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition">
                View Designs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WARDROBE TYPES */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Types of Wardrobes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Choose the design that fits your lifestyle and bedroom space</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {types.map((type, i) => (
              <Reveal key={type.title} delay={i * 80}>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-gold/50 transition group">
                  <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center mb-4 group-hover:bg-gold/25 transition">
                    <Layers className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-lg mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Smart Wardrobe Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Every wardrobe designed for maximum organization and functionality</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <Reveal key={feature} delay={i * 60}>
                <div className="p-6 rounded-2xl bg-gradient-luxury border border-gold/15 hover:border-gold/40 transition flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-gold to-gold-soft flex items-center justify-center shrink-0 mt-1">
                    <span className="text-xs font-bold text-primary">✓</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Premium Materials</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Marine Ply Structure", desc: "Durable, weather-resistant, long-lasting framework" },
              { title: "PVC & Laminate Finishes", desc: "Stain-resistant, easy to clean, vibrant colors" },
              { title: "Soft-Close Hardware", desc: "Blum & Hettich fittings for smooth operation" },
              { title: "Full-Height Designs", desc: "Ceiling-to-floor wardrobes maximize storage space" },
            ].map((mat, i) => (
              <Reveal key={mat.title} delay={i * 80}>
                <div className="p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition">
                  <h3 className="font-display text-lg mb-2 text-gradient-gold">{mat.title}</h3>
                  <p className="text-muted-foreground">{mat.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="font-display text-4xl sm:text-5xl mb-6">100% Customizable</h2>
                <p className="text-muted-foreground mb-4">
                  Every wardrobe is designed specifically for your needs. Choose from multiple layouts, finishes, handles, and interior organization systems.
                </p>
                <p className="text-muted-foreground mb-8">
                  Whether you need space for formal wear, everyday clothes, or a mix of both, we design the perfect organization system for your lifestyle.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Personalized layout & dimensions",
                    "Choice of colors & finishes",
                    "Custom interior organization",
                    "Professional installation included",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-gold to-gold-soft flex items-center justify-center shrink-0 mt-1">
                        <span className="text-xs font-bold text-primary">✓</span>
                      </div>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium hover:scale-105 transition">
                  Design Your Wardrobe <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Customization Options", value: "Unlimited" },
                  { label: "Design Warranty", value: "5 Years" },
                  { label: "Installation Time", value: "2-3 Days" },
                  { label: "Satisfaction Rate", value: "100%" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-xl bg-gradient-luxury border border-gold/20">
                    <div className="font-display text-2xl text-gradient-gold mb-1">{stat.value}</div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Design Process</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Free Consultation", desc: "Understand your needs & style" },
              { step: "02", title: "3D Design", desc: "Visualize your perfect wardrobe" },
              { step: "03", title: "Material Selection", desc: "Choose finishes & features" },
              { step: "04", title: "Installation", desc: "Professional setup complete" },
            ].map((p) => (
              <Reveal key={p.step} delay={parseInt(p.step) * 100}>
                <div className="text-center p-6 rounded-2xl bg-card border border-border hover:border-gold/50 transition">
                  <div className="font-display text-3xl text-gradient-gold mb-2">{p.step}</div>
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
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Wardrobe Pricing</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Transparent pricing, no hidden costs</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { type: "Basic Wardrobe", price: "₹75K - ₹1.5L", desc: "Single door, standard storage" },
              { type: "Standard Wardrobe", price: "₹1.5L - ₹3L", desc: "Dual doors, multiple sections" },
              { type: "Premium Wardrobe", price: "₹3L - ₹5L+", desc: "Walk-in, full customization" },
            ].map((pkg) => (
              <Reveal key={pkg.type} delay={100}>
                <div className="p-8 rounded-2xl bg-card border border-gold/30 text-center">
                  <h3 className="font-display text-lg mb-2">{pkg.type}</h3>
                  <div className="font-display text-3xl text-gradient-gold mb-3">{pkg.price}</div>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.desc}</p>
                  <p className="text-xs text-muted-foreground">Includes design & installation</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl mb-6">Start Your Wardrobe Transformation</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a free consultation and get a 3D visualization of your perfect wardrobe.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium hover:scale-105 transition shimmer">
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
