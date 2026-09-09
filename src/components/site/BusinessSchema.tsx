import { BRANDS, COMPANY, LOCATIONS, SHOP_URL } from "@/lib/eca";

const SITE = "https://fluid-shine-flow.lovable.app";

/** Organisation and branch level structured data, rendered once per page. */
export function BusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: COMPANY.name,
        alternateName: COMPANY.short,
        url: SITE,
        foundingDate: String(COMPANY.founded),
        email: COMPANY.email,
        telephone: COMPANY.phone,
        description: COMPANY.tagline,
        sameAs: [SHOP_URL],
        knowsAbout: [
          "fibre optic cable supply",
          "structured cabling",
          "networking and wireless equipment",
          "CCTV and access control",
          "PABX and IP telephony",
        ],
        brand: BRANDS.map((brand) => ({ "@type": "Brand", name: brand })),
        areaServed: { "@type": "Country", name: "Kenya" },
      },
      ...LOCATIONS.map((location) => ({
        "@type": "LocalBusiness",
        "@id": `${SITE}/#${location.city.toLowerCase()}`,
        name: `${COMPANY.short} ${location.city}`,
        parentOrganization: { "@id": `${SITE}/#organization` },
        url: `${SITE}/contact`,
        telephone: location.phone,
        email: COMPANY.email,
        openingHours: location.hours,
        hasMap: location.maps,
        address: {
          "@type": "PostalAddress",
          streetAddress: location.address,
          addressLocality: location.city,
          addressCountry: "KE",
        },
        priceRange: "KES",
      })),
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: COMPANY.short,
        publisher: { "@id": `${SITE}/#organization` },
      },
    ],
  };

  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}
