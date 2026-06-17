import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import type { featuredServices } from "@/lib/featured-services";

type FeaturedService = (typeof featuredServices)[number];

type FeaturedServicesProps = {
  services: readonly FeaturedService[];
  heading?: string;
  description?: string;
};

export function FeaturedServices({
  services,
  heading = "Featured services",
  description = "Our most requested styles — book on WhatsApp for pricing and availability.",
}: FeaturedServicesProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
          Portfolio
        </p>
        <h2 className="font-display mt-2 text-3xl font-bold text-plum sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-plum-soft sm:text-base">
          {description}
        </p>
      </div>

      <div className="mt-12 space-y-12">
        {services.map((service, index) => (
          <article
            key={service.id}
            id={service.id}
            className="scroll-mt-24 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative overflow-hidden rounded-[2rem] gold-ring">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <h3 className="font-display text-2xl font-bold text-plum sm:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-plum-soft sm:text-base">
                {service.description}
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 rounded-xl bg-cream-dark px-4 py-3 text-sm text-plum-soft"
                  >
                    <span className="mt-0.5 text-gold">◆</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <BookButton
                  label={`Book ${service.title}`}
                  variant="whatsapp"
                  message={`Hi! I'd like to enquire about ${service.title}.`}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
