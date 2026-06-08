import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Check, ChefHat, Sofa, Tv, Layers, BookOpen, Wand2, Sparkles, ArrowRight } from "lucide-react";
import kitchenYellow from "@/assets/kitchen-yellow.jpg.asset.json";
import kitchenModular from "@/assets/kitchen-modular.jpg.asset.json";
import wallPartition from "@/assets/wall-partition.jpg.asset.json";
import interiorBanner from "@/assets/interior-banner.jpg.asset.json";
import tvPooja from "@/assets/tv-pooja.jpg.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Modular Kitchen, Wardrobes, TV Units & Interiors | Dhasan" },
      { name: "description", content: "Complete home interior services in Tenkasi: modular kitchens, wardrobes, TV & pooja units, false ceilings, study tables, lofts and living room interiors." },
      { property: "og:title", content: "Our Services — Dhasan Interior Work" },
      { property: "og:description", content: "Every interior need, under one trusted roof." },
    ],
  }),
  component: Services,
});

const big = [
  {
    icon: ChefHat,
    img: kitchenModular.url,
    title: "Modular Kitchen",
    tag: "Most loved",
    desc: "The heart of your home, planned millimetre by millimetre. We design L, U, parallel and island layouts in acrylic, laminate, PU and membrane finishes — all sitting on marine-grade BWP plywood with Hettich/Hafele soft-close fittings.",
    features: ["Soft-close drawers & hinges", "Granite / quartz countertops", "Built-in tall units & pull-outs", "Marine BWP plywood carcass"],
  },
  {
    icon: Layers,
    img: wallPartition.url,
    title: "Wardrobes & Lofts",
    tag: "Smart storage",
    desc: "Floor-to-ceiling wardrobes that turn dead corners into dressing rooms. Sliding or hinged, mirrored or matte, with internal lighting and modular drawers tailored to your wardrobe inventory.",
    features: ["Sliding & hinged options", "Inside LED lighting", "Trouser racks & accessory trays", "Loft units for off-season storage"],
  },
  {
    icon: Tv,
    img: tvPooja.url,
    title: "TV & Pooja Units",
    tag: "Statement walls",
    desc: "Cinematic TV units and serene pooja corners — textured walls, backlit niches, fluted wood and marble accents that make every guest pause at the entrance.",
    features: ["Backlit niches & coves", "Veneer, fluted & laminate panels", "Hidden storage compartments", "Custom marble / PVC backdrops"],
  },
  {
    icon: Sofa,
    img: kitchenYellow.url,
    title: "Living Room Interiors",
    tag: "Full transformation",
    desc: "From wall panelling to partitions, lighting plans to upholstered seating — a coordinated living room where every element feels designed for the next, not added later.",
    features: ["Wood-slat partitions", "Wall panelling & wainscoting", "Lighting design & coves", "Custom display & bar units"],
  },
];

const small = [
  { icon: Wand2, t: "False Ceiling", d: "Gypsum & POP designs with cove lighting." },
  { icon: BookOpen, t: "Study Tables", d: "Ergonomic study setups for kids & WFH." },
  { icon: Sparkles, t: "Crockery Units", d: "Display-grade glass and back-lit cabinets." },
  { icon: Layers, t: "Shoe Racks & Foyer", d: "First-impression entryway storage." },
];

function Services() {
  return (
    <>
      <section className="py-20 px-6 text-center">
        <Reveal>
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Our services</p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto leading-tight">Everything your home needs, <span className="text-gradient-gold italic">none of the runaround.</span></h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">One studio. One project manager. Every interior trade you'll ever need under a single quote.</p>
        </Reveal>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto space-y-24">
          {big.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 to-rose/15 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition" />
                  <div className="relative overflow-hidden rounded-3xl border border-gold/20">
                    <img src={s.img} alt={s.title} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur border border-gold/30 text-xs uppercase tracking-wider text-gold">{s.tag}</div>
                </div>
                <div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-rose/10 flex items-center justify-center mb-5">
                    <s.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-5">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/90">
                        <span className="w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-gold" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition">
                    Get a quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-luxury">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Also available</p>
              <h2 className="font-display text-4xl sm:text-5xl">Add-ons that <span className="text-gradient-gold italic">finish the look.</span></h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {small.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <div className="p-6 rounded-2xl bg-card/60 backdrop-blur border border-gold/15 hover:border-gold/40 hover:-translate-y-1 transition-all h-full">
                  <s.icon className="w-7 h-7 text-gold mb-4" />
                  <h3 className="font-display text-xl mb-2">{s.t}</h3>
                  <p className="text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center rounded-3xl border-gold-glow p-12 lg:p-20 bg-gradient-luxury">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl mb-5">Not sure where to start? <span className="text-gradient-gold italic">We'll help.</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Book a free home visit and we'll walk you through ideas, materials and a realistic budget — no commitment.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium hover:scale-105 transition shimmer">
              Schedule free consultation <ArrowRight className="w-4 h-4" />
              <span className="shimmer-overlay" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
