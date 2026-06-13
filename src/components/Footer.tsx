import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { formatAddress, navLinks, phoneTel, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-sky-100 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-extrabold text-white">{site.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed">{site.tagline}</p>
          <div className="mt-4">
            <BookButton label="Book on WhatsApp" variant="whatsapp" className="!text-xs" />
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-sky-300">
            Contact
          </p>
          <p className="mt-3 text-sm leading-relaxed">{formatAddress()}</p>
          {site.phones.map((phone) => (
            <p key={phone} className="mt-2 text-sm">
              <a href={`tel:${phoneTel(phone)}`} className="hover:text-white">
                {phone}
              </a>
            </p>
          ))}
          <p className="mt-2 text-sm">
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-pink-300">
            Quick Links
          </p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
