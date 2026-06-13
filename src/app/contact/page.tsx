import type { Metadata } from "next";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { formatAddress, phoneTel, serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book with Zaina's Hair Planet on WhatsApp. Studio walk-ins Sandton Rivonia or house calls.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
          Contact
        </p>
        <h1 className="font-display mt-2 text-4xl font-bold text-plum">
          Book with {site.owner}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-plum-soft">
          WhatsApp is the fastest way to book — 24/7 assistance from our team.
          Walk-ins welcome at the Sandton Rivonia studio for adult braiding, or
          ask about house calls for kids and families.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-3xl border border-[#25D366]/30 bg-[#25D366]/5 p-8">
            <h2 className="font-display text-xl font-bold text-plum">
              Book Appointment
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-plum-soft">
              Tap to chat on WhatsApp. First-time clients — mention your 20% welcome
              discount.
            </p>
            <p className="mt-4 text-2xl font-bold text-plum">
              {site.whatsapp.display}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <BookButton
                label="Book Appointment"
                variant="whatsapp"
                className="w-full sm:w-auto"
              />
              <BookButton
                label="Kids booking"
                variant="secondary"
                message="Hi! I'd like to book a kids appointment at Kids Hair Planet."
                className="w-full sm:w-auto"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-cream-dark bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-plum">Call us</h2>
            <ul className="mt-4 space-y-3">
              {site.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phoneTel(phone)}`}
                    className="text-lg font-bold text-plum hover:text-gold"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-gold/30 bg-gold-light/20 p-6">
            <h2 className="text-lg font-bold text-plum">Studio</h2>
            <p className="mt-3 text-sm leading-relaxed text-plum-soft">
              {formatAddress()}
            </p>
            <p className="mt-3 text-sm text-plum-soft">
              Walk-ins welcome for adult braiding in our state-of-the-art studio.
            </p>
          </div>

          <div className="rounded-3xl border border-cream-dark bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-plum">Areas we service</h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-plum-soft">
              {serviceAreas.map((area) => (
                <li key={area} className="font-medium">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-rose/30 bg-rose/10 p-6">
            <h2 className="text-lg font-bold text-plum">Email</h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block text-sm font-semibold text-plum hover:text-gold"
            >
              {site.email}
            </a>
          </div>
        </aside>
      </div>

      <p className="mt-12 text-center text-sm text-plum-soft">
        Explore{" "}
        <Link href="/kids" className="font-semibold text-rose-deep hover:underline">
          {site.kidsBrand}
        </Link>{" "}
        or{" "}
        <Link href="/adults" className="font-semibold text-gold hover:underline">
          Adult Styles
        </Link>
      </p>
    </div>
  );
}
