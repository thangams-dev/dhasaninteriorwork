import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ChefHat, Sofa, Tv, Layers, BookOpen, Wand2, Award, Clock, Heart, Star, Phone, MessageCircle, Droplets, Bed, Briefcase, Tag } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroKitchen from "@/assets/hero-kitchen.png";
import kitchenYellow from "@/assets/kitchen-yellow.jpg";
import kitchenModular from "@/assets/kitchen-modular.jpg";
import wallPartition from "@/assets/wall-partition.jpg";
import tvUnitWood from "@/assets/tv-unit-wood.png";
import wardrobe from "@/assets/wardrobe-walnut.png";
import pvcKitchen from "@/assets/pvc-kitchen-magenta.png";
import poojaUnit from "@/assets/pooja-unit-traditional.png";
import poojaPartition from "@/assets/pooja-partition-art.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhasan Kitchen & Interior Work — Modular Kitchens & Interiors in Tenkasi" },
      { name: "description", content: "Award-worthy modular kitchens, wardrobes, TV units & complete home interiors in Tenkasi. Book a free design consultation today." },
      { name: "keywords", content: "modular kitchen Tenkasi, kitchen design Coimbatore, modular wardrobe, interior design services, PVC kitchen, TV unit design, pooja unit, home interiors, kitchen renovation, interior designer near me, custom kitchen cabinets, kitchen remodeling, affordable kitchens, modular kitchen design, kitchen cabinet design, wardrobe design Coimbatore, wardrobe design Tenkasi, TV unit Coimbatore, TV unit Tenkasi, pooja unit Coimbatore, pooja unit design, bedroom interior design, office interior design, kitchen renovation Coimbatore, home renovation Coimbatore, false ceiling design, wall partition design, interior design Coimbatore, interior design Tenkasi, interior designer Coimbatore, interior designer Tenkasi, best interior designer, top interior designers, luxury kitchens, budget kitchen designs, affordable interior design, premium kitchens, custom kitchen design, kitchen fitting, kitchen installation, modular kitchen installation, contemporary kitchen design, modern interior design, traditional kitchen design, minimalist design, full home interiors, complete home makeover, kitchen remodeling services, interior design company, professional kitchen designer, award-winning designer, experienced interior designer, kitchen design consultation, free design consultation" },
      { name: "author", content: "Dhasan Kitchen & Interior Work" },
      { property: "og:title", content: "Dhasan Kitchen & Interior Work — Modular Kitchens & Interiors" },
      { property: "og:description", content: "Award-worthy modular kitchens, wardrobes, TV units & complete home interiors in Tenkasi. Where Tenkasi homes get their glow up." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.dhasankitchenandinteriors.in/" },
      { property: "og:site_name", content: "Dhasan Kitchen & Interior Work" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dhasan Kitchen & Interior Work" },
      { name: "twitter:description", content: "Modular kitchens, wardrobes & interiors designed for your lifestyle" },
    ],
  }),
  component: Home,
});

const services = [
  { icon: ChefHat, title: "Modular Kitchen", desc: "L, U, parallel and island layouts engineered for the way your family actually cooks." },
  { icon: Droplets, title: "PVC Modular Kitchen", desc: "Durable, waterproof and low-maintenance kitchens — bold finishes, easy upkeep." },
  { icon: Layers, title: "Wardrobe Design", desc: "Floor-to-ceiling wardrobes with internal lighting and built-in dressers." },
  { icon: Tv, title: "TV & Pooja Units", desc: "Statement walls — backlit, fluted, and built-in pooja niches you'll never want to hide." },
  { icon: Bed, title: "Bedroom Interior", desc: "Cots, wardrobes, side storage and décor — a complete restful space, coordinated." },
  { icon: Briefcase, title: "Office Interior", desc: "Workstations, cabins, reception walls and acoustic ceilings built for productivity." },
];

const why = [
  { icon: Sparkles, t: "Smart Space Planning", d: "Every inch designed for real life, not just photos." },
  { icon: Award, t: "Premium Materials", d: "Marine ply, BWP, hettich-grade fittings — only the good stuff." },
  { icon: Clock, t: "On-Time Delivery", d: "Timelines we actually keep. Promise kept, dust cleared." },
  { icon: Heart, t: "Customer First", d: "5-star rated by every client who's let us in their home." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-luxury" />


        {/* floating decor */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold/10 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-rose/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 lg:py-0 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative w-full">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/40 bg-card/40 backdrop-blur text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-5">
              <Sparkles className="w-3.5 h-3.5 shrink-0" /> <span className="truncate">Coimbatore · Tenkasi · Est. 2018</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.1] mb-5">
              Your dream <span className="text-gradient-gold italic">interior</span>,
              <br className="hidden sm:block" /> built around <span className="text-gradient-gold">your life.</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Modular kitchens, wardrobes, false ceilings and full home interiors — handcrafted in Tenkasi by Mr. V. Mahendran and the Dhasan team. No templates. No shortcuts. Just rooms you'll never want to leave.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium text-sm sm:text-base hover:scale-105 transition-transform shimmer">
                Book Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <span className="shimmer-overlay" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors text-sm sm:text-base">
                Explore Services
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-5 sm:gap-8 flex-wrap">
              <div>
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_,i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">5.0 on Google</p>
              </div>
              <div className="h-10 w-px bg-gold/20" />
              <div>
                <div className="font-display text-2xl text-gradient-gold">100+</div>
                <p className="text-xs text-muted-foreground">Homes transformed</p>
              </div>
              <div className="h-10 w-px bg-gold/20" />
              <div>
                <div className="font-display text-2xl text-gradient-gold">24/7</div>
                <p className="text-xs text-muted-foreground">Always reachable</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative max-w-sm sm:max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-6 bg-gradient-to-tr from-gold/20 via-transparent to-rose/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border-gold-glow animate-float">
                <img src={heroKitchen} alt="Modern emerald modular kitchen by Dhasan" className="w-full aspect-[4/5] object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-card/90 backdrop-blur-xl border border-gold/30 rounded-2xl p-3 sm:p-4 shadow-2xl animate-float" style={{ animationDelay: "2s" }}>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">Owned by</p>
                <p className="font-display text-lg sm:text-xl text-gradient-gold">Mr. V. Mahendran</p>
              </div>
              <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-card/90 backdrop-blur-xl border border-gold/30 rounded-full px-4 py-2 sm:px-5 sm:py-3 shadow-2xl">
                <p className="text-[10px] sm:text-xs text-gold uppercase tracking-wider">⚡ Free Design Visit</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-gold/15 bg-card/30 backdrop-blur-sm overflow-hidden py-6">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-12 items-center font-display text-2xl text-gold/60">
              {["Modular Kitchen", "✦", "Wardrobe", "✦", "TV Unit", "✦", "Pooja Unit", "✦", "Living Room", "✦", "Study Table", "✦", "Loft Storage", "✦"].map((w, i) => (
                <span key={i}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* OFFER RIBBON */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto rounded-2xl border border-gold/30 bg-gradient-luxury p-6 sm:p-8 flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
              <Tag className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-gold uppercase tracking-[0.25em] text-[10px] mb-1">🎉 Limited time</p>
              <p className="font-display text-xl sm:text-2xl">Get up to <span className="text-gradient-gold italic">20% off</span> on selected interior & modular kitchen projects</p>
            </div>
          </div>
          <Link to="/offers" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium hover:scale-105 transition shimmer whitespace-nowrap">
            View offer <ArrowRight className="w-4 h-4" />
            <span className="shimmer-overlay" />
          </Link>
        </div>
      </section>


      {/* SERVICES PREVIEW */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">What we do</p>
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Six crafts. <span className="text-gradient-gold italic">One home.</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">From the kitchen counter to the ceiling cove — we handle every detail so you don't have to chase ten different contractors.</p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group relative h-full p-8 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-rose/5 transition-all duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-rose/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <s.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-6 bg-gradient-luxury">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
              <div>
                <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Recent work</p>
                <h2 className="font-display text-4xl sm:text-5xl">A peek inside <span className="text-gradient-gold italic">our homes.</span></h2>
              </div>
              <Link to="/services" className="text-gold hover:text-gold-soft inline-flex items-center gap-2 group">
                See full portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { img: poojaUnit, label: "Traditional Pooja Unit", sub: "Teak Folding Mandir", alt: "Traditional teak folding-door pooja unit by Dhasan" },
              { img: tvUnitWood, label: "Wood-Slat TV Wall", sub: "TV + Pooja Niche", alt: "Wood-slat TV unit with side pooja niche" },
              { img: wardrobe, label: "Walnut Wardrobe", sub: "Built-in Dresser", alt: "Walnut wardrobe with built-in dresser by Dhasan" },
              { img: pvcKitchen, label: "PVC Modular Kitchen", sub: "Glossy Magenta", alt: "Glossy magenta PVC modular kitchen" },
              { img: poojaPartition, label: "Decorative Partition", sub: "Gold-Leaf Kamadhenu", alt: "Gold-leaf decorative partition with Kamadhenu motif" },
              { img: kitchenModular, label: "Modular L-Kitchen", sub: "Walnut & Marble", alt: "Walnut and marble modular L-kitchen" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/15">
                  <img src={item.img} alt={item.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <p className="text-xs text-gold uppercase tracking-wider mb-1">{item.sub}</p>
                    <h3 className="font-display text-2xl text-foreground">{item.label}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-rose/10 rounded-3xl blur-xl" />
              <img src={wallPartition} alt="Wall partition work" className="relative rounded-3xl border border-gold/20" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Why Dhasan</p>
            <h2 className="font-display text-4xl sm:text-5xl mb-6">Built like it's <span className="text-gradient-gold italic">our own home.</span></h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">Because for us, it kind of is. Every project we take on, we treat like it's where we'd raise our family — same materials, same finish, same obsession with the small stuff.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {why.map((w, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                    <w.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground mb-1">{w.t}</h4>
                    <p className="text-sm text-muted-foreground">{w.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-gradient-luxury">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Word of mouth</p>
            <h2 className="font-display text-4xl sm:text-5xl mb-12">5.0 on Google. <span className="text-gradient-gold italic">Every single review.</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Santhini Murugesh", text: "Excellent work in low price. Workers are so kindly. Thanks Dhasan Interior 👏" },
              { name: "Bala Mani", text: "Beautiful finishing on the kitchen and TV unit — Mr. V. Mahendran really cares about getting the small details right." },
            ].map((r, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="p-8 rounded-2xl bg-card/70 backdrop-blur border border-gold/20 text-left">
                  <div className="flex gap-1 text-gold mb-4">
                    {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-foreground/90 leading-relaxed mb-6 italic">"{r.text}"</p>
                  <p className="text-sm text-gold font-medium">— {r.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION MAP */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Visit us</p>
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Find us <span className="text-gradient-gold italic">on the map.</span></h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-xl">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9890382341255!2d76.9067829!3d11.0394484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x434d3a8679d9049f%3A0xe6cbda81c93c915c!2sDhasan%20Kitchen%20%26%20Interior%20Work!5e0!3m2!1sen!2sin!4v1782031319393!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden border-gold-glow p-12 lg:p-20 text-center bg-gradient-luxury">
          <div className="absolute inset-0 -z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/15 rounded-full blur-3xl" />
          </div>
          <Reveal>
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 relative">Let's begin</p>
            <h2 className="font-display text-4xl sm:text-6xl mb-6 relative">Let's build your <span className="text-gradient-gold italic">dream space</span> together.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 relative">Free design consultation. No-pressure quotes. Honest timelines. Get a callback within the hour.</p>
            <div className="flex flex-wrap justify-center gap-4 relative">
              <a href="tel:7010574483" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium hover:scale-105 transition shimmer">
                <Phone className="w-4 h-4" /> 70105 74483
                <span className="shimmer-overlay" />
              </a>
              <a href="https://wa.me/919524543097" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
