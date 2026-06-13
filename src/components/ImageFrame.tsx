import Image from "next/image";
import type { FrameStyle } from "@/lib/gallery";

type ImageFrameProps = {
  src: string;
  alt: string;
  frame: FrameStyle;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

const frameClasses: Record<FrameStyle, string> = {
  arch: "frame-arch",
  circle: "rounded-full aspect-square",
  rounded: "rounded-3xl",
  "tilt-left": "rounded-2xl -rotate-2",
  "tilt-right": "rounded-2xl rotate-2",
  hexagon: "frame-hexagon aspect-[4/5]",
};

export function ImageFrame({
  src,
  alt,
  frame,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
}: ImageFrameProps) {
  const isCircle = frame === "circle";
  const isHex = frame === "hexagon";

  return (
    <div
      className={`group relative overflow-hidden gold-ring ${frameClasses[frame]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={isCircle || isHex ? 500 : 600}
        height={isCircle ? 500 : isHex ? 625 : 750}
        priority={priority}
        sizes={sizes}
        className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
          isCircle ? "aspect-square" : isHex ? "aspect-[4/5]" : "aspect-[4/5]"
        }`}
      />
    </div>
  );
}
