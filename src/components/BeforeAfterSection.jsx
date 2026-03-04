const BeforeAfterSection = ({ data, styles, mode }) => {
  return (
    <section id={data.id} className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className={`text-2xl font-bold sm:text-3xl ${styles.heading}`}>{data.title}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[data.before, data.after].map((block, index) => (
          <article
            key={`${mode}-${block.title}`}
            className={`rounded-2xl p-6 ${index === 0 ? styles.soft : styles.card}`}
          >
            <h3 className="text-xl font-semibold">{block.title}</h3>
            <ul className="mt-4 space-y-2">
              {block.points.map((point) => (
                <li key={`${mode}-${point}`} className={`text-sm sm:text-base ${styles.muted}`}>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BeforeAfterSection;
