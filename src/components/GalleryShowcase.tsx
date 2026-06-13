import Link from "next/link";
import { ImageFrame } from "@/components/ImageFrame";
import type { GalleryImage } from "@/lib/gallery";

type GalleryShowcaseProps = {
  images: GalleryImage[];
  limit?: number;
};

export function GalleryShowcase({ images, limit }: GalleryShowcaseProps) {
  const display = limit ? images.slice(0, limit) : images;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
      {display.map((img, i) => (
        <div
          key={img.src}
          className={i % 5 === 0 ? "col-span-2 row-span-2" : ""}
        >
          <ImageFrame
            src={img.src}
            alt={img.alt}
            frame={img.frame}
            priority={i < 2}
            className="h-full w-full"
          />
        </div>
      ))}
    </div>
  );
}

export function GalleryMosaic({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-6">
      {images.map((img, i) => {
        const spans = [
          "col-span-2 row-span-2",
          "col-span-1 row-span-1",
          "col-span-1 row-span-2",
          "col-span-1 row-span-1",
          "col-span-2 row-span-1",
          "col-span-1 row-span-1",
          "col-span-1 row-span-2",
          "col-span-1 row-span-1",
        ];
        return (
          <div key={img.src} className={spans[i % spans.length]}>
            <ImageFrame
              src={img.src}
              alt={img.alt}
              frame={img.frame}
              className="h-full min-h-[180px] w-full sm:min-h-[220px]"
            />
          </div>
        );
      })}
    </div>
  );
}

export function GalleryCta() {
  return (
    <div className="mt-8 text-center">
      <Link
        href="/gallery"
        className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-gold uppercase transition hover:text-plum"
      >
        View full gallery
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
