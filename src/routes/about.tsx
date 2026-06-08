import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Quote, Hammer, Compass, HeartHandshake, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import interiorBanner from "@/assets/interior-banner.jpg.asset.json";
import wallPartition from "@/assets/wall-partition.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dhasan — The Story Behind Tenkasi's Favourite Interior Studio" },
      { name: "description", content: "Owned by Murugesh and a small team of craftsmen, Dhasan Kitchen & Interior Work has been shaping homes across Tenkasi with honest pricing and detail-obsessed workmanship." },
      { property: "og:title", content: "About Dhasan Kitchen & Interior Work" },
      { property: "og:description", content: "Family-run, craftsmen-first interior studio in Tenkasi." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Compass, t: "Design that listens", d: "We start by understanding how you actually live — then design around it. No copy-paste Pinterest moodboards." },
  { icon: Hammer, t: "Honest craftsmanship", d: "Real BWP ply, branded hardware, finishes that survive Tamil Nadu humidity. Cut corners aren't in our toolkit." },
  { icon: HeartHandshake, t: "Long after handover", d: "We don't disappear when the invoice clears. Hinge feels off two years later? One call away." },
];

const timeline = [
  { y: "Day 1", t: "Free home visit", d: "We measure, listen and sketch on the spot. No fee, no pressure." },
  { y: "Week 1", t: "3D Design + Quote", d: "You see your space in 3D before a single board is cut. Transparent pricing." },
  { y: "Production", t: "Factory-finished modules", d: "Built off-site for cleaner joints, dust-free home." },
  { y: "Handover", t: "Installed & polished", d: "Site cleanup, walkthrough, warranty doc — keys back in your hand." },
];

function About() {
  return (
    <>
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={interiorBanner.url} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Our story</p>
            <h1 className="font-display text-5xl sm:text-7xl mb-6 leading-tight">A small Tenkasi studio with a <span className="text-gradient-gold italic">big love for homes.</span></h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">Dhasan Kitchen & Interior Work was started by Murugesh on a simple belief: every family — no matter the budget — deserves an interior that feels intentional, lasts decades, and welcomes them home at the end of every day.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/30 to-rose/20 rounded-3xl blur-2xl" />
              <img src={logo.url} alt="Dhasan logo" className="relative rounded-3xl border border-gold/30 animate-float" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Quote className="w-10 h-10 text-gold mb-6" />
            <p className="font-display text-2xl sm:text-3xl leading-relaxed mb-6 text-foreground/95">
              "I grew up watching my father work wood. Every plank had a story, every joint had to be perfect — even the ones you'd never see. That's the standard we carry into every home we touch."
            </p>
            <p className="text-gold font-medium">— Murugesh, Founder</p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div><div className="font-display text-3xl text-gradient-gold">100+</div><p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Projects</p></div>
              <div><div className="font-display text-3xl text-gradient-gold">5.0</div><p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Google Rating</p></div>
              <div><div className="font-display text-3xl text-gradient-gold">24/7</div><p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Support</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-luxury">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">What we stand for</p>
              <h2 className="font-display text-4xl sm:text-5xl">Three values, <span className="text-gradient-gold italic">no exceptions.</span></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="p-8 rounded-2xl bg-card/70 backdrop-blur border border-gold/15 h-full hover:border-gold/40 transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center mb-5">
                    <v.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl mb-3">{v.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">How we work</p>
              <h2 className="font-display text-4xl sm:text-5xl">From first visit <span className="text-gradient-gold italic">to forever home.</span></h2>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden md:block" />
            {timeline.map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className={`relative md:grid md:grid-cols-2 gap-12 mb-12 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`${i % 2 ? "md:text-left" : "md:text-right"}`}>
                    <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{s.y}</p>
                    <h3 className="font-display text-3xl mb-3">{s.t}</h3>
                    <p className="text-muted-foreground">{s.d}</p>
                  </div>
                  <div className="hidden md:flex justify-center absolute left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-gold ring-4 ring-gold/20" />
                  </div>
                  <div />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden border-gold-glow">
          <img src={wallPartition.url} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/50" />
          <div className="relative p-12 lg:p-20">
            <Reveal>
              <h2 className="font-display text-4xl sm:text-5xl mb-6 max-w-2xl">Ready to meet the team that'll <span className="text-gradient-gold italic">build your home?</span></h2>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium hover:scale-105 transition">
                Book a free visit <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
