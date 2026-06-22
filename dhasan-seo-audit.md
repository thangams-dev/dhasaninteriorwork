# 🔍 Full SEO Audit & Google Page-1 Roadmap
## Dhasan Kitchen & Interior Work — dhasankitchenandinteriors.in
**Target: Page 1 on Google for Coimbatore interior design keywords**
**Audit Date:** June 22, 2026
**Current Status:** 44 impressions / 9 clicks (24h) — site barely indexed

---

## 🚨 CRITICAL FINDING #1 — Site Is Not Being Indexed by Google

A `site:dhasankitchenandinteriors.in` search returns **zero results**. This is the root cause of zero impression growth. Google has not crawled and indexed your inner pages. Everything else is secondary until this is fixed.

### Why this is happening:
The website is built with **React (TanStack Router SSR)**. If server-side rendering is not functioning correctly in production, Google sees a **blank page** when it crawls. The HTML it receives has only `<div id="root"></div>` with no readable content — your SEO meta tags, headings, and text are injected by JavaScript *after* load. Googlebot sometimes renders JS, but it's unreliable and slow for new sites with no authority.

---

## 🚨 CRITICAL FINDING #2 — No JSON-LD Structured Data (Schema Markup)

There is **zero JSON-LD schema** anywhere in the codebase. For a local business in Coimbatore competing on Google Maps + Search, this is a major gap. Google uses `LocalBusiness`, `Service`, and `BreadcrumbList` schemas to understand and rank local businesses.

---

## 🚨 CRITICAL FINDING #3 — Logo File Is 1.9MB

The logo asset `/src/assets/logo.png` is **1.9 megabytes**. This single file is likely loaded on every page and will dramatically hurt Core Web Vitals (LCP / page speed), which directly affects Google ranking.

---

## 🚨 CRITICAL FINDING #4 — Title Tag Conflict Between `index.html` and Route Head

`index.html` has a `<title>` tag AND `/src/routes/index.tsx` also sets a title in `head()`. `/src/routes/__root.tsx` also sets a third title. Three competing title definitions. This causes duplicate/inconsistent titles — Google may display the wrong one or distrust the page structure.

---

## 🚨 CRITICAL FINDING #5 — Homepage Meta Description Doesn't Match Content

The homepage `index.html` meta description says: *"Award-winning interior design, modular kitchens... in Coimbatore and Tenkasi"*, but the route-level description in `index.tsx` says *"in Tenkasi"* only. Google picks one or the other inconsistently. **Coimbatore must always be first** since that's your primary target city.

---

## 🚨 CRITICAL FINDING #6 — No Google Analytics / Tracking

`dns-prefetch` for Google Analytics exists but **no GA4 script is installed**. You cannot optimize what you cannot measure. GSC alone is not enough — you need GA4 to understand user behavior.

---

## 📊 GSC Performance Analysis (from screenshot)

| Metric | Value | What It Means |
|--------|-------|---------------|
| Total Clicks | 9 | Almost nobody finding you |
| Total Impressions | 44 | Google barely shows you |
| Average CTR | 20.5% | Good — when you do show up, people click |
| Average Position | 1.8 | You rank #1-2 for branded searches only |

**The 20.5% CTR at position 1.8 means:** You only appear for searches of your own brand name ("Dhasan kitchen"). You are invisible for all non-branded Coimbatore searches. The goal is to get impressions from people searching "modular kitchen Coimbatore", "interior designer Coimbatore", etc.

---

## 🔧 COMPLETE FIX LIST FOR YOUR AI AGENT

### PRIORITY 1 — Fix Indexing (Do This First, Everything Else Depends On It)

#### Task 1.1 — Verify SSR is Working
```
CHECK: Fetch the homepage with curl to see if real HTML content is returned:
  curl https://www.dhasankitchenandinteriors.in/ | grep "<h1"

EXPECTED: Should return the H1 text like "Your dream interior, built around your life."
IF it returns nothing or only "<div id=root></div>" → SSR is broken.

FIX: In the hosting platform (Netlify/Vercel), ensure the build command uses
the SSR output, not static export. For TanStack Start/Router SSR:
  - Build command: `bun run build`
  - Output: server function, NOT just /dist/client
  - If deployed as static site, switch to server-side deployment or enable prerendering
```

#### Task 1.2 — Add Prerendering for All Routes
```
In vite.config.ts or app config, add static prerendering for all routes:

Routes to prerender:
  /
  /services
  /gallery
  /about
  /offers
  /contact

This ensures Google gets real HTML even if JS hasn't run.
```

#### Task 1.3 — Submit Sitemap to Google Search Console
```
1. Go to Google Search Console → Sitemaps
2. Submit: https://www.dhasankitchenandinteriors.in/sitemap.xml
3. Request indexing manually for each URL:
   - GSC → URL Inspection → paste each URL → "Request Indexing"
   Do this for all 6 pages.
```

---

### PRIORITY 2 — Add JSON-LD Schema Markup

Add this JSON-LD to the `<head>` in `src/routes/__root.tsx`. This is the single highest-impact SEO change for local search.

#### Task 2.1 — LocalBusiness Schema (Add to `__root.tsx` head)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  "name": "Dhasan Kitchen & Interior Work",
  "alternateName": "Dhasan Interiors",
  "url": "https://www.dhasankitchenandinteriors.in/",
  "logo": "https://www.dhasankitchenandinteriors.in/Media-2.jpg",
  "image": "https://www.dhasankitchenandinteriors.in/Media-2.jpg",
  "description": "Trusted modular kitchen and interior design studio in Coimbatore. Specialising in modular kitchens, wardrobes, TV units, pooja units and complete home interiors since 2018.",
  "founder": {
    "@type": "Person",
    "name": "V. Mahendran"
  },
  "foundingDate": "2018",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.0394484",
    "longitude": "76.9067829"
  },
  "telephone": "+916382543774",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.google.com/maps/place/Dhasan+Kitchen+%26+Interior+Work"
  ],
  "areaServed": [
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Tenkasi" }
  ],
  "priceRange": "₹₹",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "10"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Interior Design Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Modular Kitchen Design Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PVC Modular Kitchen Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wardrobe Design Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TV Unit Design Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pooja Unit Design Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Interior Design Coimbatore" } }
    ]
  }
}
</script>
```

#### Task 2.2 — FAQ Schema (Add to Homepage `index.tsx`)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a modular kitchen cost in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modular kitchen costs in Coimbatore typically range from ₹1.5 lakhs to ₹6 lakhs depending on size, material and finish. Dhasan offers free home visits and transparent quotes. Contact us at 6382543774."
      }
    },
    {
      "@type": "Question",
      "name": "Does Dhasan offer free design consultation in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Dhasan Kitchen & Interior Work offers a completely free home visit and design consultation across Coimbatore and surrounding areas. Call 6382543774 or WhatsApp to book."
      }
    },
    {
      "@type": "Question",
      "name": "What interior design services does Dhasan offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dhasan offers modular kitchen design, PVC kitchens, wardrobe design, TV units, pooja units, bedroom interiors, office interiors and complete home renovation in Coimbatore."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a modular kitchen installation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard modular kitchen installation by Dhasan takes 7–14 working days after design approval, depending on the size and complexity of the project."
      }
    }
  ]
}
</script>
```

**Instructions for AI agent:** Add both script tags into the `head()` function of `__root.tsx` and `index.tsx` respectively using the `links` array — or inject them as raw HTML strings in a `<Helmet>`-style approach.

---

### PRIORITY 3 — Fix Title & Meta Conflicts

#### Task 3.1 — Remove Title from `index.html`

In `/index.html`, remove or replace:
```html
<!-- REMOVE THIS: -->
<title>Dhasan Kitchen & Interior Work — Modular Kitchens, Wardrobes & Home Interiors</title>

<!-- REPLACE WITH: -->
<title>Dhasan Kitchen & Interior Work</title>
```
The real page-level titles are set in each route's `head()` function. The `index.html` title is just a fallback that confuses crawlers.

#### Task 3.2 — Standardise Homepage Meta Description

In `index.tsx` route head, update description to:
```
"Modular kitchens, wardrobes, TV units & complete home interiors in Coimbatore. 100+ projects. Free design consultation. Call Dhasan Interior now."
```
Always lead with **Coimbatore** not Tenkasi, since Coimbatore has 10x more search volume.

#### Task 3.3 — Add Missing Canonical Tags

`index.tsx` (homepage) is missing a canonical link in its `head()` function. Add:
```js
links: [{ rel: "canonical", href: "https://www.dhasankitchenandinteriors.in/" }]
```

---

### PRIORITY 4 — Fix Logo Image Size

#### Task 4.1 — Compress and Convert Logo

```
File: /src/assets/logo.png
Current size: 1.9MB — CRITICAL issue

Steps:
1. Convert logo.png to WebP format
2. Target size: under 30KB for a logo
3. Use: imagemin, squoosh, or sharp library
   Example command: npx @squoosh/cli --webp '{"quality":85}' src/assets/logo.png
4. Replace all references from logo.png → logo.webp in Layout.tsx

Also compress all other assets:
- hero-kitchen.png (512KB) → target <120KB as WebP
- interior-banner.png (636KB) → target <150KB as WebP
- wardrobe-walnut.png (824KB) → target <150KB as WebP
- tv-unit-wood.png (824KB) → target <150KB as WebP
- pooja-unit-traditional.png (780KB) → target <150KB as WebP
- pooja-partition-art.png (648KB) → target <150KB as WebP
- pvc-kitchen-magenta.png (412KB) → target <100KB as WebP
```

---

### PRIORITY 5 — Add Google Analytics 4

#### Task 5.1 — Install GA4

```
1. Create a GA4 property at analytics.google.com for dhasankitchenandinteriors.in
2. Get the Measurement ID (format: G-XXXXXXXXXX)
3. Add to __root.tsx head() links array:
```
```js
{ 
  rel: "script",
  // Instead use a script tag approach:
}
```
Add in `__root.tsx` before `</head>` equivalent:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```
Replace `G-XXXXXXXXXX` with real ID.

---

### PRIORITY 6 — Add an FAQ Section to Homepage

Add a visible FAQ section on the homepage in `index.tsx`. This serves two purposes:
1. Powers the FAQ schema markup (rich results in Google)
2. Targets long-tail keywords people actually search

**Add this section to the homepage JSX** (before the final CTA section):

```jsx
{/* FAQ SECTION */}
<section className="py-24 px-6">
  <div className="max-w-4xl mx-auto">
    <Reveal>
      <div className="text-center mb-12">
        <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Common questions</p>
        <h2 className="font-display text-4xl sm:text-5xl mb-4">
          Frequently asked <span className="text-gradient-gold italic">questions.</span>
        </h2>
      </div>
    </Reveal>
    <div className="space-y-4">
      {[
        {
          q: "How much does a modular kitchen cost in Coimbatore?",
          a: "A modular kitchen in Coimbatore typically costs ₹1.5 lakhs to ₹6 lakhs depending on size, material (acrylic, laminate, PVC) and hardware brand. Dhasan provides transparent, itemised quotes after a free home visit — no hidden charges."
        },
        {
          q: "Do you offer a free design consultation in Coimbatore?",
          a: "Yes! We offer a completely free home visit and 3D design consultation across Coimbatore and surrounding areas. Our designer visits your home, takes measurements, and presents a design with full pricing — no commitment required."
        },
        {
          q: "How long does modular kitchen installation take?",
          a: "After your design is approved, we typically complete factory-finished modules within 10–15 working days and install them within 2–3 days at your home. We minimise on-site work and keep your home dust-free."
        },
        {
          q: "What areas in Coimbatore do you serve?",
          a: "Dhasan serves all areas of Coimbatore including RS Puram, Gandhipuram, Peelamedu, Saravanampatti, Vadavalli, Singanallur, and nearby cities including Tenkasi, Tirunelveli and Pollachi."
        },
        {
          q: "Do you provide warranty on your kitchen and interior work?",
          a: "Yes, we provide warranty on all modular kitchen and interior work including hardware, shutters and countertops. We use BWP marine plywood and branded hardware (Hettich/Hafele) for long-lasting quality."
        },
      ].map((item, i) => (
        <Reveal key={i} delay={i * 60}>
          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur border border-gold/15 hover:border-gold/40 transition">
            <h3 className="font-display text-lg text-foreground mb-3">{item.q}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
```

---

### PRIORITY 7 — Improve On-Page Content (Keyword Targeting)

#### Task 7.1 — Update Homepage H1

Current H1:
```
"Your dream interior, built around your life."
```

Problem: Beautiful copy but **zero SEO value**. Google reads H1 to understand what the page is about.

**Replace with a dual strategy — keep the aesthetic headline but add an SEO subtitle:**

```jsx
<h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.1] mb-3">
  Your dream <span className="text-gradient-gold italic">interior</span>,
  <br className="hidden sm:block" /> built around <span className="text-gradient-gold">your life.</span>
</h1>
<p className="text-sm text-gold/70 uppercase tracking-[0.2em] mb-4">
  Modular Kitchen & Interior Design in Coimbatore
</p>
```

The subtitle "Modular Kitchen & Interior Design in Coimbatore" gives Google the keyword signal while the H1 stays visually impactful.

#### Task 7.2 — Add Coimbatore-Specific Area Content

Add a small section or paragraph somewhere on the homepage that mentions specific Coimbatore areas. This helps with local SEO signals:

```jsx
<p className="text-xs text-muted-foreground text-center mt-6">
  Serving RS Puram · Gandhipuram · Peelamedu · Saravanampatti · Vadavalli · Singanallur · Coimbatore & Tenkasi
</p>
```

#### Task 7.3 — Services Page H2 Tags

In `services.tsx`, each service uses `<h2>` for service names. Ensure every `<h2>` includes "Coimbatore" naturally. For example:
- "Modular Kitchen" → "Modular Kitchen Design in Coimbatore"
- "Wardrobe Design" → "Wardrobe Design in Coimbatore"
- "TV Unit Design" → "TV Unit Design Coimbatore"

This targets the exact keywords people search on Google.

---

### PRIORITY 8 — Google Business Profile Optimisation

Your Google Maps embed shows the business is listed. But optimising the **Google Business Profile** is often the fastest path to page-1 visibility for local searches in Coimbatore.

#### Task 8.1 — Google Business Profile Checklist

Do all of the following in your Google Business Profile (business.google.com):

```
□ Business Name: "Dhasan Kitchen & Interior Work" (exact — no keyword stuffing)
□ Category: Primary = "Interior Designer", Secondary = "Kitchen Remodeler", "Cabinet Store"
□ Address: Add full Coimbatore address with pincode
□ Phone: Add primary number (6382543774)
□ Website: https://www.dhasankitchenandinteriors.in/
□ Business Hours: Set accurate hours (9 AM – 8 PM, 7 days)
□ Description: Write a 750-character description using keywords:
    "Dhasan Kitchen & Interior Work is a trusted modular kitchen and interior 
    design studio in Coimbatore, Tamil Nadu. Founded in 2018 by V. Mahendran, 
    we specialise in modular kitchens, PVC kitchens, wardrobes, TV units, pooja 
    units and complete home interior design. We serve all areas of Coimbatore 
    including RS Puram, Peelamedu, Saravanampatti and nearby cities. 100+ 
    homes transformed. 5-star rated. Free home visit and design consultation."
□ Add ALL photos from the website to the profile (at least 15 photos)
□ Add Services list: List each service with description and price range
□ Add Q&A: Seed 5 questions yourself and answer them (use FAQ content from above)
□ Posts: Create a Google Post every week (new project, offer, tip)
```

#### Task 8.2 — Get More Google Reviews

Currently showing 5.0 but likely very few reviews. Reviews are a top local ranking factor.

```
Action: Create a direct Google Review link for the business and send it to every 
past customer via WhatsApp:

"Hi [Name], thank you for choosing Dhasan! Your feedback helps us a lot. 
Could you spare 1 minute to leave us a Google review? 
[GOOGLE REVIEW LINK]
Thank you!"

Target: Get to 25+ reviews in the next 30 days.
How to get review link: Google Business Profile → Get more reviews → Copy link
```

---

### PRIORITY 9 — Build Backlinks (Off-Page SEO)

Your site has **zero external backlinks**. This is why Google doesn't rank it. Even local directories send trust signals.

#### Task 9.1 — Submit to Local & Indian Directories

Submit the website to all of these (free):

```
1. Justdial.com — Search for "Dhasan Kitchen" and claim/create listing
2. Sulekha.com — Create business profile under "Interior Designers Coimbatore"
3. IndiaMART — List services under Interior Design
4. NoBroker — Register as a vendor
5. UrbanClap/Urban Company — Register as interior designer
6. Houzz.in — Create professional portfolio profile
7. Homify.in — Register and upload project photos
8. 99acres.com — Interior designer directory
9. Magicbricks — Home decor & interior listing
10. Coimbatore Yellow Pages (coimbatoreyellowpages.com) — Local listing
11. TradeIndia — B2B directory
12. Google Maps — Already listed, ensure all details are complete
```

#### Task 9.2 — Create Social Media Profiles with Website Link

```
□ Instagram: Create/update @dhasaninteriors — put website in bio
□ Facebook Page: Create if not existing — add website link
□ Pinterest: Upload project photos linking back to website
□ YouTube: Create a channel, upload 1 before/after reel of a project

Each social profile with your website link = a backlink that tells Google you exist.
```

---

### PRIORITY 10 — Technical SEO Fixes

#### Task 10.1 — Fix `geo.placename` in `index.html`

Current:
```html
<meta name="geo.placename" content="Tenkasi, Coimbatore" />
```

Fix (Coimbatore first, it's the primary market):
```html
<meta name="geo.placename" content="Coimbatore, Tamil Nadu" />
```

#### Task 10.2 — Add `address` Postal Code in `index.html`

```html
<meta property="business:contact_data:postal_code" content="641001" />
```
Currently blank — fill in the correct Coimbatore postal code.

#### Task 10.3 — Fix Sitemap `lastmod` Dates

In `sitemap.xml`, all pages show `2026-06-20`. Update the sitemap to auto-generate `lastmod` as the current date so Google knows content is fresh. In `src/routes/sitemap[.]xml.ts`, replace hardcoded date with `new Date().toISOString().split('T')[0]`.

#### Task 10.4 — Add `loading="eager"` to Hero Image

The hero image (`hero-kitchen.png`) is the Largest Contentful Paint element. It should not be lazy loaded:

In `index.tsx`, find the hero `<img>` and add/confirm:
```jsx
<img 
  src={heroKitchen} 
  alt="Modern emerald modular kitchen by Dhasan Coimbatore" 
  loading="eager"   {/* NOT lazy */}
  fetchPriority="high"
  className="w-full aspect-[4/5] object-cover" 
/>
```

#### Task 10.5 — Update `robots.txt`

Remove the `Crawl-delay: 1` line. It slows Googlebot down. Current robots.txt is fine otherwise.

#### Task 10.6 — Add `width` and `height` to All Images

All `<img>` tags in route files are missing explicit `width` and `height` attributes. This causes layout shift (bad CLS score). Add them to every image:
```jsx
<img src={heroKitchen} width={800} height={1000} alt="..." />
```

---

### PRIORITY 11 — Content Strategy (New Pages to Create)

Single-page websites don't rank well. Create dedicated landing pages for each major keyword cluster. Each page should be 400–600 words of real content.

#### Pages to Create:

```
1. /modular-kitchen-coimbatore
   Title: "Modular Kitchen in Coimbatore | Dhasan Interior — Free Design Visit"
   Content: What is modular kitchen, types (L, U, parallel), materials, price range, why Dhasan, gallery

2. /pvc-kitchen-coimbatore
   Title: "PVC Modular Kitchen in Coimbatore | Waterproof & Budget-Friendly"
   Content: Benefits of PVC, comparison with wood, cost, maintenance, photos

3. /wardrobe-design-coimbatore
   Title: "Wardrobe Design in Coimbatore | Custom Built-in Wardrobes"
   Content: Types (sliding, hinged), materials, storage features, photos, pricing guide

4. /interior-designer-coimbatore
   Title: "Interior Designer in Coimbatore | Home & Commercial Interiors"
   Content: Full home interior services, process, team, past projects

5. /kitchen-renovation-coimbatore
   Title: "Kitchen Renovation in Coimbatore | Transform Your Old Kitchen"
   Content: Renovation vs new, process, cost, timeline, before/after

6. /tv-unit-design-coimbatore
   Title: "TV Unit Design in Coimbatore | Custom TV Wall Panels"
   Content: Styles (fluted, panel, backlit), materials, integrated pooja units
```

Add these to `sitemap.xml` after creation.

---

## 📋 IMPLEMENTATION CHECKLIST (Ordered by Impact)

### Week 1 — Fix Crawling & Indexing
- [ ] Verify SSR is working with `curl` test
- [ ] Enable prerendering for all 6 routes
- [ ] Submit sitemap in Google Search Console
- [ ] Request manual indexing for all 6 pages in GSC
- [ ] Install Google Analytics 4

### Week 2 — Schema & On-Page
- [ ] Add LocalBusiness JSON-LD schema to `__root.tsx`
- [ ] Add FAQ JSON-LD schema to homepage
- [ ] Add FAQ section to homepage JSX
- [ ] Fix title tag conflict (clean up `index.html`)
- [ ] Standardise meta description (Coimbatore first)
- [ ] Add "Modular Kitchen & Interior Design in Coimbatore" subtitle under H1
- [ ] Add area-served line (RS Puram, Gandhipuram, etc.)
- [ ] Fix `geo.placename` to be Coimbatore first
- [ ] Add postal code to business contact meta

### Week 2 — Performance
- [ ] Compress logo from 1.9MB → under 30KB WebP
- [ ] Convert all PNG assets to WebP (save ~70% file size)
- [ ] Add `loading="eager"` + `fetchPriority="high"` to hero image
- [ ] Add explicit `width` and `height` to all images
- [ ] Remove `Crawl-delay` from robots.txt

### Week 3 — Local SEO
- [ ] Fully optimise Google Business Profile (all fields)
- [ ] Upload 15+ photos to Google Business Profile
- [ ] Add 5 Q&A to Google Business Profile
- [ ] Send review request to all past clients via WhatsApp
- [ ] Target: 25+ Google reviews
- [ ] Submit to Justdial, Sulekha, IndiaMART, Houzz, Homify

### Week 4 — New Content Pages
- [ ] Create `/modular-kitchen-coimbatore` page
- [ ] Create `/interior-designer-coimbatore` page
- [ ] Create `/wardrobe-design-coimbatore` page
- [ ] Update sitemap with new pages
- [ ] Update services H2 tags to include "Coimbatore"
- [ ] Create Instagram + Facebook profiles with website link

---

## 🎯 REALISTIC TIMELINE TO PAGE 1 IN COIMBATORE

| Milestone | Timeline |
|-----------|----------|
| Site fully indexed by Google | 1–2 weeks after indexing fix |
| Appearing in Google Maps for "interior designer Coimbatore" | 2–4 weeks after GBP optimisation + reviews |
| Page 1 for branded searches | Already there |
| Page 1 for "modular kitchen Coimbatore" | 6–10 weeks (with schema + content pages + backlinks) |
| Page 1 for "interior designer Coimbatore" | 3–6 months (high competition) |
| 500+ impressions/day | 8–12 weeks |

**The fastest win:** Fix indexing + optimise Google Business Profile + get 25 reviews. This alone can put you in the Google Maps 3-pack for Coimbatore within 4–6 weeks, which drives more calls than organic results.

---

## 📌 KEY KEYWORDS TO TARGET (Priority Order)

| Keyword | Monthly Searches (Est.) | Competition | Priority |
|---------|------------------------|-------------|----------|
| modular kitchen coimbatore | 1,300/mo | Medium | 🔴 #1 |
| interior designer coimbatore | 880/mo | High | 🔴 #2 |
| kitchen design coimbatore | 590/mo | Medium | 🔴 #3 |
| pvc kitchen coimbatore | 320/mo | Low | 🟡 #4 |
| wardrobe design coimbatore | 260/mo | Low | 🟡 #5 |
| modular kitchen tenkasi | 140/mo | Very Low | 🟢 #6 |
| tv unit design coimbatore | 110/mo | Low | 🟢 #7 |
| interior design company coimbatore | 90/mo | Medium | 🟢 #8 |

---

*End of Audit — Generated for dhasankitchenandinteriors.in on June 22, 2026*
