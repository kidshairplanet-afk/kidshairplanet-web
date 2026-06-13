import type { Metadata } from "next";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { GalleryMosaic } from "@/components/GalleryShowcase";
import { ImageFrame } from "@/components/ImageFrame";
import { getGalleryByAudience } from "@/lib/gallery";
import { formatAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Adult Styles",
  description:
    "Premium adult braiding at Zaina's Hair Planet — walk-ins welcome at our Sandton Rivonia state-of-the-art studio.",
};

const adultImages = getGalleryByAudience("adults");

export default function AdultsPage() {
  return (
    <>
      <section className="adult-gradient relative overflow-hidden text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-gold uppercase">
              Studio Walk-ins · Sandton Rivonia
            </p>
            <h1 className="font-display mt-3 text-4xl font-bold sm:text-5xl">
              Adult Braiding
            </h1>
            <p className="mt-1 text-sm text-gold-light">by {site.owner}</p>
            <p className="mt-5 text-base leading-relaxed text-cream/80">
              Step into our state-of-the-art hair studio for expert adult braiding.
              From sleek cornrows to long statement braids — polished, precise, and
              built to last. Walk-ins welcome when available.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-cream/75">
              <li>◆ Precision cornrows & needle cornrows</li>
              <li>◆ Long, medium & short braids</li>
              <li>◆ Natural hair or added hairpiece</li>
              <li>◆ Premium wash & treatment options</li>
              <li>◆ Tight deadlines accommodated</li>
            </ul>
            <p className="mt-4 text-sm text-gold-light">
              {formatAddress()}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton
                label="Book Adult Appointment"
                variant="whatsapp"
                message="Hi! I'd like to book an adult braiding appointment at Zaina's Hair Planet."
              />
              <Link
                href="/kids"
                className="inline-flex items-center justify-center rounded-full border border-rose/40 px-6 py-3 text-sm font-bold text-rose transition hover:bg-rose/10"
              >
                Kids Hair Planet
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ImageFrame
              src="/gallery/style-12.jpg"
              alt="Adult cornrow braids studio finish"
              frame="arch"
              priority
              className="col-span-2"
            />
            <ImageFrame
              src="/gallery/style-17.jpg"
              alt="Adult sleek ponytail"
              frame="tilt-left"
              className="col-span-1"
            />
            <ImageFrame
              src="/gallery/style-15.jpg"
              alt="Adult precision cornrows"
              frame="circle"
              className="col-span-1"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-center text-3xl font-bold text-plum">
          Adult portfolio
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-plum-soft">
          Premium finishes from the studio
        </p>
        <div className="mt-12">
          <GalleryMosaic images={adultImages} />
        </div>
      </section>

      <section className="border-t border-cream-dark bg-cream py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold text-plum">
            Kids styles too?
          </h2>
          <p className="mt-3 text-sm text-plum-soft">
            Zaina specialises in beautiful braids for children — visit Kids Hair Planet.
          </p>
          <Link
            href="/kids"
            className="mt-6 inline-flex text-sm font-bold text-rose-deep hover:text-plum"
          >
            Explore Kids Hair Planet →
          </Link>
        </div>
      </section>
    </>
  );
}
