import { buildWhatsAppUrl, formatPrice } from "../utils/format";
import { Icon } from "./Icon";

const Hero = ({ brand, product, data, styles, mode }) => {
  const primaryUrl = buildWhatsAppUrl(brand.whatsappBaseUrl, data.whatsappMessage);
  const trustBadges = [
    "Paiement unique",
    "Acces a vie",
    "Compatible mobile & PC",
    "Telechargement instantane"
  ];

  return (
    <section id={data.id} className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
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

          <h1 className={`mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${styles.heading}`}>
            {data.headline}
          </h1>
          <p className={`mt-4 text-base sm:text-lg ${styles.muted}`}>{data.subheadline}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className={`rounded-full px-4 py-2 text-sm font-bold ${styles.badge}`}>
              {formatPrice(product.price, product.currency)}
            </span>
            <span className="text-sm line-through opacity-70">{formatPrice(product.oldPrice, product.currency)}</span>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles.soft}`}>{product.discountBadge}</span>
          </div>

          <ul className="mt-6 space-y-2.5">
            {data.benefits.map((benefit) => (
              <li key={`${mode}-${benefit}`} className="flex items-start gap-2 text-sm font-medium sm:text-base">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className={styles.muted}>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={primaryUrl}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-center text-base font-bold transition duration-200 hover:-translate-y-0.5 sm:w-auto ${styles.primaryButton}`}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              {data.primaryCta}
            </a>
            <a
              href="#comparison-modern"
              className={`w-full rounded-full px-7 py-4 text-center text-base font-semibold transition sm:w-auto ${styles.secondaryButton}`}
            >
              {data.secondaryCta}
            </a>
          </div>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {trustBadges.map((badge) => (
              <span key={`${mode}-${badge}`} className={`rounded-full px-3 py-1 text-xs ${styles.soft}`}>
                <Icon name="check" className="mr-1 inline-block h-3.5 w-3.5 text-emerald-600" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {product.gallery.slice(0, 4).map((item) => (
            <article
              key={`${mode}-${item.title}`}
              className={`rounded-2xl p-4 transition duration-300 hover:-translate-y-1 ${styles.card}`}
              style={{
                backgroundImage: `linear-gradient(140deg, ${item.startColor}, ${item.endColor})`
              }}
            >
              <div className="rounded-xl bg-white/80 p-4 backdrop-blur-sm">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mb-3 h-32 w-full rounded-lg object-cover sm:h-36"
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
