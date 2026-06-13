import type { Metadata } from "next";
import { BookButton } from "@/components/BookButton";
import { ServiceCategory } from "@/components/ServiceCategory";
import { serviceCategories, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Braiding services for kids and adults — twists, plaits, braids, and treatments. Studio & house calls.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
          Services
        </p>
        <h1 className="font-display mt-2 text-4xl font-bold text-plum">
          Our full service menu
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-plum-soft">
          Zaina offers expert braiding for kids and adults — natural hair or
          hairpiece. Enquire on WhatsApp for pricing and availability. Walk-ins
          at Sandton Rivonia for adult styles; house calls available across
          Johannesburg.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <BookButton label="Book Appointment" variant="whatsapp" />
          <BookButton
            label="Kids booking"
            variant="secondary"
            message="Hi! I'd like to book a kids braiding appointment."
          />
        </div>
      </div>

      <div className="mt-12 space-y-8">
        {serviceCategories.map((category) => (
          <ServiceCategory key={category.id} {...category} />
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl kids-gradient border border-rose/30 p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-plum">
            {site.kidsBrand}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-plum-soft">
            All braiding, twisting & plaiting services are available for children
            — with patience, beads, and gentle care.
          </p>
        </div>
        <div className="rounded-3xl border border-plum/20 bg-plum p-6 text-cream sm:p-8">
          <h2 className="font-display text-xl font-bold">Adult Styles</h2>
          <p className="mt-2 text-sm leading-relaxed text-cream/75">
            Walk into our Sandton Rivonia studio for premium adult braiding —
            cornrows, long braids, and polished studio finishes.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-gold/30 bg-gold-light/20 p-6 sm:p-8">
        <h2 className="font-display text-xl font-bold text-plum">Good to know</h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-plum-soft">
          <li>◆ First-time clients receive 20% off — mention when you book.</li>
          <li>◆ Natural hair or added hairpiece — your choice.</li>
          <li>◆ House calls across our service areas.</li>
          <li>◆ Tight deadlines? WhatsApp us — we&apos;ll do our best.</li>
          <li>◆ 24/7 WhatsApp assistance from our team.</li>
        </ul>
      </div>
    </div>
  );
}
