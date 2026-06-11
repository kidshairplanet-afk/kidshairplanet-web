import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { services, site } from "@/lib/site";

const testimonials = [
  {
    quote:
      "My son used to dread haircuts. Now he asks when we can go back to Kids Hair Planet!",
    name: "Sarah M.",
    role: "Mom of 2",
  },
  {
    quote:
      "The first-haircut package was adorable. They made our daughter feel like a superstar.",
    name: "James T.",
    role: "Dad",
  },
  {
    quote:
      "Patient stylists, bright space, and zero tears. We won't go anywhere else.",
    name: "Priya K.",
    role: "Parent",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-pink-100">
        <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-52 w-52 rounded-full bg-pink-200/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="inline-flex rounded-full bg-white px-4 py-1 text-sm font-bold text-sky-600 shadow-sm">
              Kid-friendly salon · Ages 0–12+
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Happy hair days start at{" "}
              <span className="bg-gradient-to-r from-sky-600 to-pink-500 bg-clip-text text-transparent">
                {site.name}
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-sky-500 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:from-sky-600 hover:to-pink-600"
              >
                Book an Appointment
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-bold text-sky-700 transition hover:bg-sky-50"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/70 p-8 shadow-xl backdrop-blur">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Stress-free cuts", icon: "✂️" },
                { label: "First haircut moments", icon: "🎉" },
                { label: "Fun styling", icon: "🎀" },
                { label: "Patient stylists", icon: "💛" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-gradient-to-br from-sky-50 to-pink-50 p-5 text-center"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <p className="mt-2 text-sm font-bold text-slate-700">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm font-semibold text-slate-500">
              Walk-ins welcome when available · Appointments recommended
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
              Cuts, styles & special moments
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-bold text-sky-600 hover:text-sky-700"
          >
            See all services →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-sm font-bold uppercase tracking-wider text-sky-500">
            Parent Approved
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-slate-900">
            Families love the experience
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="rounded-3xl border border-sky-100 bg-sky-50/50 p-6"
              >
                <p className="text-sm leading-relaxed text-slate-700">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-4">
                  <p className="font-bold text-slate-800">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-[2rem] bg-gradient-to-r from-sky-500 to-pink-500 px-6 py-10 text-center text-white shadow-xl sm:px-10">
          <h2 className="text-3xl font-extrabold">Ready for a great hair day?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-sky-50 sm:text-base">
            Book online or give us a call. We&apos;ll match your child with a stylist
            who knows how to make salon time fun.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-sky-700 transition hover:bg-sky-50"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
