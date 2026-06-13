import type { Metadata } from "next";
import { BookButton } from "@/components/BookButton";
import { ServiceCategory } from "@/components/ServiceCategory";
import { serviceCategories, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Expert braiding, twists, plaiting, and hair treatments for kids and adults. Studio walk-ins and house calls.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wider text-sky-500">
          Services
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-slate-900">
          Our full service menu
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Expert braiding for kids and adults — natural hair or with hairpiece.
          Walk-ins welcome at our Sandton Rivonia studio, or book a house call.
          Enquire on WhatsApp for pricing and availability.
        </p>
        <div className="mt-6">
          <BookButton label="Book Appointment" variant="whatsapp" />
        </div>
      </div>

      <div className="mt-10 space-y-8">
        {serviceCategories.map((category) => (
          <ServiceCategory key={category.id} {...category} />
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-emerald-100 bg-emerald-50 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-slate-900">Good to know</h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
          <li>• First-time clients receive 20% off — mention when you book.</li>
          <li>• We braid with your child&apos;s natural hair or added hairpiece.</li>
          <li>• House calls available across our service areas.</li>
          <li>• Tight deadlines? WhatsApp us — we&apos;ll do our best to accommodate.</li>
          <li>• 24/7 WhatsApp assistance from our team.</li>
        </ul>
        <BookButton
          label="Enquire on WhatsApp"
          variant="whatsapp"
          className="mt-6"
        />
      </div>
    </div>
  );
}
