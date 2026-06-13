import type { Metadata } from "next";
import { BookButton } from "@/components/BookButton";
import { GalleryMosaic } from "@/components/GalleryShowcase";
import { galleryImages } from "@/lib/gallery";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Portfolio of braiding work by Zaina — kids and adult styles.",
};

export default function GalleryPage() {
  const kidsCount = galleryImages.filter((i) => i.audience === "kids").length;
  const adultCount = galleryImages.filter((i) => i.audience === "adults").length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
          Portfolio
        </p>
        <h1 className="font-display mt-2 text-4xl font-bold text-plum">
          {site.owner}&apos;s gallery
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-plum-soft">
          A curated look at kids and adult braiding — each style crafted with
          precision, care, and creativity.
        </p>
        <p className="mt-2 text-sm text-plum-soft/80">
          {kidsCount} kids styles · {adultCount} adult styles
        </p>
      </div>

      <div className="mt-12">
        <GalleryMosaic images={galleryImages} />
      </div>

      <div className="mt-16 rounded-[2rem] bg-plum px-6 py-10 text-center">
        <h2 className="font-display text-2xl font-bold text-cream">
          Love what you see?
        </h2>
        <p className="mt-2 text-sm text-cream/70">
          Book your appointment on WhatsApp — first-time clients get 20% off.
        </p>
        <BookButton label="Book Appointment" variant="whatsapp" className="mt-6" />
      </div>
    </div>
  );
}
