export const site = {
  name: "Zaina's Hair Planet",
  owner: "Zaina",
  kidsBrand: "Kids Hair Planet",
  kidsBrandSlug: "kidshairplanet",
  tagline: "Premium braiding artistry for every generation",
  description:
    "From playful kids' styles to polished adult braids — Zaina brings expert craftsmanship to Sandton Rivonia and beyond. Walk into our state-of-the-art studio or book a house call.",
  phones: ["078 965 9521", "078 041 1803"],
  whatsapp: {
    number: "27789659521",
    display: "078 965 9521",
    defaultMessage:
      "Hi Zaina's Hair Planet! I'd like to enquire about booking an appointment.",
  },
  email: "kidshairplanet@gmail.com",
  address: {
    street: "Cnr 7th Ave & Rivonia Rd, Edenburg",
    city: "Sandton",
    state: "Gauteng",
    zip: "2128",
  },
  highlights: [
    {
      title: "20% off first-time clients",
      description: "Welcome offer for new clients — mention it when you book.",
    },
    {
      title: "Tight deadlines? We deliver",
      description: "Urgent styles handled with care and precision.",
    },
    {
      title: "24/7 WhatsApp assistance",
      description: "Enquire anytime — our team responds on WhatsApp.",
    },
    {
      title: "Studio & house calls",
      description: "Walk in at Sandton Rivonia or book us to come to you.",
    },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
} as const;

export const serviceAreas = [
  "Midrand",
  "Randburg",
  "Sandton",
  "Ferndale",
  "Fourways",
  "Halfway House",
  "Rivonia",
  "Sandown",
] as const;

export const serviceCategories = [
  {
    id: "wash-treatments",
    title: "Hair Wash & Treatments",
    color: "gold",
    audience: "both" as const,
    note: null,
    items: [
      "Hair Wash",
      "Detangler Treatment Auntie Jackie",
      "Organics Mayo Treatment",
      "Organics Detangler Treatment",
      "Cantu and Mizani Treatment",
      "Design Essentials Treatment",
    ],
  },
  {
    id: "twists",
    title: "Twists",
    color: "rose",
    audience: "both" as const,
    note: "Includes wash, hairpiece & beads",
    items: ["Short length", "Medium length", "Long length"],
  },
  {
    id: "plaiting",
    title: "Plaiting Hair",
    color: "plum",
    audience: "both" as const,
    note: "Includes wash & beads",
    items: [
      "Cornrows — without hairpiece",
      "Cornrows — with added wool",
      "Cornrows — with added hairpiece",
      "Needle Cornrows — without hairpiece",
      "Needle Cornrows — with added hairpiece",
      "Pony Tails — without hairpiece",
      "Pony Tails — with added hairpiece",
      "Pamper Style — Two Braids",
      "Ben & Betty",
      "Freehand singles — without hairpiece",
      "Freehand singles — with added hairpiece or wool",
      "Freehand long with added hairpiece",
    ],
  },
  {
    id: "braids",
    title: "Braids",
    color: "gold",
    audience: "both" as const,
    note: "Includes wash, hairpiece & beads",
    items: [
      "Short Braids — thick",
      "Short Braids — medium",
      "Short Braids — thin",
      "Medium Braids — thick",
      "Medium Braids — medium",
      "Medium Braids — thin",
      "Long Braids — thick",
      "Long Braids — medium",
      "Long Braids — thin",
    ],
  },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/kids", label: "Kids Hair Planet" },
  { href: "/adults", label: "Adult Styles" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(message ?? site.whatsapp.defaultMessage);
  return `https://wa.me/${site.whatsapp.number}?text=${text}`;
}

export function formatAddress() {
  const { street, city, state, zip } = site.address;
  return `${street}, ${city}, ${state} ${zip}`;
}

export function phoneTel(number: string) {
  return `+27${number.replace(/\s/g, "").slice(1)}`;
}
