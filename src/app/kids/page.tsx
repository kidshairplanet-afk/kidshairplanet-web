import type { Metadata } from "next";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { FeaturedServices } from "@/components/FeaturedServices";
import { GalleryMosaic } from "@/components/GalleryShowcase";
import { ImageFrame } from "@/components/ImageFrame";
import { getGalleryByAudience } from "@/lib/gallery";
import { getFeaturedServicesByAudience } from "@/lib/featured-services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kids Hair Planet",
  description:
    "Kids Hair Planet by Zaina — expert braiding, twists & plaits for children. Natural hair or hairpiece, beads, and house calls.",
};

const kidsImages = getGalleryByAudience("kids");
const kidsFeaturedServices = getFeaturedServicesByAudience("kids");

export default function KidsPage() {
  return (
    <>
      <section className="kids-gradient relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-rose-deep uppercase">
              {site.kidsBrandSlug}
            </p>
            <h1 className="font-display mt-3 text-4xl font-bold text-plum sm:text-5xl">
              {site.kidsBrand}
            </h1>
            <p className="mt-1 text-sm font-semibold text-plum-soft">
              A world of braids by {site.owner}
            </p>
            <p className="mt-5 text-base leading-relaxed text-plum-soft">
              Every child deserves a style they love. Zaina creates all kinds of
              kids&apos; hairstyles — braided with their natural hair or a hairpiece,
              finished with beads and gentle treatments. Patient, playful, and
              picture-perfect every time.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-plum-soft">
              <li>◆ Braids, twists, cornrows & creative plaits</li>
              <li>◆ Natural hair or added hairpiece</li>
              <li>◆ Wash, treatments & detangling</li>
              <li>◆ House calls across Johannesburg</li>
              <li>◆ 20% off for first-time clients</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton
                label="Book Kids Appointment"
                variant="whatsapp"
                message="Hi! I'd like to book a kids braiding appointment at Kids Hair Planet."
              />
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-rose/50 px-6 py-3 text-sm font-bold text-rose-deep transition hover:bg-rose/20"
              >
                View services
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ImageFrame
              src="/gallery/style-10.jpg"
              alt="Kids colourful beaded braids"
              frame="circle"
              priority
              className="col-span-1"
            />
            <ImageFrame
              src="/gallery/style-05.jpg"
              alt="Kids star cornrows with beads"
              frame="hexagon"
              priority
              className="col-span-1 mt-6"
            />
            <ImageFrame
              src="/gallery/style-08.jpg"
              alt="Kids puff bun styling"
              frame="arch"
              className="col-span-2 max-w-sm justify-self-center"
            />
          </div>
        </div>
      </section>

      <FeaturedServices
        services={kidsFeaturedServices}
        heading="Kids styling services"
        description="From braided locks and dreadlocks to cornrows with fades — expert care for boys and girls."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-center text-3xl font-bold text-plum">
          Kids style gallery
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-plum-soft">
          A glimpse of the magic Zaina creates for little ones
        </p>
        <div className="mt-12">
          <GalleryMosaic images={kidsImages} />
        </div>
      </section>

      <section className="border-t border-cream-dark bg-white py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold text-plum">
            Also styling adults?
          </h2>
          <p className="mt-3 text-sm text-plum-soft">
            Zaina&apos;s expertise extends to premium adult braiding at the Sandton
            Rivonia studio.
          </p>
          <Link
            href="/adults"
            className="mt-6 inline-flex text-sm font-bold text-gold hover:text-plum"
          >
            Explore Adult Styles →
          </Link>
        </div>
      </section>
    </>
  );
}
