import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { navLinks, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cream-dark/80 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="group min-w-0">
          <span className="font-display text-lg font-bold tracking-tight text-plum sm:text-xl">
            {site.name}
          </span>
          <span className="mt-0.5 block truncate text-[10px] font-semibold tracking-[0.2em] text-gold uppercase sm:text-xs">
            Premium Braiding Studio
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-2 text-xs font-semibold transition xl:px-4 xl:text-sm ${
                link.href === "/kids"
                  ? "text-rose-deep hover:bg-rose/20"
                  : "text-plum-soft hover:bg-cream-dark hover:text-plum"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <BookButton
          label="Book"
          variant="whatsapp"
          className="!px-4 !py-2 !text-xs sm:!text-sm"
        />
      </div>

      <nav className="flex gap-1 overflow-x-auto border-t border-cream-dark/60 px-4 py-2 lg:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold text-plum-soft transition hover:bg-cream-dark"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
