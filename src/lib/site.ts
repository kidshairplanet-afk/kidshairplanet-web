export const site = {
  name: "Kids Hair Planet",
  tagline: "Where every haircut is an adventure",
  description:
    "A fun, kid-friendly hair salon specializing in stress-free cuts, styles, and first-haircut experiences for children of all ages.",
  phone: "(555) 123-4567",
  email: "hello@kidshairplanet.com",
  address: {
    street: "123 Rainbow Lane",
    city: "Sunnyvale",
    state: "CA",
    zip: "94086",
  },
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 5:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
} as const;

export const services = [
  {
    id: "kids-cut",
    title: "Kids Cut",
    price: "From $25",
    description:
      "Gentle, patient cuts tailored to your child's age and comfort level.",
    emoji: "✂️",
  },
  {
    id: "first-haircut",
    title: "First Haircut Package",
    price: "From $35",
    description:
      "A memorable milestone with a certificate, photo moment, and extra TLC.",
    emoji: "🎉",
  },
  {
    id: "style-braids",
    title: "Styling & Braids",
    price: "From $30",
    description:
      "Braids, twists, and special-occasion styles that kids love to show off.",
    emoji: "🎀",
  },
  {
    id: "bang-trim",
    title: "Bang Trim",
    price: "$10",
    description: "Quick between-cut touch-ups to keep bangs out of little eyes.",
    emoji: "⭐",
  },
  {
    id: "parent-child",
    title: "Parent + Child Duo",
    price: "From $45",
    description: "Back-to-back appointments so the whole family leaves looking great.",
    emoji: "👨‍👩‍👧",
  },
  {
    id: "party-package",
    title: "Birthday Party Package",
    price: "Custom quote",
    description:
      "Mini salon party with styling stations, goodies, and a celebration vibe.",
    emoji: "🎂",
  },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
