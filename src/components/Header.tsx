import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-pink-400 text-lg shadow-sm">
            ✨
          </span>
          <span className="text-lg font-extrabold tracking-tight text-slate-800 group-hover:text-sky-600">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-sky-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-gradient-to-r from-sky-500 to-pink-500 px-4 py-2 text-sm font-bold text-white shadow-md transition hover:from-sky-600 hover:to-pink-600"
        >
          Book Now
        </Link>
      </div>

      <nav className="flex gap-1 overflow-x-auto border-t border-sky-50 px-4 py-2 md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-sky-50"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
