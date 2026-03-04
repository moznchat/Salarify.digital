const SocialProofSection = ({ data, styles, mode }) => {
  return (
    <section id={data.id} className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
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

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {data.testimonials.map((item) => (
              <blockquote key={`${mode}-${item.name}`} className={`rounded-xl p-4 ${styles.soft}`}>
                <p className={`text-sm ${styles.muted}`}>{item.quote}</p>
                <footer className="mt-3 text-xs font-semibold">{item.name}</footer>
              </blockquote>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default SocialProofSection;
