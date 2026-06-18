export const featuredServices = [
  {
    id: "boys-braided-locks",
    title: "Boys Hair Cut with Braided Locks",
    description:
      "Stylish cuts combined with neat braided lock designs for boys — clean lines, sharp edges, and creative braid patterns.",
    image: "/services/boys-braided-locks.jpg",
    audience: "kids" as const,
    features: [
      "Custom braid patterns",
      "Clean taper or fade finish",
      "Sharp edge-up styling",
      "Kid-friendly salon experience",
    ],
  },
  {
    id: "girls-dreadlocks",
    title: "Girls Dreadlocks",
    description:
      "Beautifully maintained locs for girls — from starter locs to intricate updos and petal styles.",
    image: "/services/girls-dreadlocks.jpg",
    audience: "kids" as const,
    features: [
      "Loc installation & retwist",
      "Bun & updo styling",
      "Neat parting & scalp care",
      "Decorative loc finishes",
    ],
  },
  {
    id: "cornrows-fade-boys",
    title: "Cornrows with Fade or Taper Cut on Boys",
    description:
      "Classic cornrow braids paired with a crisp fade or taper — a sharp, low-maintenance look for boys.",
    image: "/services/cornrows-fade-boys.jpg",
    audience: "kids" as const,
    features: [
      "Parallel cornrow braiding",
      "Skin fade or taper blend",
      "Defined hairline & edges",
      "Long-lasting style",
    ],
  },
  {
    id: "wig-installations-treatments",
    title: "Wig installations and wig treatments",
    description:
      "Expert wig installation and maintenance — secure fit, natural finish, and professional wig care treatments to keep your look fresh.",
    image: "/services/wig-installations-treatments.jpg",
    audience: "both" as const,
    features: [
      "Custom wig installation",
      "Secure, natural-looking fit",
      "Wig wash & conditioning",
      "Maintenance & restyling",
    ],
  },
  {
    id: "afro-treatment",
    title: "Afro Treatment",
    description:
      "Deep conditioning and care for natural and textured hair — healthier scalp, stronger strands, and lasting moisture.",
    image: "/services/afro-treatment.jpg",
    audience: "both" as const,
    features: [
      "Deep conditioning treatment",
      "Scalp moisturising",
      "Loc & natural hair care",
      "Strengthening & shine boost",
    ],
  },
  {
    id: "braids",
    title: "Braids",
    description:
      "Classic and creative braiding for every length — from short styles to long statement braids, finished with precision and care.",
    image: "/services/braids.jpg",
    audience: "both" as const,
    features: [
      "Short, medium & long braids",
      "Thick, medium & thin sizing",
      "Includes wash & hairpiece",
      "Beads & finishing details",
    ],
  },
] as const;

export function getFeaturedServicesByAudience(audience: "kids" | "adults") {
  return featuredServices.filter(
    (service) => service.audience === audience || service.audience === "both",
  );
}
