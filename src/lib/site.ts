export const site = {
  name: "Kids Hair Planet",
  tagline: "Expert braiding for kids & adults — studio & house calls",
  description:
    "We offer walk-ins in Sandton Rivonia for adult braiding in a state-of-the-art hair studio. Expert braiding for all kinds of kids' hairstyles — with their natural hair or hairpiece — plus house calls across Johannesburg.",
  phones: ["078 965 9521", "078 041 1803"],
  whatsapp: {
    number: "27789659521",
    display: "078 965 9521",
    defaultMessage:
      "Hi Kids Hair Planet! I'd like to enquire about booking an appointment.",
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
      emoji: "🎁",
    },
    {
      title: "Tight deadlines? We deliver",
      description: "We can manage urgent bookings when you need styles in a hurry.",
      emoji: "⚡",
    },
    {
      title: "24/7 WhatsApp assistance",
      description: "Easily enquire anytime — our team is here to help on WhatsApp.",
      emoji: "💬",
    },
    {
      title: "Walk-ins & house calls",
      description:
        "Visit our Sandton Rivonia studio or book a house call for added convenience.",
      emoji: "🏠",
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
    emoji: "💧",
    color: "sky",
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
    emoji: "🌀",
    color: "emerald",
    note: "Includes wash, hairpiece & beads",
    items: ["Short length", "Medium length", "Long length"],
  },
  {
    id: "plaiting",
    title: "Plaiting Hair",
    emoji: "✨",
    color: "amber",
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
    emoji: "🎀",
    color: "pink",
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
  { href: "/services", label: "Services" },
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
