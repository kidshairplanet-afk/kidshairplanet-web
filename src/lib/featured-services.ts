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
    id: "blowout",
    title: "Blowout",
    description:
      "Volume, shine, and smooth finish — professional blowout styling for a polished, event-ready look.",
    image: "/services/blowout.jpg",
    audience: "both" as const,
    features: [
      "Heat-safe blow dry",
      "Volume & body styling",
      "Smooth, frizz-free finish",
      "Curls or waves on request",
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
    id: "hair-relaxing",
    title: "Hair Relaxing",
    description:
      "Professional relaxer application for smooth, manageable hair — carefully applied with scalp protection.",
    image: "/services/hair-relaxing.jpg",
    audience: "both" as const,
    features: [
      "Professional relaxer application",
      "Scalp protection during process",
      "Smooth, straight finish",
      "Aftercare guidance included",
    ],
  },
] as const;

export function getFeaturedServicesByAudience(audience: "kids" | "adults") {
  return featuredServices.filter(
    (service) => service.audience === audience || service.audience === "both",
  );
}
