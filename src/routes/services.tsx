import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Check, ChefHat, Sofa, Tv, Layers, BookOpen, Wand2, Sparkles, ArrowRight, Bed, Briefcase, Hammer, Armchair, Droplets } from "lucide-react";
import kitchenYellow from "@/assets/kitchen-yellow.jpg.asset.json";
import kitchenModular from "@/assets/kitchen-modular.jpg.asset.json";
import wallPartition from "@/assets/wall-partition.jpg.asset.json";
import tvUnitWood from "@/assets/tv-unit-wood.png.asset.json";
import wardrobe from "@/assets/wardrobe-walnut.png.asset.json";
import pvcKitchen from "@/assets/pvc-kitchen-magenta.png.asset.json";
import poojaUnit from "@/assets/pooja-unit-traditional.png.asset.json";
import poojaPartition from "@/assets/pooja-partition-art.png.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Modular Kitchen, PVC Kitchen, Wardrobes, TV & Pooja Units | Dhasan Interior" },
      { name: "description", content: "Modular kitchen, PVC modular kitchen, wardrobe design, TV units, pooja units, bedroom & office interiors, home renovation and custom furniture in Coimbatore & Tenkasi." },
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
    alt: "Modern walnut and marble modular kitchen by Dhasan Interior",
    title: "Modular Kitchen",
    tag: "Most loved",
    desc: "Modern and space-efficient kitchen designs tailored to your requirements. L, U, parallel and island layouts in acrylic, laminate, PU and membrane finishes — all sitting on marine-grade BWP plywood with Hettich/Hafele soft-close fittings.",
    features: ["Soft-close drawers & hinges", "Granite / quartz countertops", "Built-in tall units & pull-outs", "Marine BWP plywood carcass"],
  },
  {
    icon: Droplets,
    img: pvcKitchen.url,
    alt: "Glossy magenta PVC modular kitchen with frosted glass cabinets",
    title: "PVC Modular Kitchen",
    tag: "Waterproof",
    desc: "Durable, waterproof and low-maintenance PVC kitchen solutions — termite-proof, easy-wipe surfaces and bold high-gloss finishes that stay looking new for years. Perfect for rentals, compact homes and wet zones.",
    features: ["100% waterproof & termite-proof", "Glossy & matte PVC finishes", "Frosted glass shutter options", "Quick install, low upkeep"],
  },
  {
    icon: Layers,
    img: wardrobe.url,
    alt: "Floor-to-ceiling walnut wardrobe with dresser and storage by Dhasan",
    title: "Wardrobe Design",
    tag: "Smart storage",
    desc: "Custom wardrobes with stylish and practical storage solutions — sliding or hinged, integrated dressers, internal LEDs and modular drawers tailored to your wardrobe inventory.",
    features: ["Sliding & hinged options", "Built-in dressing mirror", "Trouser racks & accessory trays", "Loft units for off-season storage"],
  },
  {
    icon: Tv,
    img: tvUnitWood.url,
    alt: "Wood-slat TV unit with backlit panels and pooja niche by Dhasan",
    title: "TV Unit Design",
    tag: "Statement walls",
    desc: "Elegant TV units that pull the whole living room together — fluted wood panelling, backlit niches, hidden cable management and a serene side-niche for the pooja idols.",
    features: ["Fluted & veneer panelling", "Backlit cove lighting", "Hidden cable management", "Integrated display niches"],
  },
  {
    icon: Sparkles,
    img: poojaUnit.url,
    alt: "Traditional teak pooja unit with shutter doors and god frames",
    title: "Pooja Units",
    tag: "Sacred spaces",
    desc: "Devotional corners that feel rooted in tradition yet beautifully crafted — fluted folding doors, mandir-style backdrops, brass detailing and built-in storage for puja essentials.",
    features: ["Folding shutter doors", "Mandir-style top arches", "Brass & teak detailing", "Discreet puja-item storage"],
  },
  {
    icon: Bed,
    img: kitchenYellow.url,
    alt: "Sunshine yellow bedroom-side kitchen by Dhasan Interior",
    title: "Bedroom Interior",
    tag: "Restful spaces",
    desc: "Complete bedroom interiors including wardrobes, cots, side storage and décor — coordinated palettes, ambient lighting and clutter-free layouts designed for genuine rest.",
    features: ["Wooden cots with storage", "Wall panelling & headboards", "Bedside niche lighting", "Custom dressing units"],
  },
  {
    icon: Briefcase,
    img: wallPartition.url,
    alt: "Wood-slat office partition and reception design",
    title: "Office Interior",
    tag: "Workspace",
    desc: "Professional office interiors designed for productivity and comfort — workstations, cabins, reception backdrops, branded partitions and acoustic-friendly false ceilings.",
    features: ["Workstation systems", "Reception & cabin design", "Acoustic ceilings", "Branded backdrops"],
  },
  {
    icon: Sofa,
    img: poojaPartition.url,
    alt: "Gold leaf decorative partition with Kamadhenu cow and tree of life",
    title: "Interior Design & Renovation",
    tag: "Full transformation",
    desc: "Complete interior planning and execution for residential and commercial spaces — and full renovations of existing homes with modern upgrades, partitions and statement decorative panels.",
    features: ["Decorative gold-leaf panels", "Wood-slat partitions", "Lighting & ceiling design", "End-to-end project management"],
  },
];

const small = [
  { icon: Wand2, t: "False Ceiling", d: "Gypsum & POP designs with cove lighting." },
  { icon: BookOpen, t: "Study Tables", d: "Ergonomic study setups for kids & WFH." },
  { icon: Armchair, t: "Wooden Cots & Beds", d: "Solid wood beds with built-in storage drawers." },
  { icon: Hammer, t: "Dining Tables", d: "Custom 4 / 6 / 8-seater dining sets." },
  { icon: Layers, t: "Storage Units", d: "Crockery, shoe racks, foyer & utility cabinets." },
  { icon: Sparkles, t: "Custom Furniture", d: "Anything we can imagine, we can build." },
];

function Services() {
  return (
    <>
      <section className="py-20 px-6 text-center">
        <Reveal>
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Our services</p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto leading-tight">Everything your home needs, <span className="text-gradient-gold italic">none of the runaround.</span></h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">One studio. One project manager. Every interior trade you'll ever need under a single quote — across Coimbatore, Tenkasi and nearby areas.</p>
        </Reveal>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto space-y-24">
          {big.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 to-rose/15 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition" />
                  <div className="relative overflow-hidden rounded-3xl border border-gold/20">
                    <img src={s.img} alt={s.alt} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
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
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Custom furniture & add-ons</p>
              <h2 className="font-display text-4xl sm:text-5xl">Built-to-order pieces that <span className="text-gradient-gold italic">finish the look.</span></h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {small.map((s, i) => (
              <Reveal key={s.t} delay={i * 60}>
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
        <div className="max-w-5xl mx-auto text-center rounded-3xl border-gold-glow p-10 sm:p-12 lg:p-20 bg-gradient-luxury">
          <Reveal>
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">🎉 Limited time offer</p>
            <h2 className="font-display text-3xl sm:text-5xl mb-5">Get up to <span className="text-gradient-gold italic">20% off</span> on selected interior & modular kitchen projects.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Book a free home visit and we'll walk you through ideas, materials and a realistic budget — no commitment.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium hover:scale-105 transition shimmer">
              Claim your discount <ArrowRight className="w-4 h-4" />
              <span className="shimmer-overlay" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
