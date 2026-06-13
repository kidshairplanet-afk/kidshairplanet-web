import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { GalleryCta, GalleryShowcase } from "@/components/GalleryShowcase";
import { ImageFrame } from "@/components/ImageFrame";
import { galleryImages, getGalleryByAudience } from "@/lib/gallery";
import { formatAddress, serviceAreas, site } from "@/lib/site";

const kidsPreview = getGalleryByAudience("kids").slice(0, 4);
const adultPreview = getGalleryByAudience("adults").slice(0, 3);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-plum text-cream">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,168,108,0.15)_0%,_transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(232,180,188,0.1)_0%,_transparent_50%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-gold uppercase">
              Sandton Rivonia · Studio & House Calls
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              {site.name}
            </h1>
            <p className="mt-2 text-lg text-gold-light">{site.tagline}</p>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/75 sm:text-base">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton label="Book Appointment" variant="whatsapp" />
              <Link
                href="/kids"
                className="inline-flex items-center justify-center rounded-full border border-rose/50 bg-rose/10 px-6 py-3 text-sm font-bold text-rose transition hover:bg-rose/20"
              >
                {site.kidsBrand}
              </Link>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
            <ImageFrame
              src="/gallery/style-12.jpg"
              alt="Adult cornrow braids"
              frame="arch"
              priority
              className="col-span-1 mt-8"
            />
            <ImageFrame
              src="/gallery/style-10.jpg"
              alt="Kids colourful beaded braids"
              frame="circle"
              priority
              className="col-span-1"
            />
            <ImageFrame
              src="/gallery/style-17.jpg"
              alt="Adult sleek studio styling"
              frame="tilt-right"
              className="col-span-2 max-w-xs justify-self-center"
            />
          </div>
        </div>
      </section>

      {/* Dual audience cards */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
            One artist. Every age.
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold text-plum sm:text-4xl">
            Crafted for kids & adults
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Kids Hair Planet */}
          <Link
            href="/kids"
            className="group relative overflow-hidden rounded-[2rem] kids-gradient p-8 shadow-lg transition hover:shadow-xl sm:p-10"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-rose/30 blur-2xl" />
            <p className="text-xs font-bold tracking-[0.2em] text-rose-deep uppercase">
              {site.kidsBrandSlug}
            </p>
            <h3 className="font-display mt-2 text-3xl font-bold text-plum">
              {site.kidsBrand}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-plum-soft">
              Playful braids, twists & plaits for little ones — natural hair or
              hairpiece, with beads and gentle care. House calls welcome.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {kidsPreview.slice(0, 3).map((img) => (
                <ImageFrame
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  frame="rounded"
                  className="!shadow-none gold-ring"
                />
              ))}
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rose-deep">
              Explore kids styles <span className="transition group-hover:translate-x-1">→</span>
            </span>
          </Link>

          {/* Adult Styles */}
          <Link
            href="/adults"
            className="group relative overflow-hidden rounded-[2rem] adult-gradient p-8 text-cream shadow-lg transition hover:shadow-xl sm:p-10"
          >
            <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-gold/20 blur-2xl" />
            <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Studio Walk-ins
            </p>
            <h3 className="font-display mt-2 text-3xl font-bold">Adult Braiding</h3>
            <p className="mt-4 text-sm leading-relaxed text-cream/75">
              Walk into our state-of-the-art Sandton Rivonia studio for expert
              adult braiding — cornrows, long braids, and polished finishes.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {adultPreview.map((img) => (
                <ImageFrame
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  frame="rounded"
                  className="!shadow-none"
                />
              ))}
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold">
              Explore adult styles <span className="transition group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-cream-dark bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {site.highlights.map((item) => (
            <div key={item.title} className="text-center sm:text-left">
              <div className="mx-auto mb-3 h-px w-8 bg-gold sm:mx-0" />
              <h3 className="font-display text-lg font-bold text-plum">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-plum-soft">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Portfolio
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold text-plum">
              Zaina&apos;s work
            </h2>
          </div>
        </div>
        <div className="mt-10">
          <GalleryShowcase images={galleryImages} limit={8} />
          <GalleryCta />
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-cream-dark py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-center text-2xl font-bold text-plum">
            Areas we service
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-plum-soft">
            Studio at {formatAddress()} · House calls across Johannesburg
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className={`rounded-full px-5 py-2 text-sm font-semibold ${
                  area === "Sandton" || area === "Rivonia"
                    ? "bg-plum text-cream"
                    : "border border-gold/40 bg-white text-plum-soft"
                }`}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="rounded-[2rem] bg-plum px-6 py-12 text-center sm:px-12">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
            First-time clients · 20% off
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-cream">
            Book with Zaina on WhatsApp
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-cream/70">
            24/7 assistance · Tight deadlines welcome · Studio walk-ins & house calls
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <BookButton label="Book Appointment" variant="whatsapp" />
          </div>
        </div>
      </section>
    </>
  );
}
