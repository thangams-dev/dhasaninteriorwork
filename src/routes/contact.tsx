import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dhasan — Free Design Consultation in Tenkasi" },
      { name: "description", content: "Call 70105 74483 or WhatsApp 95245 43097. Free home visit & design consultation across Tenkasi and surrounding areas." },
      { property: "og:title", content: "Contact Dhasan Kitchen & Interior Work" },
      { property: "og:description", content: "Free design consultation. Open 24 hours. Tenkasi, Tamil Nadu." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "Modular Kitchen", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Dhasan! I'm ${form.name || "(name)"}.\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`
    );
    const url = `https://wa.me/919524543097?text=${text}`;
    setSent(true);
    // Use direct navigation as a fallback when popups are blocked
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url;
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <section className="py-20 px-6 text-center">
        <Reveal>
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Let's talk</p>
          <h1 className="font-display text-5xl sm:text-7xl mb-6 max-w-4xl mx-auto leading-tight">Let's build your <span className="text-gradient-gold italic">dream space</span> together.</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Tell us about your home. We'll respond within the hour — most days, within minutes.</p>
        </Reveal>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* CONTACT INFO */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-5 sticky top-28">
              {[
                { icon: Phone, t: "Call us", v: "70105 74483", h: "tel:7010574483", sub: "Open 24 hours" },
                { icon: MessageCircle, t: "WhatsApp", v: "95245 43097", h: "https://wa.me/919524543097", sub: "Fastest response" },
                { icon: Mail, t: "Email", v: "mugeshmugesh9524@gmail.com", h: "mailto:mugeshmugesh9524@gmail.com", sub: "Replies within 24h" },
                { icon: MapPin, t: "Studio", v: "162-8, South Colony, Keezhpattakurichi, Tenkasi, TN 627814", h: "https://maps.google.com/?q=DHASAN+KITCHEN+%26+INTERIOR+WORK+Tenkasi", sub: "Serving Tenkasi & surrounds" },
                { icon: Clock, t: "Hours", v: "Open 24 hours · All days", sub: "Emergency support included" },
              ].map((c, i) => {
                const Wrap: any = c.h ? "a" : "div";
                return (
                  <Wrap key={i} {...(c.h ? { href: c.h, target: c.h.startsWith("http") ? "_blank" : undefined } : {})}
                    className="group flex gap-4 p-5 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-gold/40 transition-all hover:-translate-y-0.5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-rose/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <c.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{c.t}</p>
                      <p className="text-foreground font-medium break-words">{c.v}</p>
                      {c.sub && <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>}
                    </div>
                  </Wrap>
                );
              })}
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={150} className="lg:col-span-3">
            <form onSubmit={submit} className="p-8 sm:p-10 rounded-3xl bg-card/60 backdrop-blur border-gold-glow space-y-6">
              <div>
                <h2 className="font-display text-3xl mb-2">Request a free visit</h2>
                <p className="text-sm text-muted-foreground">Submitting opens WhatsApp with your message pre-filled — fastest way to reach Murugesh.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Your name</label>
                  <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Murugan K." className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border focus:border-gold focus:outline-none transition" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Phone</label>
                  <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="98xxx xxxxx" className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border focus:border-gold focus:outline-none transition" />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Interested in</label>
                <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border focus:border-gold focus:outline-none transition">
                  {["Modular Kitchen", "Wardrobe & Loft", "TV / Pooja Unit", "Living Room Interiors", "False Ceiling", "Complete Home Interior", "Not sure yet"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Tell us about your space</label>
                <textarea rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="2BHK in Tenkasi, looking to redo kitchen and master bedroom wardrobe..."
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border focus:border-gold focus:outline-none transition resize-none" />
              </div>

              <button type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium hover:scale-[1.02] transition shimmer">
                {sent ? <><CheckCircle2 className="w-5 h-5" /> Opening WhatsApp...</> : <>Send via WhatsApp <Send className="w-4 h-4" /></>}
                <span className="shimmer-overlay" />
              </button>
              <p className="text-xs text-muted-foreground text-center">By submitting, you agree to be contacted by Dhasan team. We never share your info.</p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Find us</p>
              <h2 className="font-display text-4xl sm:text-5xl">Drop by the <span className="text-gradient-gold italic">studio.</span></h2>
            </div>
            <div className="rounded-3xl overflow-hidden border-gold-glow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.149175277224!2d77.3256127!3d8.9583988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429a33f1546f1%3A0x9dd9c63a4ea2337f!2sDHASAN%20KITCHEN%20%26%20INTERIOR%20WORK!5e0!3m2!1sen!2sin!4v1780925602503!5m2!1sen!2sin"
                width="100%" height="450" style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Dhasan Kitchen & Interior Work location" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
