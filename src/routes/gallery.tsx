import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import kitchenModular from "@/assets/kitchen-modular.jpg";
import kitchenYellow from "@/assets/kitchen-yellow.jpg";
import wallPartition from "@/assets/wall-partition.jpg";
import tvUnitWood from "@/assets/tv-unit-wood.png";
import wardrobe from "@/assets/wardrobe-walnut.png";
import pvcKitchen from "@/assets/pvc-kitchen-magenta.png";
import poojaUnit from "@/assets/pooja-unit-traditional.png";
import poojaPartition from "@/assets/pooja-partition-art.png";
import tvPooja from "@/assets/tv-pooja.png";
import heroKitchen from "@/assets/hero-kitchen.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Recent Interior Projects | Dhasan Kitchen & Interior Work" },
      { name: "description", content: "Browse 100+ completed projects: modular kitchens, PVC kitchens, wardrobes, TV units, pooja rooms and decorative partitions across Coimbatore & Tenkasi." },
      { property: "og:title", content: "Project Gallery — Dhasan Interior Work" },
      { property: "og:description", content: "A peek inside the homes we've crafted." },
    ],
    links: [{ rel: "canonical", href: "https://dhasaninteriorwork.lovable.app/gallery" }],
  }),
  component: Gallery,
});

const items = [
  { img: poojaUnit, cat: "Pooja Unit", title: "Traditional Folding Mandir", alt: "Traditional teak folding-door pooja unit with god frames" },
  { img: tvUnitWood, cat: "TV Unit", title: "Wood-Slat TV Wall with Pooja Niche", alt: "Wood-slat TV unit with white centre panel and side pooja niche" },
  { img: wardrobe, cat: "Wardrobe", title: "Walnut Wardrobe + Dresser", alt: "Walnut wardrobe with built-in dresser and side cabinet" },
  { img: pvcKitchen, cat: "PVC Kitchen", title: "Glossy Magenta PVC Modular", alt: "Magenta and silver PVC modular kitchen wall cabinets" },
  { img: poojaPartition, cat: "Decorative Partition", title: "Gold-Leaf Kamadhenu Wall", alt: "Gold-leaf decorative partition with tree of life and cow motif" },
  { img: kitchenModular, cat: "Modular Kitchen", title: "Walnut & Marble L-Kitchen", alt: "Walnut and marble L-shaped modular kitchen" },
  { img: heroKitchen, cat: "Modular Kitchen", title: "Emerald Island Kitchen", alt: "Modern emerald island modular kitchen" },
  { img: kitchenYellow, cat: "Bold Kitchen", title: "Sunshine Yellow + Graphite", alt: "Yellow and graphite bold modular kitchen" },
  { img: wallPartition, cat: "Living Room", title: "Wood-Slat Partition & Display", alt: "Solid wood slat partition with display shelving" },
  { img: tvPooja, cat: "TV & Pooja", title: "Combined TV + Pooja Layout", alt: "TV and pooja unit in one wall design" },
];

function Gallery() {
  return (
    <>
      <section className="py-20 px-6 text-center">
        <Reveal>
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Portfolio</p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto leading-tight">A peek inside <span className="text-gradient-gold italic">our homes.</span></h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">100+ projects delivered across Coimbatore, Tenkasi and surrounding areas. Here's a look at the latest.</p>
        </Reveal>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <div className="group relative break-inside-avoid rounded-2xl overflow-hidden border border-gold/15 bg-card/40">
                <img src={it.img} alt={it.alt} loading="lazy" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <p className="text-[10px] text-gold uppercase tracking-wider mb-1">{it.cat}</p>
                  <h3 className="font-display text-xl text-foreground">{it.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center rounded-3xl border-gold-glow p-10 sm:p-14 bg-gradient-luxury">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl mb-5">Like what you see? <span className="text-gradient-gold italic">Yours could be next.</span></h2>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium hover:scale-105 transition shimmer">
              Book free site visit <ArrowRight className="w-4 h-4" />
              <span className="shimmer-overlay" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
