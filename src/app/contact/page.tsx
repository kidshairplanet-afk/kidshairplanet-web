import type { Metadata } from "next";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { formatAddress, phoneTel, serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book an appointment at Kids Hair Planet. WhatsApp 24/7, walk-ins in Sandton Rivonia, or house calls.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-wider text-sky-500">
          Contact
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-slate-900">
          Book your appointment
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          The fastest way to book is on WhatsApp — our team offers 24/7
          assistance. Walk-ins welcome at our Sandton Rivonia studio, or ask
          about house calls in your area.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-3xl border border-[#25D366]/30 bg-[#25D366]/5 p-8">
            <h2 className="text-xl font-bold text-slate-900">WhatsApp us</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Tap below to start a chat. Mention if you&apos;re a first-time
              client for 20% off.
            </p>
            <p className="mt-4 text-2xl font-extrabold text-slate-900">
              {site.whatsapp.display}
            </p>
            <BookButton
              label="Book Appointment on WhatsApp"
              variant="whatsapp"
              className="mt-6 w-full sm:w-auto"
            />
          </div>

          <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Call us</h2>
            <ul className="mt-4 space-y-3">
              {site.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phoneTel(phone)}`}
                    className="text-lg font-bold text-sky-700 hover:underline"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-sky-100 bg-sky-50/60 p-6">
            <h2 className="text-lg font-bold text-slate-900">Studio location</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {formatAddress()}
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Walk-ins welcome for adult braiding in our state-of-the-art studio.
            </p>
          </div>

          <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Areas we service</h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-600">
              {serviceAreas.map((area) => (
                <li key={area} className="font-medium">
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-500">
              House calls available — enquire on WhatsApp.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-100 bg-amber-50 p-6">
            <h2 className="text-lg font-bold text-slate-900">Email</h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block text-sm font-semibold text-sky-700 hover:underline"
            >
              {site.email}
            </a>
          </div>
        </aside>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-slate-500">
          Prefer to browse first?{" "}
          <Link href="/services" className="font-semibold text-sky-600 hover:underline">
            View our services
          </Link>
        </p>
      </div>
    </div>
  );
}
