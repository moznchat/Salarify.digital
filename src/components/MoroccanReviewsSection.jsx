import { getLocalizedText } from "../utils/format";
import { Icon } from "./Icon";

const MoroccanReviewsSection = ({ section, locale, styles }) => {
  return (
    <section id={section.modes.minimal.id} className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className={`text-3xl font-extrabold ${styles.heading}`}>{getLocalizedText(section.title, locale)}</h2>
      <p className={`mt-2 text-sm ${styles.muted}`}>{getLocalizedText(section.subtitle, locale)}</p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item) => (
          <article
            key={item.name}
            className="relative rounded-[28px] border border-slate-200 bg-white px-6 pb-7 pt-14 shadow-[0_16px_30px_rgba(15,23,42,0.08)]"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg"
                loading="lazy"
              />
            </div>

            <div className="flex items-center justify-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Icon key={`${item.name}-star-${idx}`} name="star" className="h-5 w-5" />
              ))}
            </div>

            <p className="mt-4 text-center text-base leading-relaxed text-slate-700">"{getLocalizedText(item.quote, locale)}"</p>

            <div className="mx-auto mt-6 w-fit rounded-2xl bg-slate-800 px-5 py-2 text-center text-white shadow-md">
              <h3 className="text-lg font-bold leading-none">{item.name}</h3>
              <p className="mt-1 text-xs text-emerald-300">{item.city}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MoroccanReviewsSection;
