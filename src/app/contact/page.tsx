import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book an appointment or get in touch with Kids Hair Planet.",
};

export default function ContactPage() {
  const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-wider text-sky-500">
          Contact
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-slate-900">
          Book a visit or say hello
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Send us a message and we&apos;ll get back to you within one business day.
          For faster booking, call us directly.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <form className="space-y-5 rounded-3xl border border-sky-100 bg-white p-6 shadow-sm lg:col-span-3 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-700">
              Parent name
              <input
                type="text"
                name="parentName"
                required
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-sky-200 focus:ring-2"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Child&apos;s name
              <input
                type="text"
                name="childName"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-sky-200 focus:ring-2"
                placeholder="Child's name"
              />
            </label>
          </div>

          <label className="block text-sm font-semibold text-slate-700">
            Email
            <input
              type="email"
              name="email"
              required
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-sky-200 focus:ring-2"
              placeholder="you@example.com"
            />
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            Phone
            <input
              type="tel"
              name="phone"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-sky-200 focus:ring-2"
              placeholder="(555) 123-4567"
            />
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            Service interested in
            <select
              name="service"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-sky-200 focus:ring-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="kids-cut">Kids Cut</option>
              <option value="first-haircut">First Haircut Package</option>
              <option value="styling">Styling & Braids</option>
              <option value="party">Birthday Party Package</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            Message
            <textarea
              name="message"
              rows={5}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-sky-200 focus:ring-2"
              placeholder="Preferred dates, child's age, or any questions..."
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-sky-500 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:from-sky-600 hover:to-pink-600 sm:w-auto"
          >
            Send Message
          </button>
          <p className="text-xs text-slate-500">
            This form is a placeholder. Connect it to your email provider or booking
            system when you&apos;re ready to go live.
          </p>
        </form>

        <aside className="space-y-6 lg:col-span-2">
          <div className="rounded-3xl border border-sky-100 bg-sky-50/60 p-6">
            <h2 className="text-lg font-bold text-slate-900">Salon info</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-slate-700">Address</dt>
                <dd className="mt-1 text-slate-600">{fullAddress}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-700">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${site.phone}`} className="text-sky-700 hover:underline">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-700">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sky-700 hover:underline"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Hours</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {site.hours.map((row) => (
                <li key={row.day} className="flex justify-between gap-4">
                  <span className="font-semibold text-slate-700">{row.day}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
