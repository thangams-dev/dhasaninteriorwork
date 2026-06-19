import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/offers", label: "Offers" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-gold/15 py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logoAsset.url} alt="Dhasan Kitchen & Interior Work" className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-2 ring-gold/40 group-hover:ring-gold transition-all" />
          <div className="leading-tight">
            <div className="font-display text-lg text-gradient-gold">Dhasan</div>
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Kitchen & Interior</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map(n => {
            const active = pathname === n.to;
            return (
              <Link key={n.to} to={n.to}
                className={`px-4 py-2 text-sm tracking-wide uppercase relative transition-colors ${active ? "text-gold" : "text-foreground/80 hover:text-gold"}`}>
                {n.label}
                <span className={`absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold to-transparent transition-opacity ${active ? "opacity-100" : "opacity-0"}`} />
              </Link>
            );
          })}
        </nav>

        <a href="tel:9442723200" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium text-sm hover:scale-105 transition-transform shimmer">
          <Phone className="w-4 h-4" /> Book Free Visit
          <span className="shimmer-overlay" />
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-gold p-2">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-gold/15 animate-fade-up">
          <div className="px-6 py-6 flex flex-col gap-2">
            {nav.map(n => (
              <Link key={n.to} to={n.to} className="py-3 px-4 rounded-lg hover:bg-secondary text-foreground/90 uppercase text-sm tracking-wider">{n.label}</Link>
            ))}
            <a href="tel:9442723200" className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-gold to-gold-soft text-primary-foreground font-medium">
              <Phone className="w-4 h-4" /> Call 9442723200
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-gold/15 bg-card/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logoAsset.url} alt="logo" className="h-12 w-12 rounded-full ring-2 ring-gold/40" />
            <div>
              <div className="font-display text-xl text-gradient-gold">Dhasan</div>
              <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Kitchen & Interior Work</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">Crafting timeless modular kitchens & interiors that turn houses into the homes you've always pictured.</p>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-wider text-sm mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {nav.map(n => <li key={n.to}><Link to={n.to} className="hover:text-gold transition-colors">{n.label}</Link></li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-wider text-sm mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" /> 1/174 E, Golden Park, Somayam Palayam, Coimbatore North, Coimbatore, Tamilnadu - 641041</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> <a href="tel:9442723200" className="hover:text-gold">9442723200</a></li>
            <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-gold" /> <a href="https://wa.me/916382543774" className="hover:text-gold">6382543774</a></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> <a href="mailto:mugeshmugesh9524@gmail.com" className="hover:text-gold break-all">mugeshmugesh9524@gmail.com</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-wider text-sm mb-4">Follow</h4>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-colors"><Facebook className="w-4 h-4" /></a>
          </div>
          <p className="text-xs text-muted-foreground mt-6">Open 24 hours · Serving Coimbatore & surrounding areas</p>
        </div>
      </div>
      <div className="border-t border-gold/10 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dhasan Kitchen & Interior Work · Crafted with care in Coimbatore
      </div>
    </footer>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a href="https://wa.me/916382543774" className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-glow" aria-label="WhatsApp">
        <MessageCircle className="w-6 h-6" />
      </a>
      <a href="tel:9442723200" className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-soft text-primary-foreground flex items-center justify-center shadow-2xl hover:scale-110 transition-transform" aria-label="Call">
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}

export default function Layout() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
