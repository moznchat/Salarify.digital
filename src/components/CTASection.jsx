import { buildWhatsAppUrl, formatPrice } from "../utils/format";

const CTASection = ({ id, data, product, brand, styles }) => {
  const link = buildWhatsAppUrl(brand.whatsappBaseUrl, data.whatsappMessage);

  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <article className={`rounded-3xl p-8 text-center ${styles.card}`}>
        <h2 className={`text-2xl font-bold sm:text-3xl ${styles.heading}`}>{data.headline}</h2>
        <p className={`mx-auto mt-3 max-w-2xl text-sm sm:text-base ${styles.muted}`}>{data.subheadline}</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <span className={`rounded-full px-4 py-2 text-sm font-semibold ${styles.badge}`}>
            {formatPrice(product.price, product.currency)}
          </span>
          <span className="text-sm line-through opacity-70">{formatPrice(product.oldPrice, product.currency)}</span>
        </div>
        <a
          href={link}
          className={`mt-6 inline-flex rounded-full px-7 py-3 text-sm font-semibold transition ${styles.primaryButton}`}
          target="_blank"
          rel="noreferrer"
        >
          {data.button}
        </a>
        <p className={`mt-3 text-xs font-semibold ${styles.muted}`}>{data.urgency}</p>
      </article>
    </section>
  );
};

export default CTASection;
