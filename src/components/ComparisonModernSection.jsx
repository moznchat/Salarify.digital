import { Icon } from "./Icon";
import { getLocalizedText } from "../utils/format";

const ComparisonModernSection = ({ section, locale, styles }) => {
  return (
    <section id={section.modes.minimal.id} className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div className="flex items-center">
        <h2 className={`text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${styles.heading}`}>
          {getLocalizedText(section.title, locale)}
        </h2>
      </div>

      <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
        <div className="grid grid-cols-[1fr_88px_88px] bg-slate-100 px-4 py-3 text-xs font-bold uppercase tracking-wide">
          <span></span>
          <span className="text-center">{section.headers.left}</span>
          <span className="text-center">{section.headers.right}</span>
        </div>

        {section.features.map((feature, idx) => (
          <div key={idx} className="grid grid-cols-[1fr_88px_88px] items-center border-t border-slate-200 px-4 py-3">
            <p className="pr-3 text-sm font-semibold text-slate-700">{getLocalizedText(feature.label, locale)}</p>
            <div className="grid place-items-center">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Icon name={feature.ours ? "check" : "x"} className="h-4 w-4" />
              </span>
            </div>
            <div className="grid place-items-center">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <Icon name={feature.theirs ? "check" : "x"} className="h-4 w-4" />
              </span>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default ComparisonModernSection;
