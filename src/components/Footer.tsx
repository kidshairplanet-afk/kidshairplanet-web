import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

  return (
    <footer className="mt-auto border-t border-sky-100 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold text-white">{site.name}</p>
          <p className="mt-2 text-sm leading-relaxed">{site.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-sky-300">
            Visit Us
          </p>
          <p className="mt-3 text-sm leading-relaxed">{fullAddress}</p>
          <p className="mt-2 text-sm">
            <a href={`tel:${site.phone}`} className="hover:text-white">
              {site.phone}
            </a>
          </p>
          <p className="text-sm">
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
