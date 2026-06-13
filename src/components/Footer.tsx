import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { formatAddress, navLinks, phoneTel, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-plum-soft/20 bg-plum text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-bold text-cream">{site.name}</p>
          <p className="mt-1 text-sm font-semibold tracking-widest text-gold uppercase">
            by {site.owner}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/70">
            {site.tagline}
          </p>
          <p className="mt-2 text-sm text-rose/90">
            Kids section:{" "}
            <Link href="/kids" className="font-semibold hover:text-rose">
              {site.kidsBrand}
            </Link>
          </p>
          <div className="mt-5">
            <BookButton label="Book on WhatsApp" variant="whatsapp" className="!text-xs" />
          </div>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Contact</p>
          <p className="mt-3 text-sm leading-relaxed">{formatAddress()}</p>
          {site.phones.map((phone) => (
            <p key={phone} className="mt-2 text-sm">
              <a href={`tel:${phoneTel(phone)}`} className="hover:text-cream">
                {phone}
              </a>
            </p>
          ))}
          <p className="mt-2 text-sm">
            <a href={`mailto:${site.email}`} className="hover:text-cream">
              {site.email}
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Explore</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-plum-soft/30 px-4 py-4 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
