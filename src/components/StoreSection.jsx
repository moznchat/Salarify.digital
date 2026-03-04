import { useState } from "react";
import { buildWhatsAppUrl, formatPrice, getLocalizedText } from "../utils/format";
import { Icon } from "./Icon";

const StoreSection = ({ data, store, brand, product, styles, locale }) => {
  const template = store.template;
  const isArabic = locale === "ar";
  const [activeImage, setActiveImage] = useState(0);
  const currentMedia = template.media[activeImage] || template.media[0];
  const waUrl = buildWhatsAppUrl(brand.whatsappBaseUrl, getLocalizedText(template.whatsappMessage, locale));
  const prevImage = () => setActiveImage((prev) => (prev === 0 ? template.media.length - 1 : prev - 1));
  const nextImage = () => setActiveImage((prev) => (prev === template.media.length - 1 ? 0 : prev + 1));

  return (
    <section id={data.id} dir={isArabic ? "rtl" : "ltr"} className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <article className={`rounded-3xl p-4 sm:p-6 ${styles.card}`}>
        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
          <div className="order-1">
            <img
              src={currentMedia.image}
              alt={getLocalizedText(currentMedia.alt, locale)}
              className="h-[360px] w-full rounded-2xl object-cover sm:h-[460px]"
            />

            <div className="mt-3 flex items-center gap-2">
              <button type="button" onClick={prevImage} className={`rounded-full p-1 ${styles.soft}`}>
                <Icon name="chevron-left" className="h-4 w-4" />
              </button>
              <div className="flex gap-2 overflow-x-auto">
                {template.media.map((item, idx) => (
                  <button
                    key={item.image}
                    type="button"
                    onClick={() => setActiveImage(idx)}
                    className={`shrink-0 overflow-hidden rounded-xl border-2 transition ${
                      idx === activeImage ? "border-emerald-500" : "border-transparent"
                    }`}
                  >
                    <img src={item.image} alt={getLocalizedText(item.alt, locale)} className="h-16 w-20 object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
              <button type="button" onClick={nextImage} className={`rounded-full p-1 ${styles.soft}`}>
                <Icon name="chevron-right" className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className={`order-2 ${isArabic ? "text-right" : "text-left"}`}>
            <div className="flex items-center gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}>
                {getLocalizedText(template.discountLabel, locale)}
              </span>
              <span className={`text-sm ${styles.muted}`}>-{template.discountPercent}%</span>
            </div>

            <p className="mt-3 text-3xl font-bold">
              {formatPrice(template.price, product.currency)}
              <span className={`ml-2 text-xl line-through ${styles.muted}`}>{formatPrice(template.oldPrice, product.currency)}</span>
            </p>

            <p className={`mt-1 text-sm ${styles.muted}`}>{getLocalizedText(template.taxLabel, locale)}</p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight">{getLocalizedText(template.title, locale)}</h3>
            <p className={`mt-2 text-sm ${styles.muted}`}>{getLocalizedText(template.subtitle, locale)}</p>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="font-semibold">{template.vendor.name}</span>
              <span className="inline-flex items-center gap-1">
                <Icon name="star" className="h-4 w-4 text-amber-500" />
                {template.vendor.rating}
              </span>
              <span className={styles.muted}>({template.vendor.reviews})</span>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className={`mt-5 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${styles.primaryButton}`}
            >
              {getLocalizedText(template.cta, locale)}
            </a>

            <p className={`mt-4 text-sm font-semibold ${styles.heading}`}>{getLocalizedText(template.vendor.badge, locale)}</p>
            <p className={`text-sm ${styles.muted}`}>{getLocalizedText(template.vendor.response, locale)}</p>
            <p className={`mt-2 text-xs ${styles.muted}`}>{getLocalizedText(template.urgency, locale)}</p>

            <ul className="mt-4 space-y-2">
              {template.bullets.map((bullet) => (
                <li key={bullet.icon + getLocalizedText(bullet.text, locale)} className="flex items-center gap-2 text-sm">
                  <Icon name={bullet.icon} className="h-4 w-4" />
                  {getLocalizedText(bullet.text, locale)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default StoreSection;
