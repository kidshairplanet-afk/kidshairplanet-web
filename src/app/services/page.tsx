import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Haircuts, first-haircut packages, styling, and party packages for kids.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-wider text-sky-500">
          Services
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-slate-900">
          Services made for little ones
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Every service is designed around comfort, patience, and a little bit of
          fun. Prices may vary by hair length and style complexity.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-amber-100 bg-amber-50 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-slate-900">Salon policies</h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
          <li>• Children under 12 must be accompanied by a parent or guardian.</li>
          <li>• Please arrive 5 minutes early so little ones can settle in.</li>
          <li>• Cancellations within 24 hours may incur a fee.</li>
          <li>• We use gentle, kid-safe products whenever possible.</li>
        </ul>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800"
        >
          Questions? Contact us
        </Link>
      </div>
    </div>
  );
}
