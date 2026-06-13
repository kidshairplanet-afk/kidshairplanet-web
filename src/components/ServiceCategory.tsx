const colorMap: Record<string, string> = {
  gold: "from-gold-light/40 to-cream border-gold/30",
  rose: "from-rose/30 to-cream border-rose/40",
  plum: "from-plum-soft/10 to-cream border-plum/20",
};

type ServiceCategoryProps = {
  title: string;
  color: string;
  note: string | null;
  items: readonly string[];
  audience?: "kids" | "adults" | "both";
};

export function ServiceCategory({
  title,
  color,
  note,
  items,
  audience = "both",
}: ServiceCategoryProps) {
  const palette = colorMap[color] ?? colorMap.gold;

  return (
    <section
      className={`rounded-3xl border bg-gradient-to-br p-6 sm:p-8 ${palette}`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <h2 className="font-display text-2xl font-bold text-plum">{title}</h2>
        {audience === "kids" && (
          <span className="rounded-full bg-rose/40 px-3 py-0.5 text-xs font-bold text-plum">
            Kids Hair Planet
          </span>
        )}
        {audience === "adults" && (
          <span className="rounded-full bg-plum/10 px-3 py-0.5 text-xs font-bold text-plum">
            Adult Styles
          </span>
        )}
      </div>
      {note && (
        <p className="mt-2 text-sm font-medium text-plum-soft">{note}</p>
      )}

      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 rounded-xl bg-white/60 px-4 py-3 text-sm text-plum-soft"
          >
            <span className="mt-1 text-gold">◆</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
