import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Kids Hair Planet and our kid-first salon experience.",
};

const values = [
  {
    title: "Patience first",
    description:
      "We move at your child's pace—never rushing a nervous first-timer or squirmy toddler.",
    emoji: "🐢",
  },
  {
    title: "Playful atmosphere",
    description:
      "Bright colors, friendly faces, and a space that feels more like fun than a chore.",
    emoji: "🌈",
  },
  {
    title: "Skilled stylists",
    description:
      "Our team specializes in children's hair and knows how to work with every age and texture.",
    emoji: "💇",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wider text-pink-500">
          About Us
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-slate-900">
          A salon built for kids—and peace of mind for parents
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {site.name} was created because kids deserve a haircut experience that
          feels safe, positive, and even exciting. We combine professional styling
          with the warmth and flexibility families need.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <article
            key={value.title}
            className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm"
          >
            <div className="text-3xl">{value.emoji}</div>
            <h2 className="mt-4 text-xl font-bold text-slate-800">{value.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {value.description}
            </p>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-[2rem] bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-extrabold text-slate-900">Our story</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          <p>
            What started as a small chair in the corner of a family salon grew into
            a dedicated space where children are the priority—not an afterthought.
            Parents told us they wanted stylists who understood wiggles, tears, and
            triumphs. We listened.
          </p>
          <p>
            Today, {site.name} welcomes babies getting their first trim, tweens
            exploring new styles, and everyone in between. Every visit is a chance
            to build confidence and create a memory worth smiling about.
          </p>
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-gradient-to-r from-sky-500 to-pink-500 px-5 py-2.5 text-sm font-bold text-white transition hover:from-sky-600 hover:to-pink-600"
        >
          Plan your visit
        </Link>
      </section>
    </div>
  );
}
