import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/price-list")({
  beforeLoad: () => {
    throw redirect({ to: "/products", replace: true });
  },
  head: () => ({
    meta: [
      { title: "Product Catalogue | ECA Networks Kenya" },
      { name: "description", content: "Browse the ECA Networks product catalogue. Stock status is shown without public prices." },
      { property: "og:title", content: "Product Catalogue | ECA Networks" },
      { property: "og:description", content: "Browse stocked fibre, networking, cabling and installation equipment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});