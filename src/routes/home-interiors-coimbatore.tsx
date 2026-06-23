import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Layers, Palette, Sofa, Sparkles, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/home-interiors-coimbatore")({
  head: () => ({
    meta: [
      { title: "Home Interiors in Coimbatore | Complete Interior Design Solutions" },
      { name: "description", content: "Transform your home with professional interior design in Coimbatore. Modular kitchens, wardrobes, bedrooms, living rooms. Free 3D design & consultation." },
      { name: "keywords", content: "home interiors Coimbatore, home interior design, house interior design, residential interiors, complete home design, living room interiors, bedroom design, full home renovation, interior design services" },
    ],
    links: [
      { rel: "canonical", href: "https://www.dhasankitchenandinteriors.in/home-interiors-coimbatore" },
    ],
  }),
  component: HomeInteriorsPage,
});

function HomeInteriorsPage() {
  const roomTypes = [
    { title: "Kitchen Interiors", desc: "From modular to PVC kitchens with premium fittings", icon: Sofa },
    { title: "Bedroom Design", desc: "Wardrobes, cots, dressing areas & complete bedroom solutions", icon: Layers },
    { title: "Living Room", desc: "TV units, storage walls & functional aesthetic spaces", icon: Palette },
    { title: "Study Area", desc: "Workstations, shelving & professional office corners", icon: Sparkles },
    { title: "Pooja Unit", desc: "Traditional & modern pooja room designs with lighting", icon: Zap },
    { title: "Storage Solutions", desc: "Custom wardrobes, lofts & organized storage", icon: Layers },
  ];

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Home Interior Design in Coimbatore",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Dhasan Kitchen & Interior Work",
              "url": "https://www.dhasankitchenandinteriors.in"
            },
            "areaServed": {
              "@type": "City",
              "name": "Coimbatore"
            },
            "serviceType": "Interior Design",
            "priceRange": "₹150000-₹600000"
          })
        }}
      />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10 bg-gradient-luxury" />
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold/10 blur-3xl animate-float" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 w-full">
          <Reveal>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
              Home Interiors in Coimbatore <span className="text-gradient-gold">Designed for Living</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Complete home interior solutions that combine style, functionality, and your personal aesthetic. Every room, every detail, crafted with excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium hover:scale-105 transition shimmer">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/gallery" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition">
                View Gallery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ROOM TYPES */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Room-by-Room Interior Design</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Transform every space in your home with tailored design solutions</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomTypes.map((room, i) => (
              <Reveal key={room.title} delay={i * 80}>
                <div className="p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition group cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center mb-4 group-hover:bg-gold/25 transition">
                    <room.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-lg mb-2">{room.title}</h3>
                  <p className="text-sm text-muted-foreground">{room.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl mb-4">What's Included in Our Home Interior Design</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Free home consultation & measurement",
              "3D visualization of design concepts",
              "Material selection & color coordination",
              "Detailed technical drawings",
              "Timeline & budget planning",
              "Professional installation supervision",
              "Quality assurance & final handover",
              "Post-project support & maintenance tips",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-luxury border border-gold/20 hover:border-gold/40 transition">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-gold to-gold-soft flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">✓</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN PHILOSOPHY */}
      <section className="py-24 px-6 bg-gradient-luxury">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="font-display text-4xl sm:text-5xl mb-6">Our Design Philosophy</h2>
                <p className="text-muted-foreground mb-4">
                  We believe that beautiful interiors should work as hard as they look good. Every design decision balances aesthetics with functionality, creating spaces where you'll actually want to spend time.
                </p>
                <p className="text-muted-foreground mb-8">
                  From modular kitchens that simplify cooking to wardrobes that organize your life, we design homes that adapt to how you really live.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium hover:scale-105 transition">
                  Let's Design Your Home <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Space Planning", value: "100%" },
                  { label: "Material Quality", value: "Premium" },
                  { label: "On-Time Delivery", value: "Guaranteed" },
                  { label: "Customer Satisfaction", value: "5-Star" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-xl bg-card border border-gold/20 text-center">
                    <div className="font-display text-2xl text-gradient-gold mb-2">{stat.value}</div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl mb-6">Transform Your Home Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free home consultation and see how we can design the perfect interior for your Coimbatore home.
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
