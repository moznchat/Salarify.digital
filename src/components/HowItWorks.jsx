const HowItWorks = ({ data, styles, mode }) => {
  return (
    <section id={data.id} className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className={`text-2xl font-bold sm:text-3xl ${styles.heading}`}>{data.title}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {data.steps.map((step, index) => (
          <article key={`${mode}-${step.title}`} className={`rounded-2xl p-5 ${styles.card}`}>
            <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${styles.badge}`}>
              {index + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className={`mt-2 text-sm ${styles.muted}`}>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
