export type FrameStyle = "arch" | "circle" | "rounded" | "tilt-left" | "tilt-right" | "hexagon";

export type GalleryImage = {
  src: string;
  alt: string;
  audience: "kids" | "adults";
  frame: FrameStyle;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/style-01.jpg",
    alt: "Kids cornrow ponytail with curled ends",
    audience: "kids",
    frame: "arch",
  },
  {
    src: "/gallery/style-02.jpg",
    alt: "Kids braided ponytail with purple beads",
    audience: "kids",
    frame: "tilt-right",
  },
  {
    src: "/gallery/style-03.jpg",
    alt: "Kids intricate cornrow pattern",
    audience: "kids",
    frame: "circle",
  },
  {
    src: "/gallery/style-04.jpg",
    alt: "Kids creative braided style",
    audience: "kids",
    frame: "rounded",
  },
  {
    src: "/gallery/style-05.jpg",
    alt: "Kids star-pattern cornrows with beaded ponytail",
    audience: "kids",
    frame: "hexagon",
  },
  {
    src: "/gallery/style-06.jpg",
    alt: "Kids neat braided updo",
    audience: "kids",
    frame: "tilt-left",
  },
  {
    src: "/gallery/style-07.jpg",
    alt: "Kids braided style with accessories",
    audience: "kids",
    frame: "rounded",
  },
  {
    src: "/gallery/style-08.jpg",
    alt: "Kids puff bun with gold hair sticks",
    audience: "kids",
    frame: "circle",
  },
  {
    src: "/gallery/style-09.jpg",
    alt: "Kids long braids",
    audience: "kids",
    frame: "arch",
  },
  {
    src: "/gallery/style-10.jpg",
    alt: "Kids cornrows with colourful beads",
    audience: "kids",
    frame: "tilt-right",
  },
  {
    src: "/gallery/style-11.jpg",
    alt: "Kids braided look",
    audience: "kids",
    frame: "rounded",
  },
  {
    src: "/gallery/style-12.jpg",
    alt: "Adult cornrow braids — studio finish",
    audience: "adults",
    frame: "arch",
  },
  {
    src: "/gallery/style-13.jpg",
    alt: "Kids braided style detail",
    audience: "kids",
    frame: "circle",
  },
  {
    src: "/gallery/style-14.jpg",
    alt: "Kids braided updo",
    audience: "kids",
    frame: "tilt-left",
  },
  {
    src: "/gallery/style-15.jpg",
    alt: "Adult precision cornrows",
    audience: "adults",
    frame: "rounded",
  },
  {
    src: "/gallery/style-16.jpg",
    alt: "Adult braided style",
    audience: "adults",
    frame: "hexagon",
  },
  {
    src: "/gallery/style-17.jpg",
    alt: "Adult sleek high ponytail — studio styling",
    audience: "adults",
    frame: "tilt-right",
  },
  {
    src: "/services/boys-braided-locks.jpg",
    alt: "Boys hair cut with braided locks",
    audience: "kids",
    frame: "rounded",
  },
  {
    src: "/services/girls-dreadlocks.jpg",
    alt: "Girls dreadlocks updo styling",
    audience: "kids",
    frame: "arch",
  },
  {
    src: "/services/cornrows-fade-boys.jpg",
    alt: "Cornrows with fade on boys",
    audience: "kids",
    frame: "circle",
  },
  {
    src: "/services/cornrows-design.jpg",
    alt: "Creative cornrow braid design",
    audience: "adults",
    frame: "tilt-left",
  },
  {
    src: "/services/wig-installations-treatments.jpg",
    alt: "Wig installations and wig treatments",
    audience: "adults",
    frame: "rounded",
  },
  {
    src: "/services/afro-treatment.jpg",
    alt: "Afro hair treatment and loc care",
    audience: "kids",
    frame: "hexagon",
  },
  {
    src: "/services/braids.jpg",
    alt: "Long braids styling",
    audience: "adults",
    frame: "arch",
  },
];

export function getGalleryByAudience(audience: "kids" | "adults") {
  return galleryImages.filter((img) => img.audience === audience);
}
