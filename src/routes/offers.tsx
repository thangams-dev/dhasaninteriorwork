import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Tag, Gift, Phone, MessageCircle, MapPin, Check, Sparkles } from "lucide-react";
import pvcKitchen from "@/assets/pvc-kitchen-magenta.png";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Special Offers — Up to 20% Off Modular Kitchens & Interiors | Dhasan" },
      { name: "description", content: "Festive offer: Get up to 20% discount on selected interior and modular kitchen projects. Free site visit and consultation across Coimbatore & Tenkasi." },
      { property: "og:title", content: "Special Offers — Dhasan Interior Work" },
      { property: "og:description", content: "Up to 20% off on selected projects. Limited time." },
    ],
    links: [{ rel: "canonical", href: "https://dhasaninteriorwork.lovable.app/offers" }],
  }),
  component: Offers,
});

const perks = [
  "Free site visit & 3D design consultation",
  "Up to 20% off on selected projects",
  "Customized design solutions",
  "Quality materials & finishing",
  "Affordable pricing — no hidden costs",
  "Professional workmanship",
  "Timely project completion",
  "Service across Coimbatore & Tenkasi",
];

function Offers() {
  return (
    <>
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={pvcKitchen} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-card/60 backdrop-blur text-xs uppercase tracking-[0.25em] text-gold mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Limited time
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl mb-6 leading-tight">Get up to <span className="text-gradient-gold italic">20% off</span> on selected projects.</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">A festive thank-you to Coimbatore and Tenkasi. Book a free home visit, lock in your design, and we'll honour the discount on selected modular kitchen and interior packages.</p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
          <Reveal>
            <div className="h-full p-8 sm:p-10 rounded-3xl border-gold-glow bg-gradient-luxury">
              <Tag className="w-10 h-10 text-gold mb-5" />
              <h2 className="font-display text-3xl sm:text-4xl mb-5">What's included</h2>
              <ul className="space-y-3">
                {perks.map(p => (
                  <li key={p} className="flex items-start gap-3 text-foreground/90">
                    <span className="w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="h-full p-8 sm:p-10 rounded-3xl border border-gold/30 bg-card/60 backdrop-blur flex flex-col">
              <Gift className="w-10 h-10 text-gold mb-5" />
              <h2 className="font-display text-3xl sm:text-4xl mb-5">Eligible packages</h2>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8 flex-1">
                <li>• Full modular kitchen (L / U / parallel / island)</li>
                <li>• PVC modular kitchen — complete units</li>
                <li>• 2BHK & 3BHK complete home interiors</li>
                <li>• Master-bedroom interior packages</li>
                <li>• TV + pooja combination units</li>
                <li>• Office interior fit-outs</li>
              </ul>
              <div className="space-y-3">
                <a href="tel:7010574483" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium hover:scale-[1.02] transition shimmer">
                  <Phone className="w-4 h-4" /> Call 70105 74483
                  <span className="shimmer-overlay" />
                </a>
                <a href="https://wa.me/919524543097?text=Hi%20Dhasan%2C%20I%27d%20like%20to%20claim%20the%2020%25%20offer." className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition">
                  <MessageCircle className="w-4 h-4" /> WhatsApp us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto p-8 sm:p-10 rounded-3xl border border-gold/20 bg-card/40 backdrop-blur">
          <div className="flex items-start gap-4">
            <MapPin className="w-7 h-7 text-gold shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-2xl sm:text-3xl mb-3">We come to you</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Free site visits across <strong className="text-foreground">Coimbatore, Tenkasi</strong> and surrounding locations. We measure, sketch, and discuss your budget — on your timeline, in your home.</p>
              <Link to="/contact" className="text-gold inline-flex items-center gap-2 hover:underline">Book free visit →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
