import type { Metadata } from "next";
import { BookButton } from "@/components/BookButton";
import { formatAddress, serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kids Hair Planet — expert braiding for kids and adults in Sandton Rivonia. Studio walk-ins and house calls.",
};

const values = [
  {
    title: "Expert braiding",
    description:
      "Skilled stylists for all kinds of kids' hairstyles — natural hair or with hairpiece — plus adult braiding at our studio.",
    emoji: "💇🏽‍♀️",
  },
  {
    title: "Studio & house calls",
    description:
      "Walk in at our Sandton Rivonia state-of-the-art studio, or book us to come to you across Johannesburg.",
    emoji: "🏠",
  },
  {
    title: "Always reachable",
    description:
      "Enquire on WhatsApp anytime — 24/7 assistance from our team, even for tight deadlines.",
    emoji: "💬",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wider text-pink-500">
          About Us
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-slate-900">
          Premium braiding for the whole family
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {site.description}
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <article
            key={value.title}
            className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm"
          >
            <div className="text-3xl">{value.emoji}</div>
            <h2 className="mt-4 text-xl font-bold text-slate-800">{value.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {value.description}
            </p>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-[2rem] bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-extrabold text-slate-900">Visit us</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          <p>
            Our studio is in Sandton Rivonia at {formatAddress()}. We welcome
            walk-ins for adult braiding in a comfortable, state-of-the-art space.
          </p>
          <p>
            For kids, we create beautiful braids, twists, and plaits using their
            natural hair or added hairpiece — whatever suits the style. We also
            offer house calls across {serviceAreas.slice(0, -1).join(", ")}, and{" "}
            {serviceAreas[serviceAreas.length - 1]}.
          </p>
          <p>
            New clients enjoy 20% off their first visit. Message us on WhatsApp
            to book — we&apos;re here 24/7 and happy to help with urgent requests.
          </p>
        </div>
        <BookButton label="Book Appointment" variant="whatsapp" className="mt-6" />
      </section>
    </div>
  );
}
