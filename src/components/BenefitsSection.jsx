import { Icon } from "./Icon";

const BenefitsSection = ({ data, styles, mode }) => {
  return (
    <section id={data.id} className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className={`text-2xl font-bold sm:text-3xl ${styles.heading}`}>{data.title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.cards.map((card) => (
          <article
            key={`${mode}-${card.title}`}
            className={`rounded-2xl p-5 transition duration-300 hover:-translate-y-1 ${styles.card}`}
          >
            <div className={`inline-flex rounded-xl p-2 ${styles.badge}`}>
              <Icon name={card.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
            <p className={`mt-2 text-sm ${styles.muted}`}>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
