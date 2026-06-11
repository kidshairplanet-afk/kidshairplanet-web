type ServiceCardProps = {
  title: string;
  price: string;
  description: string;
  emoji: string;
};

export function ServiceCard({ title, price, description, emoji }: ServiceCardProps) {
  return (
    <article className="group rounded-3xl border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-pink-100 text-2xl">
        {emoji}
      </div>
      <h3 className="mt-4 text-xl font-bold text-slate-800">{title}</h3>
      <p className="mt-1 text-sm font-semibold text-sky-600">{price}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}
