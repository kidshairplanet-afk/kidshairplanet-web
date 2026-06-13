type ServiceCategoryProps = {
  title: string;
  emoji: string;
  color: string;
  note: string | null;
  items: readonly string[];
};

const colorMap: Record<string, string> = {
  sky: "from-sky-50 to-sky-100 border-sky-200",
  emerald: "from-emerald-50 to-emerald-100 border-emerald-200",
  amber: "from-amber-50 to-amber-100 border-amber-200",
  pink: "from-pink-50 to-pink-100 border-pink-200",
};

export function ServiceCategory({
  title,
  emoji,
  color,
  note,
  items,
}: ServiceCategoryProps) {
  const palette = colorMap[color] ?? colorMap.sky;

  return (
    <section
      className={`rounded-3xl border bg-gradient-to-br p-6 sm:p-8 ${palette}`}
    >
      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
          {emoji}
        </span>
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">{title}</h2>
          {note && (
            <p className="mt-1 text-sm font-semibold text-slate-600">{note}</p>
          )}
        </div>
      </div>

      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 rounded-xl bg-white/70 px-4 py-3 text-sm font-medium text-slate-700"
          >
            <span className="mt-1 text-sky-500">•</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
