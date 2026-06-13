import type { Metadata } from "next";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { ImageFrame } from "@/components/ImageFrame";
import { formatAddress, serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Zaina — premium braiding for kids and adults at Sandton Rivonia and across Johannesburg.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
            About
          </p>
          <h1 className="font-display mt-2 text-4xl font-bold text-plum sm:text-5xl">
            Meet {site.owner}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-plum-soft">
            {site.name} is the home of {site.owner}&apos;s braiding artistry — a
            premium studio experience that welcomes both children and adults.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-plum-soft">
            While {site.kidsBrand} remains at the heart of what we do, Zaina
            recognised that her skill serves every generation. Today, families
            book kids&apos; styles and adults walk in for the same expert
            craftsmanship — all under one roof in Sandton Rivonia.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton label="Book Appointment" variant="whatsapp" />
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-gold/50 px-6 py-3 text-sm font-bold text-plum transition hover:bg-cream-dark"
            >
              View gallery
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <ImageFrame
            src="/gallery/style-01.jpg"
            alt="Zaina's kids braiding work"
            frame="arch"
            className="col-span-1"
          />
          <ImageFrame
            src="/gallery/style-12.jpg"
            alt="Zaina's adult braiding work"
            frame="circle"
            className="col-span-1 mt-8"
          />
        </div>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Kids first",
            text: `${site.kidsBrand} is our foundation — playful, patient braiding that kids love to show off.`,
          },
          {
            title: "Adults welcome",
            text: "Walk into our state-of-the-art studio for polished adult braiding and cornrows.",
          },
          {
            title: "One artist",
            text: "Every style is crafted by Zaina — consistent quality, every appointment.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-cream-dark bg-white p-6 shadow-sm"
          >
            <div className="h-px w-8 bg-gold" />
            <h2 className="font-display mt-4 text-xl font-bold text-plum">
              {item.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-plum-soft">
              {item.text}
            </p>
          </article>
        ))}
      </div>

      <section className="mt-16 rounded-[2rem] bg-cream-dark p-8 sm:p-10">
        <h2 className="font-display text-2xl font-bold text-plum">Visit the studio</h2>
        <p className="mt-3 text-sm text-plum-soft">{formatAddress()}</p>
        <p className="mt-2 text-sm text-plum-soft">
          Also serving: {serviceAreas.join(", ")}
        </p>
      </section>
    </div>
  );
}
