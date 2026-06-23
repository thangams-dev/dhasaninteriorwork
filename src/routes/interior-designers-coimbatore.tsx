import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Check, Clock, Heart, Sparkles, Star, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/interior-designers-coimbatore")({
  head: () => ({
    meta: [
      { title: "Interior Designers in Coimbatore | Dhasan Kitchen & Interiors" },
      { name: "description", content: "Expert interior designers in Coimbatore with 100+ completed projects. Modular kitchens, wardrobes, home interiors. Free consultation & 3D design." },
      { name: "keywords", content: "interior designers Coimbatore, interior design Coimbatore, interior decorator Coimbatore, best interior designers, top interior designers Coimbatore, professional interior designer, home interior designer, residential interior design, commercial interior design, interior design services" },
    ],
    links: [
      { rel: "canonical", href: "https://www.dhasankitchenandinteriors.in/interior-designers-coimbatore" },
    ],
  }),
  component: InteriorDesignersPage,
});

function InteriorDesignersPage() {
  const benefits = [
    { icon: Sparkles, title: "Smart Space Planning", desc: "Every inch optimized for functionality & aesthetics" },
    { icon: Award, title: "Award-Winning Designs", desc: "100+ completed projects with 5-star ratings" },
    { icon: Clock, title: "On-Time Delivery", desc: "Project completion within committed timelines" },
    { icon: Heart, title: "Client-Centric Approach", desc: "Your vision becomes our mission" },
  ];

  const services = [
    { title: "Modular Kitchens", desc: "L, U, parallel and island layouts with premium materials" },
    { title: "Wardrobes & Storage", desc: "Floor-to-ceiling designs with internal lighting" },
    { title: "TV Units & Walls", desc: "Statement pieces with integrated pooja niches" },
    { title: "Bedroom Interiors", desc: "Complete room solutions with coordinated décor" },
    { title: "Office Interiors", desc: "Workstations, cabins and acoustic solutions" },
    { title: "Living Room Design", desc: "Open-plan concepts with functional aesthetics" },
  ];

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dhasan Kitchen & Interior Work",
            "description": "Professional interior designers in Coimbatore specializing in modular kitchens, wardrobes, and complete home interiors",
            "url": "https://www.dhasankitchenandinteriors.in/interior-designers-coimbatore",
            "telephone": "+916382543774",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Tenkasi",
              "addressLocality": "Coimbatore",
              "addressRegion": "Tamil Nadu",
              "postalCode": "624514",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "City",
              "name": "Coimbatore"
            },
            "priceRange": "₹150000-₹600000",
            "ratingValue": "5",
            "reviewCount": "50"
          })
        }}
      />

      {/* HERO */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden pt-16 sm:pt-20 px-5 sm:px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-luxury" />
        <div className="absolute top-20 right-10 w-40 sm:w-72 h-40 sm:h-72 rounded-full bg-gold/10 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-rose/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

        <div className="max-w-7xl mx-auto py-12 sm:py-16 w-full">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/40 bg-card/40 backdrop-blur text-xs uppercase tracking-wider text-gold mb-4 sm:mb-5">
              <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> Expert Interior Designers
            </div>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl leading-tight mb-4 sm:mb-6">
              Interior Designers in Coimbatore <span className="text-gradient-gold">You Can Trust</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mb-6 sm:mb-8">
              Dhasan Kitchen & Interior Work — 100+ completed projects, 5-star rated interior design studio. From concept to completion, we handle every detail of your home's transformation.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium text-sm sm:text-base hover:scale-105 transition shimmer">
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/gallery" className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition text-sm sm:text-base">
                View Our Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Why Choose Our Interior Designers?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Professional design expertise combined with local market knowledge and customer-first approach</p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-gold/50 transition">
                  <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Our Interior Design Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive design solutions for every room and lifestyle</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="p-8 rounded-2xl bg-gradient-luxury border border-gold/15 hover:border-gold/40 transition group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-gold/30 transition">
                      <Check className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Our Design Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">From initial consultation to final installation</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Free home visit & requirement analysis" },
              { step: "02", title: "Design", desc: "3D visualization & technical drawings" },
              { step: "03", title: "Approval", desc: "Client feedback & final adjustments" },
              { step: "04", title: "Execution", desc: "Professional installation & handover" },
            ].map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="relative">
                  <div className="p-6 rounded-2xl bg-card border border-border text-center">
                    <div className="font-display text-4xl text-gradient-gold mb-2">{p.step}</div>
                    <h3 className="font-display text-lg mb-2">{p.title}</h3>
                    <p className="text-xs text-muted-foreground">{p.desc}</p>
                  </div>
                  {i < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-gold/50 to-transparent" />}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 bg-gradient-luxury">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="font-display text-5xl text-gradient-gold mb-2">100+</div>
              <p className="text-muted-foreground">Completed Projects</p>
            </div>
            <div>
              <div className="font-display text-5xl text-gradient-gold mb-2">5.0★</div>
              <p className="text-muted-foreground">Average Client Rating</p>
            </div>
            <div>
              <div className="font-display text-5xl text-gradient-gold mb-2">8+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl mb-6">Ready to Transform Your Space?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your free consultation with our interior design experts. We'll understand your needs, show you possibilities, and create designs that match your lifestyle.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium hover:scale-105 transition shimmer">
                Schedule Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+916382543774" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition">
                <Zap className="w-4 h-4" /> Call Now: +91 63825 43774
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
