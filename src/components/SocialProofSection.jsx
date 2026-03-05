const SocialProofSection = ({ data, styles, mode }) => {
  return (
    <section id={data.id} className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className={`text-2xl font-bold sm:text-3xl ${styles.heading}`}>{data.title}</h2>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <article className={`rounded-2xl p-6 ${styles.card}`}>
          <div
            className={`mx-auto grid h-40 w-40 place-items-center rounded-full p-3 ${styles.accentRing} ring-8`}
            style={{
              backgroundImage: `conic-gradient(#22c55e ${data.circle.value}%, rgba(148,163,184,0.25) ${data.circle.value}% 100%)`
            }}
          >
            <div className="grid h-full w-full place-items-center rounded-full bg-white/90 text-slate-900">
              <span className="text-3xl font-bold">{data.circle.value}%</span>
            </div>
          </div>
          <p className={`mt-4 text-center text-sm ${styles.muted}`}>{data.circle.label}</p>
        </article>

        <article className={`rounded-2xl p-6 lg:col-span-2 ${styles.card}`}>
          <div className="grid gap-4 sm:grid-cols-3">
            {data.stats.map((stat) => (
              <div key={`${mode}-${stat.label}`} className={`rounded-xl p-4 ${styles.soft}`}>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className={`mt-1 text-xs ${styles.muted}`}>{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {data.testimonials.map((item) => {
              const [name, city] = item.name.split(",");

              return (
                <blockquote
                  key={`${mode}-${item.name}`}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.07)]"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-slate-100 text-xs font-bold text-slate-700">
                      {name
                        .trim()
                        .split(" ")
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join("")
                        .toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{name}</p>
                      <p className="text-xs text-slate-500">{city?.trim() || "Maroc"}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-amber-500">{"★★★★★"}</div>
                  <p className="mt-3 text-sm text-slate-700">{item.quote}</p>
                </blockquote>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default SocialProofSection;
