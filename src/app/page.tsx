import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { ServiceCategory } from "@/components/ServiceCategory";
import {
  formatAddress,
  serviceAreas,
  serviceCategories,
  site,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-pink-100">
        <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-52 w-52 rounded-full bg-pink-200/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="inline-flex rounded-full bg-white px-4 py-1 text-sm font-bold text-sky-600 shadow-sm">
              Walk-ins · Sandton Rivonia · House calls
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Expert braiding at{" "}
              <span className="bg-gradient-to-r from-sky-600 to-pink-500 bg-clip-text text-transparent">
                {site.name}
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton label="Book Appointment" variant="whatsapp" />
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-bold text-sky-700 transition hover:bg-sky-50"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/70 p-8 shadow-xl backdrop-blur">
            <p className="text-center text-sm font-bold uppercase tracking-wider text-pink-500">
              Why families choose us
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {site.highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-gradient-to-br from-sky-50 to-pink-50 p-4 text-center"
                >
                  <div className="text-2xl">{item.emoji}</div>
                  <p className="mt-2 text-xs font-bold leading-snug text-slate-700">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm font-semibold text-slate-500">
              Studio: {formatAddress()}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-pink-500">
              Our Services
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Braids, twists, plaits & treatments
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              All kinds of hairstyles for kids — braided with natural hair or
              hairpiece. Adult braiding available at our Sandton Rivonia studio.
            </p>
          </div>
          <Link
            href="/services"
            className="text-sm font-bold text-sky-600 hover:text-sky-700"
          >
            See full menu →
          </Link>
        </div>

        <div className="mt-8 space-y-6">
          {serviceCategories.slice(0, 2).map((category) => (
            <ServiceCategory key={category.id} {...category} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-sm font-bold uppercase tracking-wider text-sky-500">
            Areas We Service
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-slate-900">
            Johannesburg & surrounds
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Visit our Sandton Rivonia studio or book a house call in your area.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className={`rounded-full px-5 py-2 text-sm font-bold ${
                  area === "Sandton" || area === "Rivonia"
                    ? "bg-gradient-to-r from-sky-500 to-pink-500 text-white shadow-md"
                    : "border border-sky-100 bg-sky-50 text-slate-700"
                }`}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-[2rem] bg-gradient-to-r from-sky-500 to-pink-500 px-6 py-10 text-center text-white shadow-xl sm:px-10">
          <p className="text-sm font-bold uppercase tracking-wider text-sky-100">
            First-time clients get 20% off
          </p>
          <h2 className="mt-2 text-3xl font-extrabold">
            Book your style on WhatsApp — 24/7
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-sky-50 sm:text-base">
            Easily enquire anytime. Our team assists on WhatsApp around the clock,
            and we can work with tight deadlines when you need styles in a hurry.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <BookButton
              label="Chat on WhatsApp"
              variant="whatsapp"
              className="!bg-white !text-[#25D366] hover:!bg-sky-50"
            />
            <BookButton
              label="Book Appointment"
              message="Hi! I'd like to book an appointment at Kids Hair Planet."
              className="!bg-slate-900 !from-slate-900 !to-slate-800 hover:!bg-slate-800"
            />
          </div>
        </div>
      </section>
    </>
  );
}
