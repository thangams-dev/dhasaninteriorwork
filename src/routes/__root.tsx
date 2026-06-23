import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dhasan Kitchen & Interior Work — Modular Kitchens & Home Interiors in Coimbatore" },
      { name: "description", content: "Coimbatore's trusted modular kitchen & home interior studio. Wardrobes, TV units, study tables & complete living solutions crafted with premium materials." },
      { name: "keywords", content: "modular kitchen Coimbatore, interior design Coimbatore, PVC kitchen, wardrobe design, TV unit, home interiors, kitchen design, interior decorator, furniture design, Tenkasi interior, affordable kitchens, custom interiors, modular kitchen Tenkasi, kitchen design Tenkasi, interior designer Coimbatore, interior designer Tenkasi, kitchen renovation Coimbatore, home interiors Tenkasi, wardrobe design Tenkasi, TV unit design Coimbatore, TV unit design Tenkasi, pooja unit design, bedroom interior design, office interior design, false ceiling Coimbatore, wall partition design, interior design company Coimbatore, best interior designer Coimbatore, top interior designers Coimbatore, luxury kitchens Coimbatore, kitchen cabinet design, custom kitchen design, furniture design Tenkasi, kitchen interiors Coimbatore, home design Coimbatore, interior decoration Coimbatore, kitchen remodeling Coimbatore, home renovation Coimbatore, interior design services, professional kitchen designer, award-winning interior design, kitchen installation Coimbatore, kitchen fitting Coimbatore, modular wardrobe Coimbatore, custom wardrobes, interior design inspiration, modern interior design, contemporary kitchen design, traditional kitchen design, minimalist interior design, luxury interior design, interior design consultation, free design consultation, kitchen design consultation, interior design company Tenkasi, professional interior designer, experienced kitchen designer" },
      { name: "author", content: "Dhasan Kitchen & Interior Work" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "7 days" },
      { property: "og:title", content: "Dhasan Kitchen & Interior Work — Modular Kitchens & Home Interiors in Coimbatore" },
      { property: "og:description", content: "Coimbatore and Tenkasi's trusted modular kitchen & home interior studio. Wardrobes, TV units, study tables & complete living solutions crafted with premium materials." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.dhasankitchenandinteriors.in/" },
      { property: "og:site_name", content: "Dhasan Kitchen & Interior Work" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dhasan Kitchen & Interior Work — Modular Kitchens & Home Interiors in Coimbatore" },
      { name: "twitter:description", content: "Coimbatore and Tenkasi's trusted modular kitchen & home interior studio. Wardrobes, TV units, study tables & complete living solutions crafted with premium materials." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/f505238e-7c34-4e61-a84f-e7edc6b5cc2a" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/f505238e-7c34-4e61-a84f-e7edc6b5cc2a" },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Coimbatore, Tenkasi" },
    ],
    links: [
      { rel: "canonical", href: "https://www.dhasankitchenandinteriors.in/" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap" },
      { rel: "dns-prefetch", href: "https://www.google-analytics.com" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

import Layout from "../components/Layout";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <>
      {/* LocalBusiness JSON-LD Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Interior Design Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Modular Kitchen Design Coimbatore", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "10" } } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PVC Modular Kitchen Coimbatore", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "10" } } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wardrobe Design Coimbatore", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "10" } } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TV Unit Design Coimbatore", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "10" } } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pooja Unit Design Coimbatore", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "10" } } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Interior Design Coimbatore", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "10" } } }
              ]
            }
          })
        }}
      />

      {/* Google Analytics 4 */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
      <script 
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }}
      />

      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </>
  );
}
