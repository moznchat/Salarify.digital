import { buildWhatsAppUrl, formatPrice } from "../utils/format";
import { Icon } from "./Icon";

const Hero = ({ brand, product, data, styles, mode }) => {
  const primaryUrl = buildWhatsAppUrl(brand.whatsappBaseUrl, data.whatsappMessage);

  return (
    <section id={data.id} className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}>
            {data.eyebrow}
          </span>

          {data.scarcityBadge && (
            <span className={`ml-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles.soft}`}>
              {data.scarcityBadge}
            </span>
          )}

          <h1 className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${styles.heading}`}>
            {data.headline}
          </h1>
          <p className={`mt-4 text-base sm:text-lg ${styles.muted}`}>{data.subheadline}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className={`rounded-full px-4 py-2 text-sm font-semibold ${styles.badge}`}>
              {formatPrice(product.price, product.currency)}
            </span>
            <span className="text-sm line-through opacity-70">{formatPrice(product.oldPrice, product.currency)}</span>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles.soft}`}>{product.discountBadge}</span>
          </div>

          <ul className="mt-6 space-y-2">
            {data.benefits.map((benefit) => (
              <li key={`${mode}-${benefit}`} className="flex items-start gap-2 text-sm sm:text-base">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className={styles.muted}>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={primaryUrl}
              className={`rounded-full px-6 py-3 text-center text-sm font-semibold transition ${styles.primaryButton}`}
              target="_blank"
              rel="noreferrer"
            >
              {data.primaryCta}
            </a>
            <a
              href="#benefits"
              className={`rounded-full px-6 py-3 text-center text-sm font-semibold transition ${styles.secondaryButton}`}
            >
              {data.secondaryCta}
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {product.paymentBadges.map((badge) => (
              <span key={`${mode}-${badge}`} className={`rounded-full px-3 py-1 text-xs ${styles.soft}`}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {product.gallery.map((item) => (
            <article
              key={`${mode}-${item.title}`}
              className={`rounded-2xl p-5 transition duration-300 hover:-translate-y-1 ${styles.card}`}
              style={{
                backgroundImage: `linear-gradient(140deg, ${item.startColor}, ${item.endColor})`
              }}
            >
              <div className="rounded-xl bg-white/75 p-4 backdrop-blur-sm">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mb-3 h-36 w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                )}
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs text-slate-700">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
